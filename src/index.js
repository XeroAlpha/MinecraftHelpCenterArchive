import { writeFileSync, mkdirSync, utimesSync, existsSync, readFileSync, readdirSync, rmSync } from 'fs';
import { resolve as resolvePath, join as joinPath, relative as relativePath, sep as pathSep } from 'path';
import { sep as pathSepPosix } from 'path/posix';
import { fileURLToPath } from 'url';
import { stringify as stringifyYaml, parse as parseYaml } from 'yaml';
import { listArticles, listSections } from './zendesk.js';
import { analyzeHtml, convertHtmlToMarkdown } from './html2md.js';
import { Parallel } from './parallel.js';

async function arrayFromAsync(asyncIterator) {
    const ret = [];
    for await (const value of asyncIterator) {
        ret.push(value);
    }
    return ret;
}

const projectRoot = resolvePath(fileURLToPath(import.meta.url), '..', '..');

const titleToId = (title) => title.split(/\W+/).filter((e) => e.length > 0).join('-');

function listLocalArticles(path) {
    const articles = [];
    const visitor = (path) => {
        readdirSync(path, { withFileTypes: true }).forEach((f) => {
            const childPath = resolvePath(path, f.name);
            if (f.isDirectory()) {
                visitor(childPath);
            } else if (childPath.endsWith('.md')) {
                const markdownContent = readFileSync(childPath, 'utf-8');
                const frontmatterMatch = markdownContent.match(/^---\n([^]+?)\n---\n/);
                if (frontmatterMatch) {
                    const frontmatter = parseYaml(frontmatterMatch[1]);
                    articles.push({ path: childPath, frontmatter });
                }
            }
        });
    }
    visitor(path);
    return articles;
}

function simplifyArticleUrl(articleUrl) {
    const urlObj = new URL(articleUrl);
    return `${urlObj.origin}${urlObj.pathname.replace(/(\/\d+)[^/]*$/, '$1')}${urlObj.hash}`;
}

class LinkDatabase {
    constructor() {
        this.index = [];
    }

    loadFromFile(path) {
        const articles = listLocalArticles(path);
        articles.forEach(({ path, frontmatter }) => this.addLink(path, frontmatter));
    }

    addLink(path, frontmatter) {
        let found = this.index.find((e) => e.path === path);
        if (!found) {
            found = { path };
            this.index.push(found);
        }
        found.updated = frontmatter.updated || frontmatter.date;
        found.url = simplifyArticleUrl(frontmatter.link);
        found.hashMap = frontmatter.hash;
    }

    getByUrl(url) {
        const simplifiedUrl = simplifyArticleUrl(url);
        return this.index.find((e) => e.url === simplifiedUrl);
    }

    resolveLink(url, hash) {
        const found = this.getByUrl(url);
        if (found) {
            if (hash) {
                const { hashMap } = found;
                return [found.path, hashMap?.[hash] ?? hash];
            } else {
                return [found.path];
            }
        }
        return null;
    }
}

async function listArticleData({ zendeskOptions, database, incremental, baseUrlRewrite }) {
    const result = [];
    let sections = null;
    const findSection = async (id) => {
        if (!sections) {
            sections = await arrayFromAsync(listSections({
                ...zendeskOptions,
                pageSize: 100
            }));
        }
        return sections.find((e) => e.id === id);
    }
    const articleIter = listArticles({
        ...zendeskOptions,
        sortBy: 'edited_at',
        sortOrder: 'desc',
        pageSize: 100
    });
    for await (const article of articleIter) {
        let articleUrl = article.html_url; // Canonical form
        if (baseUrlRewrite) {
            articleUrl = baseUrlRewrite(articleUrl);
        }
        const localCopy = database.getByUrl(articleUrl);
        if (incremental && localCopy && localCopy.updated === article.edited_at) {
            break; // Assume articles that updated before it has been updated
        }
        const section = article.section_id ? await findSection(article.section_id) : undefined;
        result.push({
            url: articleUrl,
            article,
            section
        });
    }
    return result;
}

async function analyzeArticleNetwork({ url, section, article }, database, basePath) {
    const { json, hashMap } = await analyzeHtml(article.body);
    const frontmatter = {
        title: article.title,
        date: article.created_at,
        updated: article.created_at !== article.edited_at ? article.edited_at : undefined,
        categories: section ? section.name : undefined,
        tags: article.label_names?.length ? article.label_names : undefined,
        link: url,
        hash: Object.keys(hashMap).length > 0 ? hashMap : undefined
    };
    const pathRelative = joinPath(section ? titleToId(section.name) : 'others', `${titleToId(article.name)}.md`);
    const path = resolvePath(basePath, pathRelative);
    database.addLink(path, frontmatter);
    return { path, json, frontmatter };
}

async function saveArticle({ url, article }, { path, json, frontmatter }, database) {
    const simplifiedUrl = simplifyArticleUrl(url);
    const articleBodyMarkdown = await convertHtmlToMarkdown(json, {
        normalizeUrl: (urlObj) => {
            if (!urlObj.origin || urlObj.origin === 'null') return urlObj.toString();
            const hash = urlObj.hash;
            const urlToRequest = simplifyArticleUrl(`${urlObj.origin}${urlObj.pathname}`);
            const linkTarget = database.resolveLink(urlToRequest, hash.replace(/^#/, ''));
            if (linkTarget) {
                const [linkPath, linkHash] = linkTarget;
                let linkPathRelative = relativePath(resolvePath(path, '..'), linkPath).replaceAll(pathSep, pathSepPosix);
                if (!linkPathRelative.startsWith('../')) {
                    linkPathRelative = `./${linkPathRelative}`;
                }
                if (urlToRequest === simplifiedUrl) {
                    return `#${linkHash}`;
                }
                if (linkHash) {
                    return `${linkPathRelative}#${linkHash}`;
                }
                return linkPathRelative;
            }
            return urlObj.toString();
        },
        baseUrl: url
    });
    const articleMarkdown = [
        '---',
        stringifyYaml(frontmatter).trim(),
        '---',
        '',
        articleBodyMarkdown.trim(),
        ''
    ].join('\n');
    mkdirSync(resolvePath(path, '..'), { recursive: true });
    writeFileSync(path, articleMarkdown);
    utimesSync(path, new Date(article.created_at), new Date(article.updated_at));
}

async function main(fullUpdate) {
    const incremental = fullUpdate !== 'full';
    const optionList = [
        {
            zendeskOptions: {
                host: 'minecraftfeedback',
                lang: 'en-us'
            },
            basePath: resolvePath(projectRoot, 'feedback')
        },
        {
            zendeskOptions: {
                host: 'minecrafthelp',
                lang: 'en-us'
            },
            basePath: resolvePath(projectRoot, 'help'),
            baseUrlRewrite: (url) => url.replace(/^https:\/\/minecrafthelp\.zendesk\.com\//, 'https://help.minecraft.net/')
        }
    ];
    const database = new LinkDatabase();
    optionList.forEach(({ basePath: path }) => database.loadFromFile(path));
    const notVisited = new Set(database.index.map(({ path }) => path));
    const analysisData = [];
    for (let i = 0; i < optionList.length; i++) {
        const { zendeskOptions, basePath, baseUrlRewrite } = optionList[i];
        const articleDataList = await listArticleData({ zendeskOptions, database, incremental, baseUrlRewrite });
        const articleAnalysisResults = await Parallel.map(articleDataList, async (e) => {
            const localCopyPath = database.getByUrl(e.url)?.path;
            const articleAnalysisResult = await analyzeArticleNetwork(e, database, basePath);
            return [e, localCopyPath, articleAnalysisResult];
        });
        analysisData.push(...articleAnalysisResults);
    }
    const pendingJobs = [];
    for (const [articleData, localCopyPath, articleAnalysisResult] of analysisData) {
        pendingJobs.push(Parallel.run(async () => {
            const { path } = articleAnalysisResult;
            const pathRelative = relativePath(projectRoot, path).replaceAll(pathSep, pathSepPosix);
            if (localCopyPath) {
                process.stdout.write(`[M]${pathRelative}\n`);
                rmSync(localCopyPath);
                notVisited.delete(localCopyPath);
            } else {
                process.stdout.write(`[A]${pathRelative}\n`);
            }
            notVisited.delete(path);
            await saveArticle(articleData, articleAnalysisResult, database);
        }));
    }
    await Promise.all(pendingJobs);
    if (!incremental && notVisited.size > 0) {
        notVisited.forEach((path) => {
            const pathRelative = relativePath(projectRoot, path).replaceAll(pathSep, pathSepPosix);
            process.stdout.write(`[D]${pathRelative}\n`);
            rmSync(path);
        });
    }
}

main(...process.argv.slice(2)); 
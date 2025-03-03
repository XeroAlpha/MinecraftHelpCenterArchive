import { writeFileSync, mkdirSync, utimesSync, readFileSync, readdirSync, rmSync, rmdirSync, existsSync } from 'fs';
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
    if (existsSync(path)) {
        visitor(path);
    }
    return articles;
}

function removeEmptyDirectory(path) {
    const children = readdirSync(path, { withFileTypes: true });
    const childDirectoryIsRemoved = children
        .filter((e) => e.isDirectory())
        .map((e) => removeEmptyDirectory(resolvePath(path, e.name)));
    if (childDirectoryIsRemoved.length < children.length) {
        return false;
    }
    if (childDirectoryIsRemoved.every((e) => e)) {
        rmdirSync(path);
        return true;
    }
    return false;
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

    getTrackingFiles() {
        return this.index.map(({ path }) => path);
    }

    addLink(path, frontmatter) {
        let found = this.getByPath(path);
        if (!found) {
            found = { path };
            this.index.push(found);
        }
        found.updated = frontmatter.updated || frontmatter.date;
        found.url = simplifyArticleUrl(frontmatter.link);
        found.hashMap = frontmatter.hash;
    }

    deleteLink(path) {
        const foundIndex = this.index.findIndex((e) => e.path === path);
        if (foundIndex >= 0) {
            this.index.splice(foundIndex, 1);
        }
    }

    getByUrl(url) {
        const simplifiedUrl = simplifyArticleUrl(url);
        return this.index.find((e) => e.url === simplifiedUrl);
    }

    getByPath(path, ignoreCase) {
        if (ignoreCase) {
            const pathLowerCase = path.toLowerCase();
            return this.index.find((e) => e.path.toLowerCase() === pathLowerCase);
        }
        return this.index.find((e) => e.path === path);
    }

    isConflict(path, url) {
        const simplifiedUrl = simplifyArticleUrl(url);
        const file = this.getByPath(path, true);
        return file !== undefined && file.url !== simplifiedUrl;
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

function generatePath({ section, article }, basePath, deduplicate) {
    const suffix = deduplicate ? `.${article.id}` : '';
    const pathRelative = joinPath(section ? titleToId(section.name) : 'others', `${titleToId(article.name)}${suffix}.md`);
    return resolvePath(basePath, pathRelative);
}

async function analyzeArticleNetwork({ url, section, article }) {
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
    return { json, frontmatter };
}

async function saveArticle({ url, article }, { path, json, frontmatter }, database, { urlRewriter }) {
    const simplifiedUrl = simplifyArticleUrl(url);
    const articleBodyMarkdown = await convertHtmlToMarkdown(json, {
        normalizeUrl: (urlObj) => {
            if (urlRewriter) {
                urlObj = urlRewriter(urlObj);
            }
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
                if (urlToRequest === simplifiedUrl && linkHash) {
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
        stringifyYaml(frontmatter, { lineWidth: 0 }).trim(),
        '---',
        '',
        articleBodyMarkdown.trim(),
        ''
    ].join('\n');
    mkdirSync(resolvePath(path, '..'), { recursive: true });
    writeFileSync(path, articleMarkdown);
    utimesSync(path, new Date(article.created_at), new Date(article.updated_at));
}

function getDuplicatedItems(items, getKey) {
    const map = new Map();
    items.forEach((e) => {
        const key = getKey(e);
        if (map.has(key)) {
            map.get(key).push(e);
        } else {
            map.set(key, [e]);
        }
    });
    return [...map.values()].filter((e) => e.length > 1).flat(1);
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
        },
        {
            zendeskOptions: {
                host: 'minecrafteducationedition',
                lang: 'en-us'
            },
            basePath: resolvePath(projectRoot, 'education'),
        }
    ];
    const urlRewriter = (urlObj) => {
        if (!urlObj.pathname.startsWith('/hc/article_attachments/')) {
            if (urlObj.host === 'minecrafthelp.zendesk.com') {
                urlObj.host = 'help.minecraft.net';
            } else if (urlObj.host === 'educommunity.minecraft.net') {
                urlObj.host = 'edusupport.minecraft.net';
            }
        }
        return urlObj;
    };
    const database = new LinkDatabase();
    optionList.forEach(({ basePath: path }) => database.loadFromFile(path));
    const notVisited = new Set(database.getTrackingFiles());
    const analysisData = [];
    for (let i = 0; i < optionList.length; i++) {
        const { zendeskOptions, basePath, baseUrlRewrite } = optionList[i];
        const articleDataList = await listArticleData({ zendeskOptions, database, incremental, baseUrlRewrite });
        const articleAnalysisResults = await Parallel.map(articleDataList, async (e) => {
            const articleAnalysisResult = await analyzeArticleNetwork(e);
            const localPath = database.getByUrl(e.url)?.path;
            let path;
            if (incremental) {
                path = localPath ?? generatePath(e, basePath);
                if (database.isConflict(path, e.url)) {
                    path = generatePath(e, basePath, true);
                }
            } else {
                path = generatePath(e, basePath);
            }
            articleAnalysisResult.localPath = localPath;
            articleAnalysisResult.path = path;
            return [e, articleAnalysisResult];
        });
        const duplicatedList = getDuplicatedItems(articleAnalysisResults, ([, { path }]) => path.toLowerCase());
        duplicatedList.forEach(([articleData, articleAnalysisResult]) => {
            articleAnalysisResult.path = generatePath(articleData, basePath, true);
        });
        analysisData.push(...articleAnalysisResults);
    }
    analysisData.forEach(([, articleAnalysisResult]) => {
        const { path, localPath, frontmatter } = articleAnalysisResult;
        const pathRelative = relativePath(projectRoot, path).replaceAll(pathSep, pathSepPosix);
        database.addLink(path, frontmatter);
        if (localPath) {
            if (localPath !== path) {
                process.stdout.write(`[R]${pathRelative}\n`);
                rmSync(localPath, { force: true }); // incremental only
            } else {
                process.stdout.write(`[M]${pathRelative}\n`);
            }
        } else {
            process.stdout.write(`[A]${pathRelative}\n`);
        }
        notVisited.delete(path);
    });
    if (!incremental && notVisited.size > 0) {
        notVisited.forEach((path) => {
            const pathRelative = relativePath(projectRoot, path).replaceAll(pathSep, pathSepPosix);
            process.stdout.write(`[D]${pathRelative}\n`);
            database.deleteLink(path);
            rmSync(path, { force: true });
        });
    }
    const pendingJobs = [];
    for (const [articleData, articleAnalysisResult] of analysisData) {
        pendingJobs.push(Parallel.run(async () => {
            await saveArticle(articleData, articleAnalysisResult, database, { urlRewriter });
        }));
    }
    await Promise.all(pendingJobs);
    optionList.forEach(({ basePath }) => removeEmptyDirectory(basePath));
}

main(...process.argv.slice(2)); 

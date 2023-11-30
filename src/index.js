import { writeFileSync, mkdirSync, utimesSync, existsSync, readFileSync, readdirSync, rmSync } from 'fs';
import { resolve as resolvePath, join as joinPath, relative as relativePath, sep as pathSep } from 'path';
import { sep as pathSepPosix } from 'path/posix';
import { fileURLToPath } from 'url';
import { stringify as stringifyYaml, parse as parseYaml } from 'yaml';
import { listArticles, listSections } from './zendesk.js';
import { analyzeHtml, convertHtmlToMarkdown } from './html2md.js';

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

class LinkDatabase {
    constructor(path) {
        this.path = path;
        this.links = existsSync(path) ? JSON.parse(readFileSync(path, 'utf-8')) : [];
    }

    addLink(url, path, hashMap) {
        const foundIndex = this.links.findIndex((e) => e.url === url);
        const pathRelative = relativePath(projectRoot, path).replaceAll(pathSep, pathSepPosix);
        const opt = { url, path: pathRelative, hashMap };
        if (foundIndex >= 0) {
            this.links[foundIndex] = opt;
        } else {
            this.links.push(opt);
        }
    }

    findLink(url, hash) {
        const found = this.links.find((e) => e.url === url);
        if (found) {
            const foundPath = resolvePath(projectRoot, found.path);
            if (hash) {
                const { hashMap } = found;
                return [foundPath, hashMap[hash] ?? hash];
            } else {
                return [foundPath];
            }
        }
        return null;
    }

    save() {
        this.links.sort((a, b) => a.url > b.url ? 1 : a.url < b.url ? -1 : 0);
        writeFileSync(this.path, JSON.stringify(this.links, null, 2));
    }
}

async function updateArticles({ zendeskOptions, path, databaseFile, incremental, baseUrlRewrite }) {
    let sections = null;
    const database = new LinkDatabase(databaseFile);
    const findSection = async (id) => {
        if (!sections) {
            sections = await arrayFromAsync(listSections({
                ...zendeskOptions,
                pageSize: 100
            }));
        }
        return sections.find((e) => e.id === id);
    }
    mkdirSync(path, { recursive: true });
    const localArticles = listLocalArticles(path);
    const articleIter = listArticles({
        ...zendeskOptions,
        sortBy: 'edited_at',
        sortOrder: 'desc',
        pageSize: 100
    });
    const added = [];
    const edited = [];
    for await (const article of articleIter) {
        const localCopyIndex = localArticles.findIndex(({ frontmatter }) => article.html_url === frontmatter.link && article.edited_at === frontmatter.updated);
        if (localCopyIndex >= 0) {
            if (incremental) {
                break; // Assume articles that updated before it has been updated
            }
            localArticles.splice(localCopyIndex, 1);
        }
        const matchSection = article.section_id ? await findSection(article.section_id) : undefined;
        const articleMarkdownRelative = joinPath(matchSection ? titleToId(matchSection.name) : 'others', `${titleToId(article.name)}.md`);
        const articleMarkdownPath = resolvePath(path, articleMarkdownRelative);
        const markdownExisted = existsSync(articleMarkdownPath);
        let articleUrl = article.html_url;
        if (baseUrlRewrite) {
            articleUrl = baseUrlRewrite(articleUrl);
        }
        const convertContext = analyzeHtml(article.body);
        database.addLink(articleUrl, articleMarkdownPath, convertContext.hashMap);
        const articleBodyMarkdown = convertHtmlToMarkdown(convertContext.json, {
            normalizeUrl: (urlObj) => {
                const hash = urlObj.hash;
                const urlToRequest = `${urlObj.origin}${urlObj.pathname}`;
                const linkTarget = database.findLink(urlToRequest, hash.replace(/^#/, ''));
                if (linkTarget) {
                    const [linkPath, linkHash] = linkTarget;
                    let linkPathRelative = relativePath(resolvePath(articleMarkdownPath, '..'), linkPath).replaceAll(pathSep, pathSepPosix);
                    if (!linkPathRelative.startsWith('../')) {
                        linkPathRelative = `./${linkPathRelative}`;
                    }
                    if (urlToRequest === articleUrl) {
                        return `#${linkHash}`;
                    }
                    if (linkHash) {
                        return `${linkPathRelative}#${linkHash}`;
                    }
                    return linkPathRelative;
                }
                return urlObj.toString();
            },
            baseUrl: articleUrl
        });
        const articleMarkdown = [
            '---',
            stringifyYaml({
                title: article.title,
                date: article.created_at,
                updated: article.created_at !== article.edited_at ? article.edited_at : undefined,
                categories: matchSection ? matchSection.name : undefined,
                tags: article.label_names && article.label_names.length ? article.label_names : undefined,
                link: articleUrl,
            }).trim(),
            '---',
            '',
            articleBodyMarkdown.trim(),
            ''
        ].join('\n');
        mkdirSync(resolvePath(articleMarkdownPath, '..'), { recursive: true });
        writeFileSync(articleMarkdownPath, articleMarkdown);
        utimesSync(articleMarkdownPath, new Date(article.created_at), new Date(article.updated_at));
        process.stdout.write(`${articleMarkdownRelative}\n`)
        if (markdownExisted) {
            edited.push(article.title);
            const localArticleIndex = localArticles.findIndex(({ path }) => path === articleMarkdownPath);
            if (localArticleIndex >= 0) {
                localArticles.splice(localArticleIndex, 1); // File is updated
            }
        } else {
            added.push(article.title);
        }
    }
    database.save();
    if (!incremental) {
        const removed = localArticles.map((e) => e.frontmatter.title);
        localArticles.forEach((e) => {
            rmSync(e.path);
        });
        return [added, edited, removed];
    }
    return [added, edited];
}

async function main(fullUpdate) {
    const incremental = fullUpdate !== 'full';
    const databaseFile = resolvePath(projectRoot, 'database.json');
    const feedbackStat = await updateArticles({
        zendeskOptions: {
            host: 'minecraftfeedback',
            lang: 'en-us'
        },
        path: resolvePath(projectRoot, 'feedback'),
        databaseFile,
        incremental
    });
    const helpStat = await updateArticles({
        zendeskOptions: {
            host: 'minecrafthelp',
            lang: 'en-us'
        },
        path: resolvePath(projectRoot, 'help'),
        databaseFile,
        incremental,
        baseUrlRewrite: (url) => url.replace(/^https:\/\/minecrafthelp\.zendesk\.com\//, 'https://help.minecraft.net/')
    });
    const stat = [
        feedbackStat[0].length + helpStat[0].length,
        feedbackStat[1].length + helpStat[1].length,
        feedbackStat[2]?.length + helpStat[2]?.length
    ];
    if (stat[0] + stat[1] >= 0) {
        process.stdout.write(`Added ${stat[0]} article(s), updated ${stat[1]} articles\n`);
    }
}

main(...process.argv.slice(2)); 
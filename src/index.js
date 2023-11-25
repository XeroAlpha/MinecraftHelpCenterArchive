import { writeFileSync, mkdirSync, utimesSync, existsSync, readFileSync } from 'fs';
import { join as joinPath, resolve as resolvePath } from 'path';
import { fileURLToPath } from 'url';
import { stringify as stringifyYaml } from 'yaml';
import { listArticles, listSections } from './zendesk.js';
import { convertHtmlToMarkdown } from './html2md.js';

async function arrayFromAsync(asyncIterator) {
    const ret = [];
    for await (const value of asyncIterator) {
        ret.push(value);
    }
    return ret;
}

const projectRoot = resolvePath(fileURLToPath(import.meta.url), '..', '..');

const titleToId = (title) => title.split(/\W+/).filter((e) => e.length > 0).join('-');

async function updateArticles(commonOptions, path) {
    let sections = null;
    const findSection = async (id) => {
        if (!sections) {
            sections = await arrayFromAsync(listSections({
                ...commonOptions,
                pageSize: 100
            }));
        }
        return sections.find((e) => e.id === id);
    }
    mkdirSync(path, { recursive: true });
    const articleIter = listArticles({
        ...commonOptions,
        sortBy: 'edited_at',
        sortOrder: 'desc',
        pageSize: 100
    });
    const added = [];
    const edited = [];
    for await (const article of articleIter) {
        const matchSection = article.section_id ? await findSection(article.section_id) : undefined;
        const articleMarkdownRelative = joinPath(matchSection ? titleToId(matchSection.name) : 'others', `${titleToId(article.name)}.md`);
        const articleMarkdownPath = resolvePath(path, articleMarkdownRelative);
        const markdownExisted = existsSync(articleMarkdownPath);
        const articleMarkdown = [
            '---',
            stringifyYaml({
                title: article.title,
                date: article.created_at,
                updated: article.created_at !== article.edited_at ? article.edited_at : undefined,
                categories: matchSection ? matchSection.name : undefined,
                tags: article.label_names && article.label_names.length ? article.label_names : undefined,
                link: article.html_url,
            }).trim(),
            '---',
            '',
            convertHtmlToMarkdown(article.body, article.html_url).trim(),
            ''
        ].join('\n');
        mkdirSync(resolvePath(articleMarkdownPath, '..'), { recursive: true });
        if (markdownExisted && readFileSync(articleMarkdownPath, 'utf-8') === articleMarkdown) {
            break;
        }
        writeFileSync(articleMarkdownPath, articleMarkdown);
        utimesSync(articleMarkdownPath, new Date(article.created_at), new Date(article.updated_at));
        process.stdout.write(`${articleMarkdownRelative}\n`)
        if (markdownExisted) {
            edited.push(article.title);
        } else {
            added.push(article.title);
        }
    }
    return [added, edited];
}

async function main() {
    await updateArticles({
        host: 'minecraftfeedback',
        lang: 'en-us'
    }, resolvePath(projectRoot, 'feedback'));
    await updateArticles({
        host: 'minecrafthelp',
        lang: 'en-us'
    }, resolvePath(projectRoot, 'help'));
}

main(); 
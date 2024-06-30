import { writeFileSync } from 'fs';
import { showArticle } from './zendesk.js';
import { analyzeHtml, convertHtmlToMarkdown } from './html2md.js';

const Hosts = {
    feedback: {
        host: 'minecraftfeedback',
        lang: 'en-us'
    },
    help: {
        host: 'minecrafthelp',
        lang: 'en-us'
    },
    education: {
        host: 'minecrafteducationedition',
        lang: 'en-us'
    }
};

async function main(host, articleId) {
    const { article: { title, body, html_url } } = await showArticle({ ...Hosts[host], articleId });
    writeFileSync('debug-raw.html', body);
    const { json } = await analyzeHtml(body);
    writeFileSync('debug-raw.json', JSON.stringify(json, null, 4));
    const markdown = await convertHtmlToMarkdown(json, { baseUrl: html_url });
    writeFileSync('debug.json', JSON.stringify(json, null, 4));
    writeFileSync('debug.md', markdown);
}

main(...process.argv.slice(2)); 
import { exec } from 'child_process';
import GithubSlugger from 'github-slugger';

/**
 * @typedef {import("pandoc-types").PandocJSON} PandocJSON
 * @typedef {import("pandoc-types").Block} Block
 * @typedef {import("pandoc-types").Inline} Inline
 * @typedef {import("pandoc-types").Caption} Caption
 * @typedef {import("pandoc-types").Cell} Cell
 * @typedef {import("pandoc-types").Row} Row
 */

/**
 * @param {(type: string, node: Block | Inline, traverseChildren: (newNode?: Block | Inline) => Block | Inline) => Block[] | Inline[] | Block | Inline | null} handler
 */
function traverse(handler) {
    /**
     * @param {Block[]} blocks
     */
    function traverseBlockArray(blocks) {
        blocks.splice(0, blocks.length, ...blocks.flatMap((block) => traverseBlock(block)));
        return blocks;
    }

    /**
     * @param {Caption} caption
     */
    function traverseCaption(caption) {
        const [shortCaption, blocks] = caption;
        if (shortCaption) traverseInlineArray(shortCaption);
        traverseBlockArray(blocks);
    }

    /**
     * @param {Cell} cell
     */
    function traverseCell(cell) {
        traverseBlockArray(cell[4]);
    }

    /**
     * @param {Row} row
     */
    function traverseRow(row) {
        row[1].forEach((cell) => traverseCell(cell));
    }

    /**
     * @param {Block} block
     */
    function traverseBlockChildren(block) {
        switch (block.t) {
            case 'Plain':
            case 'Para':
                traverseInlineArray(block.c);
                break;
            case 'LineBlock':
                block.c.forEach((e) => traverseInlineArray(e));
                break;
            case 'BlockQuote':
                traverseBlockArray(block.c);
                break;
            case 'OrderedList':
                block.c[1].forEach((blocks) => traverseBlockArray(blocks));
                break;
            case 'BulletList':
                block.c.forEach((blocks) => traverseBlockArray(blocks));
                break;
            case 'DefinitionList':
                block.c.forEach((item) => {
                    traverseInlineArray(item[0]);
                    item[1].forEach((blocks) => traverseBlockArray(blocks));
                });
                break;
            case 'Header':
                traverseInlineArray(block.c[2]);
                break;
            case 'Div':
                traverseBlockArray(block.c[1]);
                break;
            case 'Table':
                const [, caption, , head, bodies, foot] = block.c;
                traverseCaption(caption);
                head[1].forEach((row) => traverseRow(row));
                bodies.forEach((body) => {
                    body[2].forEach((row) => traverseRow(row));
                    body[3].forEach((row) => traverseRow(row));
                });
                foot[1].forEach((row) => traverseRow(row));
                break;
            case 'Figure':
                traverseCaption(block.c[1]);
                traverseBlockArray(block.c[2]);
                break;
            case 'CodeBlock':
            case 'RawBlock':
            case 'HorizontalRule':
                break;
        }
        return block;
    }

    /**
     * @param {Block} block
     * @returns {Block[]}
     */
    function traverseBlock(block) {
        const traverseChildren = (newBlock) => traverseBlockChildren(newBlock ?? block);
        const blocks = handler("block", block, traverseChildren);
        return Array.isArray(blocks) ? blocks : blocks ? [blocks] : [];
    }

    /**
     * @param {Inline[]} inlines
     */
    function traverseInlineArray(inlines) {
        inlines.splice(0, inlines.length, ...inlines.flatMap((inline) => traverseInline(inline)));
        return inlines;
    }

    /**
     * @param {Inline} inline
     */
    function traverseInlineChildren(inline) {
        switch (inline.t) {
            case 'Emph':
            case 'Underline':
            case 'Strong':
            case 'Strikeout':
            case 'Superscript':
            case 'Subscript':
            case 'SmallCaps':
                traverseInlineArray(inline.c);
                break;
            case 'Quoted':
            case 'Link':
            case 'Image':
            case 'Span':
                traverseInlineArray(inline.c[1]);
                break;
            case 'Note':
                traverseBlockArray(inline.c);
                break;
            case 'Cite':
                inline.c[0].forEach((citation) => {
                    traverseInlineArray(citation.citationPrefix);
                    traverseInlineArray(citation.citationSuffix);
                });
                traverseInlineArray(inline.c[1]);
                break;
            case 'Str':
            case 'Code':
            case 'Space':
            case 'SoftBreak':
            case 'LineBreak':
            case 'Math':
            case 'RawInline':
                break;
        }
        return inline;
    }

    /**
     * @param {Inline} inline
     * @returns {Inline[]}
     */
    function traverseInline(inline) {
        const traverseChildren = (newInline) => traverseInlineChildren(newInline ?? inline);
        const inlines = handler("inline", inline, traverseChildren);
        return Array.isArray(inlines) ? inlines : inlines ? [inlines] : [];
    }
    
    return {
        block: traverseBlock,
        blockArray: traverseBlockArray,
        inline: traverseInline,
        inlineArray: traverseInlineArray,
        document: (/** @type {PandocJSON} */ json) => {
            const { blocks } = json;
            traverseBlockArray(blocks);
            return json;
        }
    };
}

function simpleFlattenInlines(inlines) {
    const texts = [];
    traverse((type, node, traverseChildren) => {
        if (node.t === 'Str') {
            texts.push(node.c);
        } else if (node.t === 'Space') {
            texts.push(' ');
        } else if (node.t === 'SoftBreak') {
            texts.push(' ');
        } else if (node.t === 'LineBreak') {
            texts.push('\n');
        }
        return traverseChildren();
    }).inlineArray(inlines);
    return texts.join('');
}

function execPromisify(command, options) {
    return new Promise((resolve, reject) => {
        const proc = exec(command, options, (err, stdout) => {
            if (err) return reject(err);
            resolve(stdout);
        });
        if (options.input) {
            proc.stdin.write(options.input);
        }
        proc.stdin.end();
    });
}

export async function analyzeHtml(html) {
    const input = await execPromisify('pandoc -f html -t json', {
        input: html,
        maxBuffer: 16 * 1024 * 1024 // 16M
    });

    /** @type {PandocJSON} */
    const json = JSON.parse(input);
    const hashMap = {};
    const slugger = new GithubSlugger();

    traverse((type, node, traverseChildren) => {
        if (node.t == 'Header') {
            const id = node.c[1][0];
            const title = simpleFlattenInlines(node.c[2]);
            const mappedId = slugger.slug(title);
            if (mappedId !== id) {
                hashMap[id] = mappedId;
            }
        }
        return traverseChildren();
    }).document(json);

    return { json, hashMap };
}

export async function convertHtmlToMarkdown(json, options) {
    const normalizeUrl = (urlStr) => {
        const url = new URL(urlStr, options.baseUrl);
        if (options.normalizeUrl) {
            return options.normalizeUrl(url);
        } else {
            return url.toString();
        }
    };

    traverse((type, nodePrev, traverseChildren) => {
        const node = traverseChildren();
        switch (node.t) {
            case 'Header':
                node.c[1] = ['', [], []];
                break;
            case 'Image':
                node.c[0] = ['', [], []];
                node.c[2][0] = normalizeUrl(node.c[2][0]);
                break;
            case 'Span':
                return node.c[1];
            case 'Link':
                node.c[0] = ['', [], []];
                node.c[2][0] = normalizeUrl(node.c[2][0]);
                break;
            case 'Div':
                node.c[0] = ['', [], []];
                return node.c[1];
        }
        return node;
    }).document(json);

    return (await execPromisify('pandoc -f json -t gfm --wrap=none', {
        input: JSON.stringify(json),
        maxBuffer: 16 * 1024 * 1024 // 16M
    })).toString().replace(/\r\n/g, '\n');
}
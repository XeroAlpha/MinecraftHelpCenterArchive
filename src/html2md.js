import { execSync } from 'child_process';
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
 * @param {(type: string, node: Block | Inline, traversalChildren: (newNode?: Block | Inline) => Block | Inline) => Block[] | Inline[] | Block | Inline | null} handler
 */
function traversal(handler) {
    /**
     * @param {Block[]} blocks
     */
    function traversalBlockArray(blocks) {
        blocks.splice(0, blocks.length, ...blocks.flatMap((block) => traversalBlock(block)));
        return blocks;
    }

    /**
     * @param {Caption} caption
     */
    function traversalCaption(caption) {
        const [shortCaption, blocks] = caption;
        if (shortCaption) traversalInlineArray(shortCaption);
        traversalBlockArray(blocks);
    }

    /**
     * @param {Cell} cell
     */
    function traversalCell(cell) {
        traversalBlockArray(cell[4]);
    }

    /**
     * @param {Row} row
     */
    function traversalRow(row) {
        row[1].forEach((cell) => traversalCell(cell));
    }

    /**
     * @param {Block} block
     */
    function traversalBlockChildren(block) {
        switch (block.t) {
            case 'Plain':
            case 'Para':
                traversalInlineArray(block.c);
                break;
            case 'LineBlock':
                block.c.forEach((e) => traversalInlineArray(e));
                break;
            case 'BlockQuote':
                traversalBlockArray(block.c);
                break;
            case 'OrderedList':
                block.c[1].forEach((blocks) => traversalBlockArray(blocks));
                break;
            case 'BulletList':
                block.c.forEach((blocks) => traversalBlockArray(blocks));
                break;
            case 'DefinitionList':
                block.c.forEach((item) => {
                    traversalInlineArray(item[0]);
                    item[1].forEach((blocks) => traversalBlockArray(blocks));
                });
                break;
            case 'Header':
                traversalInlineArray(block.c[2]);
                break;
            case 'Div':
                traversalBlockArray(block.c[1]);
                break;
            case 'Table':
                const [, caption, , head, bodies, foot] = block.c;
                traversalCaption(caption);
                head[1].forEach((row) => traversalRow(row));
                bodies.forEach((body) => {
                    body[2].forEach((row) => traversalRow(row));
                    body[3].forEach((row) => traversalRow(row));
                });
                foot[1].forEach((row) => traversalRow(row));
                break;
            case 'Figure':
                traversalCaption(block.c[1]);
                traversalBlockArray(block.c[2]);
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
    function traversalBlock(block) {
        const traversalChildren = (newBlock) => traversalBlockChildren(newBlock ?? block);
        const blocks = handler("block", block, traversalChildren);
        return Array.isArray(blocks) ? blocks : blocks ? [blocks] : [];
    }

    /**
     * @param {Inline[]} inlines
     */
    function traversalInlineArray(inlines) {
        inlines.splice(0, inlines.length, ...inlines.flatMap((inline) => traversalInline(inline)));
        return inlines;
    }

    /**
     * @param {Inline} inline
     */
    function traversalInlineChildren(inline) {
        switch (inline.t) {
            case 'Emph':
            case 'Underline':
            case 'Strong':
            case 'Strikeout':
            case 'Superscript':
            case 'Subscript':
            case 'SmallCaps':
                traversalInlineArray(inline.c);
                break;
            case 'Quoted':
            case 'Link':
            case 'Image':
            case 'Span':
                traversalInlineArray(inline.c[1]);
                break;
            case 'Note':
                traversalBlockArray(inline.c);
                break;
            case 'Cite':
                inline.c[0].forEach((citation) => {
                    traversalInlineArray(citation.citationPrefix);
                    traversalInlineArray(citation.citationSuffix);
                });
                traversalInlineArray(inline.c[1]);
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
    function traversalInline(inline) {
        const traversalChildren = (newInline) => traversalInlineChildren(newInline ?? inline);
        const inlines = handler("inline", inline, traversalChildren);
        return Array.isArray(inlines) ? inlines : inlines ? [inlines] : [];
    }
    
    return {
        block: traversalBlock,
        blockArray: traversalBlockArray,
        inline: traversalInline,
        inlineArray: traversalInlineArray,
        document: (/** @type {PandocJSON} */ json) => {
            const { blocks } = json;
            traversalBlockArray(blocks);
            return json;
        }
    };
}

function simpleFlattenInlines(inlines) {
    const texts = [];
    traversal((type, node, traversalChildren) => {
        if (node.t === 'Str') {
            texts.push(node.c);
        } else if (node.t === 'Space') {
            texts.push(' ');
        } else if (node.t === 'SoftBreak') {
            texts.push(' ');
        } else if (node.t === 'LineBreak') {
            texts.push('\n');
        }
        return traversalChildren();
    }).inlineArray(inlines);
    return texts.join('');
}

export function analyzeHtml(html) {
    const input = execSync('pandoc -f html -t json', {
        input: html
    });

    /** @type {PandocJSON} */
    const json = JSON.parse(input);
    const hashMap = {};
    const slugger = new GithubSlugger();

    traversal((type, node, traversalChildren) => {
        if (node.t == 'Header') {
            const id = node.c[1][0];
            const title = simpleFlattenInlines(node.c[2]);
            const mappedId = slugger.slug(title);
            if (mappedId !== id) {
                hashMap[id] = mappedId;
            }
        }
        return traversalChildren();
    }).document(json);

    return { json, hashMap };
}

export function convertHtmlToMarkdown(json, options) {
    const normalizeUrl = (urlStr) => {
        const url = new URL(urlStr, options.baseUrl);
        if (options.normalizeUrl) {
            return options.normalizeUrl(url);
        } else {
            return url.toString();
        }
    };

    traversal((type, nodePrev, traversalChildren) => {
        const node = traversalChildren();
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
        }
        return node;
    }).document(json);

    return execSync('pandoc -f json -t gfm --wrap=none', {
        input: JSON.stringify(json)
    }).toString().replace(/\r\n/g, '\n');
}
import { execSync } from 'child_process';

export function convertHtmlToMarkdown(html, url) {
    const input = execSync('pandoc -f html -t json', {
        input: html
    });
    
    /**
     * @typedef {import("pandoc-types").PandocJSON} PandocJSON
     * @typedef {import("pandoc-types").Block} Block
     * @typedef {import("pandoc-types").Inline} Inline
     */
    
    /** @type {PandocJSON} */
    const json = JSON.parse(input);
    
    /** @type {(block: Block) => void} */
    const visitBlock = (block) => {
        if (block.t === 'Header') {
            block.c[1] = ['', [], []];
        }
        switch (block.t) {
            case 'Plain':
            case 'Para':
                return visitInlineArray(block.c);
            case 'LineBlock':
                return block.c.forEach((e) => visitInlineArray(e));
            case 'BlockQuote':
                return block.c.forEach((e) => visitBlock(e));
            case 'OrderedList':
                return block.c[1].forEach((item) => item.forEach((e) => visitBlock(e)));
            case 'BulletList':
                return block.c.forEach((item) => item.forEach((e) => visitBlock(e)));
            case 'DefinitionList':
                return block.c.forEach((item) => {
                    visitInlineArray(item[0]);
                    item[1].forEach((blocks) => blocks.forEach((e) => visitBlock(e)));
                });
            case 'Header':
                return visitInlineArray(block.c[2]);
            case 'Div':
                return block.c[1].forEach((e) => visitBlock(e));
            case 'Table':
                return; // TOO COMPLEX
            case 'Figure':
                return; // TOO COMPLEX
            case 'CodeBlock':
            case 'RawBlock':
            case 'HorizontalRule':
                return;
        }
    }
    
    /** @type {(inlines: Inline[]) => void} */
    const visitInlineArray = (inlines) => {
        inlines.splice(0, inlines.length, ...inlines.flatMap((inline) => visitInline(inline)));
    }
    
    /** @type {(inline: Inline) => Inline | Inline[]} */
    const visitInline = (inline) => {
        switch (inline.t) {
            case 'Emph':
            case 'Underline':
            case 'Strong':
            case 'Strikeout':
            case 'Superscript':
            case 'Subscript':
            case 'SmallCaps':
                visitInlineArray(inline.c);
                break;
            case 'Quoted':
            case 'Cite':
            case 'Link':
            case 'Image':
            case 'Span':
                visitInlineArray(inline.c[1]);
                break;
            case 'Note':
                inline.c.forEach((block) => visitBlock(block));
                break;
        }
        if (inline.t === 'Image') {
            inline.c[2][0] = new URL(inline.c[2][0], url).toString();
        } else if (inline.t === 'Span') {
            return inline.c[1];
        } else if (inline.t === 'Link') {
            inline.c[0] = ['', [], []];
            inline.c[2][0] = new URL(inline.c[2][0], url).toString();
        }
        return inline;
    }

    json.blocks.forEach((block) => visitBlock(block));

    return execSync('pandoc -f json -t markdown --wrap=none', {
        input: JSON.stringify(json)
    }).toString().replace(/\r\n/g, '\n');
}
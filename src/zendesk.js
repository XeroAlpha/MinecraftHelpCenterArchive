import gotExport from 'got';
/** @type {import('got/dist/source/index').Got} */
const got = gotExport;

function createPaginationOptions(fieldName) {
    return {
        transform: (res) => res.body[fieldName],
        paginate: (data) => {
            const { body } = data.response;
            if (body.meta.has_more) {
                return { url: new URL(body.links.next) };
            }
            return false;
        }
    };
}

/**
 * https://developer.zendesk.com/api-reference/help_center/help-center-api/sections/#list-sections
 */
export function listSections(options) {
    const url = `https://${options.host}.zendesk.com/api/v2/help_center${options.lang ? `/${options.lang}` : ''}/sections`;
    return got.paginate(url, {
        searchParams: {
            'page[size]': options.pageSize ?? 30,
            sort_by: options.sortBy,
            sort_order: options.sortOrder
        },
        responseType: 'json',
        pagination: createPaginationOptions('sections')
    });
}

/**
 * https://developer.zendesk.com/api-reference/help_center/help-center-api/categories/#list-categories
 */
export function listCategories(options) {
    const url = `https://${options.host}.zendesk.com/api/v2/help_center${options.lang ? `/${options.lang}` : ''}/categories`;
    return got.paginate(url, {
        searchParams: {
            'page[size]': options.pageSize ?? 30,
            sort_by: options.sortBy,
            sort_order: options.sortOrder
        },
        responseType: 'json',
        pagination: createPaginationOptions('categories')
    });
}

/**
 * https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/#list-articles
 */
export function listArticles(options) {
    let url;
    const urlPrefixWithLang = `https://${options.host}.zendesk.com/api/v2/help_center${options.lang ? `/${options.lang}` : ''}`;
    if (options.categoryId) {
        url = `${urlPrefixWithLang}/categories/${options.categoryId}/articles`;
    } else if (options.sectionId) {
        url = `${urlPrefixWithLang}/sections/${options.sectionId}/articles`;
    } else if (options.userId) {
        url = `https://${options.host}.zendesk.com/api/v2/help_center/users/${options.userId}/articles`;
    } else if (options.startTime) {
        url = `https://${options.host}.zendesk.com/api/v2/help_center/incremental/articles`;
    } else {
        url = `${urlPrefixWithLang}/articles`;
    }
    return got.paginate(url, {
        searchParams: {
            'page[size]': options.pageSize ?? 30,
            start_time: options.startTime,
            label_names: options.labelNames ? options.labelNames.join(',') : undefined,
            sort_by: options.sortBy,
            sort_order: options.sortOrder
        },
        responseType: 'json',
        pagination: createPaginationOptions('articles')
    });
}

/**
 * https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/#show-article
 */
export function showArticle(options) {
    const url = `https://${options.host}.zendesk.com/api/v2/help_center${options.lang ? `/${options.lang}` : ''}/articles/${options.articleId}`;
    return got(url).json();
}

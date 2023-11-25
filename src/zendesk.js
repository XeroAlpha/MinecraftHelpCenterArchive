import gotExport from 'got';
/** @type {import('got/dist/source/index').Got} */
const got = gotExport;

function createPaginationOptions(fieldName) {
    return {
        transform: (res) => res.body[fieldName]
    };
}

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
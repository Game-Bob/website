import { addLocalizedRouteGroup } from '../../i18n/languageRouteManifest.ts';
import { categoryAdapter, utilityAdapter, writeGeneratedRoute } from './routeAdapters.mjs';
import { categoryPath, isExternalLanguage, localizedContent, utilityPath } from './localizedContent.mjs';

async function categoryLocalization(category, routeLanguages) {
    const results = await Promise.all(routeLanguages.map(async lang => {
        const content = await localizedContent(category.entry, lang, category.key);
        return { lang, content, url: categoryPath(lang, content.slug) };
    }));
    return {
        results,
        slugs: Object.fromEntries(results.map(({ lang, content }) => [lang, content.slug])),
        urls: Object.fromEntries(results.map(({ lang, url }) => [lang, url])),
    };
}

function internalCategoryRoutes(category, localized) {
    const entrypoint = writeGeneratedRoute(
        `category-${category.key}.astro`,
        categoryAdapter(category),
    );
    return localized.results
        .filter(({ lang }) => !isExternalLanguage(lang))
        .map(({ url }) => ({ pattern: url.slice(0, -1), entrypoint }));
}

async function utilityRuntimeRoute(runtime, category, options) {
    const entrypoint = writeGeneratedRoute(
        `${category.key}-${runtime.subpath.replaceAll(/[^a-zA-Z0-9-]/g, '-')}.astro`,
        utilityAdapter(runtime, category),
    );
    const results = await Promise.all(options.routeLanguages.map(async lang => {
        const entry = runtime.definition.entry;
        const tool = await localizedContent(entry, lang, entry.id);
        return { lang, url: utilityPath(lang, options.localizedCategorySlugs[lang], tool.slug) };
    }));
    return {
        routes: results
            .filter(({ lang }) => !isExternalLanguage(lang))
            .map(({ url }) => ({ pattern: url.slice(0, -1), entrypoint })),
        urls: Object.fromEntries(results.map(({ lang, url }) => [lang, url])),
    };
}

async function categoryRuntimeRoutes(group, routeLanguages, languageRouteManifest) {
    const localized = await categoryLocalization(group.category, routeLanguages);
    addLocalizedRouteGroup(languageRouteManifest, localized.urls);
    const runtimeResults = await Promise.all(group.runtimes.map(runtime => utilityRuntimeRoute(
        runtime,
        group.category,
        { localizedCategorySlugs: localized.slugs, routeLanguages },
    )));
    for (const result of runtimeResults) {
        addLocalizedRouteGroup(languageRouteManifest, result.urls);
    }
    return {
        categoryRoutes: internalCategoryRoutes(group.category, localized),
        utilityRoutes: runtimeResults.flatMap(result => result.routes),
    };
}

export async function buildUtilityRoutes(groups, routeLanguages, languageRouteManifest) {
    const results = await Promise.all(groups.map(group => categoryRuntimeRoutes(
        group,
        routeLanguages,
        languageRouteManifest,
    )));
    return {
        categoryRoutes: results.flatMap(result => result.categoryRoutes),
        utilityRoutes: results.flatMap(result => result.utilityRoutes),
    };
}

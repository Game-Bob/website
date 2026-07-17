import { addLocalizedRouteGroup } from '../../i18n/languageRouteManifest.ts';
import { appAdapter, writeGeneratedRoute } from './routeAdapters.mjs';
import { appPath, isExternalLanguage, landingPath, localizedContent } from './localizedContent.mjs';

async function localizedUrls(entry, routeLanguages, pathBuilder) {
    const results = await Promise.all(routeLanguages.map(async lang => {
        const content = await localizedContent(entry, lang, entry.id);
        return { lang, url: pathBuilder(lang, content.slug) };
    }));
    return {
        results,
        urls: Object.fromEntries(results.map(({ lang, url }) => [lang, url])),
    };
}

async function appRuntimeRoute(runtime, routeLanguages) {
    const entrypoint = writeGeneratedRoute(
        `app-${runtime.subpath.replaceAll(/[^a-zA-Z0-9-]/g, '-')}.astro`,
        appAdapter(runtime),
    );
    const localized = await localizedUrls(runtime.definition.entry, routeLanguages, appPath);
    return {
        routes: localized.results
            .filter(({ lang }) => !isExternalLanguage(lang))
            .map(({ url }) => ({ pattern: url.slice(0, -1), entrypoint })),
        urls: localized.urls,
    };
}

export async function buildAppRoutes(appRuntimes, routeLanguages, languageRouteManifest) {
    const results = await Promise.all(appRuntimes.map(runtime => appRuntimeRoute(runtime, routeLanguages)));
    for (const result of results) addLocalizedRouteGroup(languageRouteManifest, result.urls);
    return results.flatMap(result => result.routes);
}

export async function registerLandingRoutes(definitions, routeLanguages, languageRouteManifest) {
    const results = await Promise.all(definitions.map(definition => localizedUrls(
        definition.entry,
        routeLanguages,
        landingPath,
    )));
    for (const result of results) addLocalizedRouteGroup(languageRouteManifest, result.urls);
}

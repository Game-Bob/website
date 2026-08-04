import { ALL_APP_ENTRIES } from '@jjlmoya/apps/data';
import { ALL_LANDING_DEFINITIONS } from '@jjlmoya/landings';
import { CATEGORIES } from '../data/utilities/registry.ts';
import { SUPPORTED_LANGUAGES, externalLanguages } from '../i18n/languages.ts';
import { buildAppRoutes, registerLandingRoutes } from './isolated-content/contentRoutes.mjs';
import { discoverRuntimes } from './isolated-content/runtimeDiscovery.mjs';
import { buildUtilityRoutes } from './isolated-content/utilityRoutes.mjs';

const virtualManifestId = 'virtual:gamebob-language-route-manifest';
const resolvedVirtualManifestId = `\0${virtualManifestId}`;
const languageRouteManifest = { routes: {}, groups: [] };

function languageRouteManifestPlugin() {
    return {
        name: 'gamebob-language-route-manifest',
        resolveId(id) {
            return id === virtualManifestId ? resolvedVirtualManifestId : undefined;
        },
        load(id) {
            if (id !== resolvedVirtualManifestId) return undefined;
            return `export default ${JSON.stringify(languageRouteManifest)};`;
        },
    };
}

const utilityRuntimeGroups = CATEGORIES.map(category => ({
    category,
    runtimes: discoverRuntimes(category.packageName, 'tool', {
        entries: category.toolsWithColors.map(({ toolEntry }) => toolEntry),
        exportSuffix: '_TOOL',
    }),
}));
const appRuntimes = discoverRuntimes('@jjlmoya/apps', 'app', {
    entries: ALL_APP_ENTRIES,
    exportSuffix: '_APP',
});
const routeLanguages = [...SUPPORTED_LANGUAGES, ...Object.keys(externalLanguages)];

const { categoryRoutes, utilityRoutes } = await buildUtilityRoutes(
    utilityRuntimeGroups,
    routeLanguages,
    languageRouteManifest,
);
const appRoutes = await buildAppRoutes(appRuntimes, routeLanguages, languageRouteManifest);
await registerLandingRoutes(ALL_LANDING_DEFINITIONS, routeLanguages, languageRouteManifest);

export default function isolatedContentRoutes() {
    const utilityRuntimeCount = utilityRuntimeGroups.reduce((total, group) => total + group.runtimes.length, 0);
    const routes = [...utilityRoutes, ...categoryRoutes, ...appRoutes];
    return {
        name: 'gamebob-isolated-content-routes',
        hooks: {
            'astro:config:setup': ({ injectRoute, logger, updateConfig }) => {
                updateConfig({ vite: { plugins: [languageRouteManifestPlugin()] } });
                for (const route of routes) injectRoute({ ...route, prerender: true });
                logger.info(
                    `Injected ${utilityRuntimeCount} utility runtimes, ${categoryRoutes.length} category routes, ${appRuntimes.length} app runtimes and ${Object.keys(languageRouteManifest.routes).length} language route mappings`,
                );
            },
        },
    };
}

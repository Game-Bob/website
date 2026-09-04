import { ALL_APP_ENTRIES } from '@jjlmoya/apps/data';
import { ALL_LANDING_DEFINITIONS } from '@jjlmoya/landings';
import { SUPPORTED_LANGUAGES, externalLanguages } from '../i18n/languages.ts';
import { buildAppRoutes, registerLandingRoutes } from './isolated-content/contentRoutes.mjs';
import { discoverRuntimes } from './isolated-content/runtimeDiscovery.mjs';

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

const appRuntimes = discoverRuntimes('@jjlmoya/apps', 'app', {
    entries: ALL_APP_ENTRIES,
    exportSuffix: '_APP',
});
const routeLanguages = [...SUPPORTED_LANGUAGES, ...Object.keys(externalLanguages)];

const appRoutes = await buildAppRoutes(appRuntimes, routeLanguages, languageRouteManifest);
await registerLandingRoutes(ALL_LANDING_DEFINITIONS, routeLanguages, languageRouteManifest);

export default function isolatedContentRoutes() {
    const routes = appRoutes;
    return {
        name: 'gamebob-isolated-content-routes',
        hooks: {
            'astro:config:setup': ({ injectRoute, logger, updateConfig }) => {
                updateConfig({ vite: { plugins: [languageRouteManifestPlugin()] } });
                for (const route of routes) injectRoute({ ...route, prerender: true });
                logger.info(
                    `Injected 0 utility runtimes, 0 category routes, ${appRuntimes.length} app runtimes and ${Object.keys(languageRouteManifest.routes).length} language route mappings`,
                );
            },
        },
    };
}

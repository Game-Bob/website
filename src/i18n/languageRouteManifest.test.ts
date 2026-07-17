import { describe, expect, it } from 'vitest';
import {
    addLocalizedRouteGroup,
    resolveAlternateUrls,
    type LanguageRouteManifest,
} from './languageRouteManifest';

describe('language route manifest', () => {
    it('automatically registers every localized route supplied by a newly discovered tool', () => {
        const manifest: LanguageRouteManifest = { routes: {}, groups: [] };
        const localizedUrls = {
            en: '/en/utilities/categories/demo/new-tool/',
            fr: '/fr/utilitaires/categories/demo/nouvel-outil/',
            es: 'https://www.jjlmoya.es/utilidades/nueva-herramienta/',
        };

        addLocalizedRouteGroup(manifest, localizedUrls);

        expect(resolveAlternateUrls(manifest, localizedUrls.en, 'en')).toEqual([
            { lang: 'en', url: localizedUrls.en },
            { lang: 'fr', url: localizedUrls.fr },
            { lang: 'es', url: localizedUrls.es },
        ]);
        expect(resolveAlternateUrls(manifest, localizedUrls.fr, 'fr')).toEqual(
            resolveAlternateUrls(manifest, localizedUrls.en, 'en'),
        );
    });

    it('translates static routes without consulting utility or app registries', () => {
        const urls = resolveAlternateUrls({ routes: {}, groups: [] }, '/en/utilities/', 'en');

        expect(urls).toContainEqual({ lang: 'fr', url: '/fr/utilitaires/' });
        expect(urls).toContainEqual({ lang: 'es', url: 'https://www.jjlmoya.es/utilidades/' });
    });
});

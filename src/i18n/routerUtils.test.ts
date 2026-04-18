import { describe, it, expect } from 'vitest';
import { getTranslatedUrl, getUtilityUrl, getUtilitiesHubUrl, getExternalLanguageUrl } from './routerUtils';

describe('getUtilitiesHubUrl', () => {
    it('should return utilities hub URL for English', () => {
        expect(getUtilitiesHubUrl('en')).toBe('/en/utilities/');
    });

    it('should return utilities hub URL for French', () => {
        expect(getUtilitiesHubUrl('fr')).toBe('/fr/utilitaires/');
    });
});

describe('getUtilityUrl', () => {
    it('should generate utility URL with category and tool slug', () => {
        const url = getUtilityUrl('en', 'cycling', 'gear-calculator');
        expect(url).toBe('/en/utilities/categories/cycling/gear-calculator/');
    });

    it('should generate category URL without tool slug', () => {
        const url = getUtilityUrl('en', 'cycling');
        expect(url).toBe('/en/utilities/categories/cycling/');
    });

    it('should work for French', () => {
        const url = getUtilityUrl('fr', 'cyclisme', 'gear-calculator');
        expect(url).toBe('/fr/utilitaires/categories/cyclisme/gear-calculator/');
    });
});

describe('getTranslatedUrl', () => {
    it('should translate home URL', async () => {
        const url = await getTranslatedUrl('/', 'en', 'fr');
        expect(url).toBe('/fr/');
    });

    it('should translate utilities hub URL from en to fr', async () => {
        const url = await getTranslatedUrl('/en/utilities/', 'en', 'fr');
        expect(url).toBe('/fr/utilitaires/');
    });

    it('should translate utilities hub URL from en to es (external)', async () => {
        const url = await getTranslatedUrl('/en/utilities/', 'en', 'es');
        expect(url).toBe('https://www.jjlmoya.es/utilidades/');
    });

    it('should return same language URL unchanged', async () => {
        const url = await getTranslatedUrl('/en/utilities/', 'en', 'en');
        expect(url).toBe('/en/utilities/');
    });
});

describe('getExternalLanguageUrl', () => {
    const testCases = [
        { path: '/en/apps/', expected: 'https://www.jjlmoya.es/apps/' },
        { path: '/en/utilities/', expected: 'https://www.jjlmoya.es/utilidades/' },
        { path: '/en/utilities/categories/cycling/gear-calculator/', expected: 'https://www.jjlmoya.es/utilidades/gear-calculator/' },
        { path: '/en/utilities/categories/cycling/', expected: 'https://www.jjlmoya.es/utilidades/categorias/ciclismo/' },
        { path: '/', expected: 'https://www.jjlmoya.es/' },
    ];

    testCases.forEach(({ path, expected }) => {
        it(`should generate external URL for ${path}`, async () => {
            const url = await getExternalLanguageUrl({
                pathname: path,
                currentLang: 'en',
                targetLang: 'es',
                externalDomain: 'https://www.jjlmoya.es'
            });
            expect(url).toBe(expected);
        });
    });
});

import { slugMapping, externalLanguages } from "./utils";
import { translateSegment } from "./slugTranslator";
import { ALL_LANDING_DEFINITIONS } from "@jjlmoya/landings";
export { getUtilityUrl, getUtilitiesHubUrl } from "./urlBuilder";

function buildTargetUrl(path: string, targetLang: string) {
    const host = externalLanguages[targetLang];
    const prefix = host ? `${host}/` : `/${targetLang}/`;
    return path ? `${prefix}${path}/` : prefix;
}

function findMappingMatch(path: string, lang: string, targetLang: string): string | null {
    for (const mapping of Object.values(slugMapping)) {
        if (mapping[lang] === path) return mapping[targetLang];
    }
    return null;
}

function getLandingLoaders(definition: (typeof ALL_LANDING_DEFINITIONS)[number], lang: string, targetLang: string) {
    const current = definition.entry.i18n[lang as any] ?? definition.entry.i18n.en;
    const target = definition.entry.i18n[targetLang as any] ?? definition.entry.i18n.en;
    return current && target ? { current, target } : null;
}

async function findLandingMatch(path: string, lang: string, targetLang: string): Promise<string | null> {
    for (const definition of ALL_LANDING_DEFINITIONS) {
        const loaders = getLandingLoaders(definition, lang, targetLang);
        if (!loaders) continue;

        const currentCard = await loaders.current();
        if (currentCard.slug !== path) continue;

        const targetCard = await loaders.target();
        return targetCard.slug;
    }

    return null;
}

async function resolveTranslatedPath(opts: { segments: string[]; fullPath: string; lang: string; targetLang: string }): Promise<string> {
    const { segments, fullPath, lang, targetLang } = opts;
    const mappingMatch = findMappingMatch(fullPath, lang, targetLang);
    if (mappingMatch) return mappingMatch;

    const landingMatch = await findLandingMatch(fullPath, lang, targetLang);
    if (landingMatch) return landingMatch;

    const translated = await Promise.all(segments.map(s => translateSegment(s, lang, targetLang)));
    return translated.join('/');
}

export async function getTranslatedUrl(pathname: string, lang: string, targetLang: string) {
    if (!pathname || pathname === '/') return buildTargetUrl('', targetLang);
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === lang) segments.shift();
    
    const fullPath = segments.join('/');
    return buildTargetUrl(await resolveTranslatedPath({ segments, fullPath, lang, targetLang }), targetLang);
}

interface ExternalUrlOptions {
    pathname: string;
    currentLang: string;
    targetLang: string;
    externalDomain: string;
}

function resolveSlugKeys(targetLang: string) {
    return {
        apps: slugMapping.apps[targetLang] || 'apps',
        utilities: slugMapping.utilities[targetLang] || 'utilidades',
        categories: slugMapping.categories[targetLang] || 'categorias',
    };
}

function buildAppsPath(segments: string[], appsSlug: string): string {
    const appSlug = segments[segments.indexOf(appsSlug) + 1];
    return appSlug ? `/${appsSlug}/${appSlug}/` : `/${appsSlug}/`;
}

function buildExternalPathSegment(segments: string[], targetLang: string): string {
    const slugs = resolveSlugKeys(targetLang);
    if (segments.includes(slugs.apps)) return buildAppsPath(segments, slugs.apps);
    if (!segments.includes(slugs.utilities)) return buildNonUtilPath(segments, targetLang);
    const utilIndex = segments.indexOf(slugs.utilities);
    return buildUtilPath({ segments, utilIndex, utilSlug: slugs.utilities, catSlug: slugs.categories });
}

function buildNonUtilPath(segments: string[], targetLang: string): string {
    const startIdx = segments[0]?.startsWith('http') ? 2 : 0;
    const filtered = segments.slice(startIdx).filter(s => s !== targetLang);
    return filtered.length > 0 ? `/${filtered.join('/')}/` : '/';
}

function buildUtilPath(opts: { segments: string[]; utilIndex: number; utilSlug: string; catSlug: string }): string {
    const { segments, utilIndex, utilSlug, catSlug } = opts;
    const next = segments[utilIndex + 1];
    const tool = segments[utilIndex + 3];
    const cat = segments[utilIndex + 2];

    if (next !== catSlug) return next ? `/${utilSlug}/${next}/` : `/${utilSlug}/`;
    return tool ? `/${utilSlug}/${tool}/` : cat ? `/${utilSlug}/${catSlug}/${cat}/` : `/${utilSlug}/`;
}

export async function getExternalLanguageUrl(options: ExternalUrlOptions): Promise<string> {
    const { pathname, currentLang, targetLang, externalDomain } = options;

    if (!pathname || pathname === '/') {
        return `${externalDomain}/`;
    }

    const translatedPath = await getTranslatedUrl(pathname, currentLang as any, targetLang as any);

    if (translatedPath === `${externalDomain}/`) {
        return translatedPath;
    }

    const pathSegments = translatedPath.startsWith('http')
        ? new URL(translatedPath).pathname.split('/').filter(Boolean)
        : translatedPath.split('/').filter(Boolean);
    const segment = buildExternalPathSegment(pathSegments, targetLang);

    return `${externalDomain}${segment}`;
}

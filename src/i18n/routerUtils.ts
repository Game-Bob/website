import { slugMapping, externalLanguages } from "./utils";
import { ALL_TOOL_ENTRIES } from "../data/utilities/registry";
export { getUtilityUrl, getUtilitiesHubUrl } from "./urlBuilder";

function translateFromMapping(segment: string, lang: string, targetLang: string): string | undefined {
    for (const mapping of Object.values(slugMapping)) {
        if (mapping[lang] === segment) return mapping[targetLang];
    }
}

async function translateFromTools(segment: string, lang: string, targetLang: string): Promise<string | undefined> {
    for (const tool of ALL_TOOL_ENTRIES) {
        if (!tool.i18n[lang] || !tool.i18n[targetLang]) continue;
        const current = await tool.i18n[lang]();
        if (current.slug === segment) return (await tool.i18n[targetLang]()).slug;
    }
}

async function translateSegment(segment: string, lang: string, targetLang: string) {
    return translateFromMapping(segment, lang, targetLang)
        ?? await translateFromTools(segment, lang, targetLang)
        ?? segment;
}

function buildTargetUrl(path: string, targetLang: string) {
    const host = externalLanguages[targetLang];
    const prefix = host ? `${host}/` : `/${targetLang}/`;
    return path ? `${prefix}${path}/` : prefix;
}

export async function getTranslatedUrl(pathname: string, lang: string, targetLang: string) {
    if (!pathname || pathname === '/') return buildTargetUrl('', targetLang);
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === lang) segments.shift();
    const translated = await Promise.all(segments.map(s => translateSegment(s, lang, targetLang)));
    return buildTargetUrl(translated.join('/'), targetLang);
}

interface ExternalUrlOptions {
    pathname: string;
    currentLang: string;
    targetLang: string;
    externalDomain: string;
}

function buildExternalPathSegment(segments: string[], targetLang: string): string {
    const utilSlug = slugMapping.utilities[targetLang] || 'utilidades';
    const hasUtil = segments.includes(utilSlug);

    if (!hasUtil) return buildNonUtilPath(segments, targetLang);

    const catSlug = slugMapping.categories[targetLang] || 'categorias';
    const utilIndex = segments.indexOf(utilSlug);
    return buildUtilPath({ segments, utilIndex, utilSlug, catSlug });
}

function buildNonUtilPath(segments: string[], targetLang: string): string {
    const lastSegment = segments[segments.length - 1];
    return lastSegment && lastSegment !== targetLang ? `/${lastSegment}/` : '/';
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
    const pathSegments = translatedPath.split('/').filter(Boolean);
    const segment = buildExternalPathSegment(pathSegments, targetLang);

    return `${externalDomain}${segment}`;
}

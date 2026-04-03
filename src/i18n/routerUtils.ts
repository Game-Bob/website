import { slugMapping, externalLanguages } from "./utils";
import { fixedGear, spokeCalculator, gearCalculator } from "@jjlmoya/utils-bike/data";

const libraryTools = [fixedGear, spokeCalculator, gearCalculator];

async function translateSegment(segment: string, lang: string, targetLang: string) {
    for (const mapping of Object.values(slugMapping)) {
        if (mapping[lang] === segment) return mapping[targetLang];
    }
    for (const tool of libraryTools) {
        const current = await (tool.i18n as any)[lang]!();
        if (current.slug === segment) {
            const target = await (tool.i18n as any)[targetLang]!();
            return target.slug;
        }
    }
    return segment;
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

export function getUtilityUrl(lang: string, categoryKey: string, toolSlug?: string) {
    const uSlug = slugMapping.utilities[lang];
    const cSlug = slugMapping.categories[lang];
    const bSlug = slugMapping[categoryKey][lang];
    let path = `/${lang}/${uSlug}/${cSlug}/${bSlug}/`;
    if (toolSlug) path += `${toolSlug}/`;
    return path;
}

export function getUtilitiesHubUrl(lang: string) {
    return `/${lang}/${slugMapping.utilities[lang]}/`;
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

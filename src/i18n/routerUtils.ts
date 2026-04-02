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

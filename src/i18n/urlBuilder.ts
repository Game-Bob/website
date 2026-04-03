import { slugMapping } from "./utils";

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

import { slugMapping } from "./utils";

export function getUtilityUrl(lang: string, categorySlug: string, toolSlug?: string) {
    const uSlug = slugMapping.utilities[lang];
    const cSlug = slugMapping.categories[lang];
    let path = `/${lang}/${uSlug}/${cSlug}/${categorySlug}/`;
    if (toolSlug) path += `${toolSlug}/`;
    return path;
}

export function getUtilitiesHubUrl(lang: string) {
    return `/${lang}/${slugMapping.utilities[lang]}/`;
}

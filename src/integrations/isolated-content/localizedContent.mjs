import { externalLanguages } from '../../i18n/languages.ts';
import { slugMapping } from '../../i18n/slugs.ts';

export async function localizedContent(entry, lang, label) {
    const loader = entry.i18n[lang] ?? entry.i18n.en;
    if (!loader) throw new Error(`Missing ${label} locale: ${lang}`);
    return loader();
}

export function isExternalLanguage(lang) {
    return lang in externalLanguages;
}

export function utilityPath(lang, categorySlug, toolSlug) {
    if (isExternalLanguage(lang)) {
        return `${externalLanguages[lang]}/${slugMapping.utilities[lang]}/${toolSlug}/`;
    }
    return `/${lang}/${slugMapping.utilities[lang]}/${slugMapping.categories[lang]}/${categorySlug}/${toolSlug}/`;
}

export function categoryPath(lang, categorySlug) {
    const prefix = isExternalLanguage(lang) ? externalLanguages[lang] : `/${lang}`;
    return `${prefix}/${slugMapping.utilities[lang]}/${slugMapping.categories[lang]}/${categorySlug}/`;
}

export function appPath(lang, slug) {
    const prefix = isExternalLanguage(lang) ? externalLanguages[lang] : `/${lang}`;
    return `${prefix}/${slugMapping.apps[lang]}/${slug}/`;
}

export function landingPath(lang, slug) {
    const prefix = isExternalLanguage(lang) ? externalLanguages[lang] : `/${lang}`;
    return `${prefix}/${slug}/`;
}

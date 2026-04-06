import { translations } from "./index";
import type { Language } from "./languages";
import { slugMapping } from "./slugs";

export type { Language };
export { SUPPORTED_LANGUAGES, languages, externalLanguages, defaultLang } from "./languages";
export { slugMapping } from "./slugs";

export function useTranslations(lang: Language) {
    return (key: string) => {
        const keys = key.split(".");
        let result: any = translations[lang];
        for (const k of keys) result = result?.[k];
        return result || key;
    };
}

export function getLocalizedSlug(lang: string, key: string) {
    return slugMapping[key]?.[lang] || key;
}

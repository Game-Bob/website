import { translations, type TranslationKeys } from "./index";

export const languages = {
    en: "English",
    fr: "Français",
};

export const externalLanguages = {
    es: "https://www.jjlmoya.es",
};

export const slugMapping: Record<string, Record<string, string>> = {
    utilities: {
        en: "utilities",
        fr: "utilitaires",
    },
    apps: {
        en: "apps",
        fr: "apps",
    },
};

export function useTranslations(lang: keyof TranslationKeys) {
    return function t(key: string) {
        const keys = key.split(".");
        let result: unknown = translations[lang];
        for (const k of keys) {
            result = (result as Record<string, unknown>)?.[k];
        }
        return (result as string) || key;
    };
}

export function getFullLocaleUrl(lang: string, path: string = "") {
    if (lang === "es") {
        return `${externalLanguages.es}/${path}`;
    }
    return `https://www.gamebob.dev/${lang}/${path}`;
}

export function getHreflangs() {
    const internal = Object.keys(languages);
    const external = Object.keys(externalLanguages);
    return [...internal, ...external];
}

export function getLocalizedSlug(lang: string, key: string) {
    return slugMapping[key]?.[lang] || key;
}

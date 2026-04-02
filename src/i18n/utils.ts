import { translations } from "./index";


export const languages = {
    en: "English",
    fr: "Français",
};


export const externalLanguages: Record<string, string> = {
    es: "https://www.jjlmoya.es",
};


export const slugMapping: Record<string, Record<string, string>> = {
    utilities: {
        en: "utilities",
        fr: "utilitaires",
        es: "utilidades",
    },
    categories: {
        en: "categories",
        fr: "categories",
        es: "categorias", 
    },
    bikes: {
        en: "cycling",
        fr: "cyclisme",
        es: "ciclismo",
    },
    apps: {
        en: "apps",
        fr: "apps",
        es: "apps",
    },
};

export const defaultLang = "en";

export function useTranslations(lang: keyof typeof languages) {
    return (key: string) => {
        const keys = key.split(".");
        let result: any = translations[lang];
        for (const k of keys) {
            result = result?.[k];
        }
        return result || key;
    };
}

export function getLocalizedSlug(lang: string, key: string) {
    return slugMapping[key]?.[lang] || key;
}

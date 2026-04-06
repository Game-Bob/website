import { translations } from "./index";


export const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const languages: Record<Language, string> = {
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
    pets: {
        en: "pets",
        fr: "animaux",
        es: "mascotas",
    },
    alcohol: {
        en: "alcohol-party",
        fr: "alcool-fete",
        es: "alcohol",
    },
    astronomy: {
        en: "astronomy",
        fr: "astronomie",
        es: "astronomia",
    },
    audiovisual: {
        en: "audiovisual-photography",
        fr: "audiovisuels-photographie",
        es: "audiovisual",
    },
    babies: {
        en: "babies",
        fr: "bebes",
        es: "bebes",
    },
    converters: {
        en: "image-converters",
        fr: "convertisseurs-image",
        es: "convertidores-imagen",
    },
    creative: {
        en: "creativity-leisure",
        fr: "creativite-loisirs",
        es: "creatividad-ocio",
    },
    drones: {
        en: "drones",
        fr: "drones",
        es: "drones",
    },
    nautical: {
        en: "sailing-and-nautical",
        fr: "voile-et-nautisme",
        es: "vela-y-nautica",
    },
    apps: {
        en: "apps",
        fr: "apps",
        es: "apps",
    },
};

export const defaultLang = "en";

export function useTranslations(lang: Language) {
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

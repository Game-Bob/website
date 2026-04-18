export const SUPPORTED_LANGUAGES = ['en', 'fr', 'de', 'it', 'pt', 'nl', 'sv', 'pl', 'id', 'tr', 'ru', 'ja', 'ko', 'zh'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const languages: Record<Language, string> = {
    en: "English",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    pt: "Português",
    nl: "Nederlands",
    sv: "Svenska",
    pl: "Polski",
    id: "Bahasa Indonesia",
    tr: "Türkçe",
    ru: "Русский",
    ja: "日本語",
    ko: "한국어",
    zh: "中文",
};

export const externalLanguages: Record<string, string> = {
    es: "https://www.jjlmoya.es",
};

export const defaultLang = "en";

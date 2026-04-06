export const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const languages: Record<Language, string> = {
    en: "English",
    fr: "Français",
};

export const externalLanguages: Record<string, string> = {
    es: "https://www.jjlmoya.es",
};

export const defaultLang = "en";

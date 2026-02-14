
export const languages = {
    en: { label: "English", flag: "🇺🇸", dir: "ltr" },
    es: { label: "Español", flag: "🇪🇸", dir: "ltr" },
    it: { label: "Italiano", flag: "🇮🇹", dir: "ltr" },
    fr: { label: "Français", flag: "🇫🇷", dir: "ltr" },
    de: { label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
    pt: { label: "Português", flag: "🇧🇷", dir: "ltr" },
    ja: { label: "日本語", flag: "🇯🇵", dir: "ltr" },
    ko: { label: "한국어", flag: "🇰🇷", dir: "ltr" },
    zh: { label: "中文", flag: "🇨🇳", dir: "ltr" },
    ru: { label: "Русский", flag: "🇷🇺", dir: "ltr" },
    tr: { label: "Türkçe", flag: "🇹🇷", dir: "ltr" },
    nl: { label: "Nederlands", flag: "🇳🇱", dir: "ltr" },
    pl: { label: "Polski", flag: "🇵🇱", dir: "ltr" },
    sv: { label: "Svenska", flag: "🇸🇪", dir: "ltr" },
    id: { label: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
} as const;

export type SupportedLang = keyof typeof languages;
export const defaultLang: SupportedLang = "en";

const modules = import.meta.glob('./locales/**/*.ts', { eager: true });

export const ui: Record<string, Record<string, any>> = {};

for (const path in modules) {
    const parts = path.split('/');
    const lang = parts[2];
    const moduleName = parts[3].replace('.ts', '');

    if (!ui[lang]) {
        ui[lang] = {};
    }

    ui[lang][moduleName] = (modules[path] as any).default;
}

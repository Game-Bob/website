
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

const isObject = (item: any) => (item && typeof item === 'object' && !Array.isArray(item));

const deepMerge = (target: any, source: any) => {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
};

for (const path in modules) {
    const parts = path.split('/');
    const lang = parts[2];

    if (!ui[lang]) {
        ui[lang] = {};
    }

    let current = ui[lang];
    for (let i = 3; i < parts.length; i++) {
        const part = parts[i].replace('.ts', '');
        if (i === parts.length - 1) {
            const val = (modules[path] as any).default;
            if (isObject(val) && isObject(current[part])) {
                current[part] = deepMerge(current[part], val);
            } else {
                current[part] = val;
            }
        } else {
            if (!current[part]) {
                current[part] = {};
            }
            current = current[part];
        }
    }
}

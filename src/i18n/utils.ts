import { ui, defaultLang, type SupportedLang } from "./ui";

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as SupportedLang;
    return defaultLang;
}

export function useTranslations(lang: SupportedLang) {
    return function t(keyPath: string): string {
        const keys = keyPath.split(".");


        const getVal = (obj: any, path: string[]) => {
            return path.reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : undefined), obj);
        };

        const translation = getVal(ui[lang], keys) || getVal(ui[defaultLang], keys);

        return translation || keyPath;
    };
}

export function useLanguagePath(lang: SupportedLang) {
    return (path: string) => {
        const cleanPath = path.startsWith("/") ? path : `/${path}`;
        const finalPath = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;

        if (lang === defaultLang) return finalPath;

        if (finalPath.startsWith(`/${lang}/`)) return finalPath;

        return `/${lang}${finalPath}`;
    };
}

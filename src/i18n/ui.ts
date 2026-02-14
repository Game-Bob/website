
import enSite from "./locales/en/site";
import enNav from "./locales/en/nav";
import enHero from "./locales/en/hero";


import esSite from "./locales/es/site";
import esNav from "./locales/es/nav";
import esHero from "./locales/es/hero";
import enApps from "./locales/en/apps";
import esApps from "./locales/es/apps";
import enRoadmap from "./locales/en/roadmap";
import esRoadmap from "./locales/es/roadmap";
import enHome from "./locales/en/home";
import esHome from "./locales/es/home";
import enPrototypes from "./locales/en/prototypes";
import esPrototypes from "./locales/es/prototypes";
import enMechanics from "./locales/en/mechanics";
import esMechanics from "./locales/es/mechanics";

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

export const ui: Record<string, Record<string, any>> = {
    en: {
        site: enSite,
        nav: enNav,
        hero: enHero,
        apps: enApps,
        roadmap: enRoadmap,
        home: enHome,
        prototypes: enPrototypes,
        mechanics: enMechanics,
    },
    es: {
        site: esSite,
        nav: esNav,
        hero: esHero,
        apps: esApps,
        roadmap: esRoadmap,
        home: esHome,
        prototypes: esPrototypes,
        mechanics: esMechanics,
    },
};

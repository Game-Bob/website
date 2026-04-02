import enHome from "./locales/en/home";
import enMenu from "./locales/en/menu";
import frHome from "./locales/fr/home";
import frMenu from "./locales/fr/menu";

export const translations = {
    en: {
        home: enHome,
        menu: enMenu,
    },
    fr: {
        home: frHome,
        menu: frMenu,
    },
} as const;

export type TranslationKeys = typeof translations;

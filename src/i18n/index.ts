import enHome from "./locales/en/home";
import enMenu from "./locales/en/menu";
import enUI from "./locales/en/ui";
import frHome from "./locales/fr/home";
import frMenu from "./locales/fr/menu";
import frUI from "./locales/fr/ui";

export const translations = {
    en: {
        home: enHome,
        menu: enMenu,
        ui: enUI,
    },
    fr: {
        home: frHome,
        menu: frMenu,
        ui: frUI,
    },
} as const;

export type TranslationKeys = typeof translations;

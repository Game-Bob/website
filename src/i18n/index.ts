import enHome from "./locales/en/home";
import enMenu from "./locales/en/menu";
import enUI from "./locales/en/ui";
import enStore from "./locales/en/store";
import frHome from "./locales/fr/home";
import frMenu from "./locales/fr/menu";
import frUI from "./locales/fr/ui";
import frStore from "./locales/fr/store";

export const translations = {
    en: {
        home: enHome,
        menu: enMenu,
        ui: enUI,
        store: enStore,
    },
    fr: {
        home: frHome,
        menu: frMenu,
        ui: frUI,
        store: frStore,
    },
} as const;

export type TranslationKeys = typeof translations;

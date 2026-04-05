import enHome from "./locales/en/home";
import enMenu from "./locales/en/menu";
import enUI from "./locales/en/ui";
import enStore from "./locales/en/store";
import enWidgets from "./locales/en/widgets";
import frHome from "./locales/fr/home";
import frMenu from "./locales/fr/menu";
import frUI from "./locales/fr/ui";
import frStore from "./locales/fr/store";
import frWidgets from "./locales/fr/widgets";

export const translations = {
    en: {
        home: enHome,
        menu: enMenu,
        ui: enUI,
        store: enStore,
        widgets: enWidgets,
    },
    fr: {
        home: frHome,
        menu: frMenu,
        ui: frUI,
        store: frStore,
        widgets: frWidgets,
    },
} as const;

export type TranslationKeys = typeof translations;

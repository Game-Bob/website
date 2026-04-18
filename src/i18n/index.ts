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
import deHome from "./locales/de/home";
import deMenu from "./locales/de/menu";
import deUI from "./locales/de/ui";
import deStore from "./locales/de/store";
import deWidgets from "./locales/de/widgets";
import itHome from "./locales/it/home";
import itMenu from "./locales/it/menu";
import itUI from "./locales/it/ui";
import itStore from "./locales/it/store";
import itWidgets from "./locales/it/widgets";
import ptHome from "./locales/pt/home";
import ptMenu from "./locales/pt/menu";
import ptUI from "./locales/pt/ui";
import ptStore from "./locales/pt/store";
import ptWidgets from "./locales/pt/widgets";
import nlHome from "./locales/nl/home";
import nlMenu from "./locales/nl/menu";
import nlUI from "./locales/nl/ui";
import nlStore from "./locales/nl/store";
import nlWidgets from "./locales/nl/widgets";
import svHome from "./locales/sv/home";
import svMenu from "./locales/sv/menu";
import svUI from "./locales/sv/ui";
import svStore from "./locales/sv/store";
import svWidgets from "./locales/sv/widgets";
import plHome from "./locales/pl/home";
import plMenu from "./locales/pl/menu";
import plUI from "./locales/pl/ui";
import plStore from "./locales/pl/store";
import plWidgets from "./locales/pl/widgets";
import idHome from "./locales/id/home";
import idMenu from "./locales/id/menu";
import idUI from "./locales/id/ui";
import idStore from "./locales/id/store";
import idWidgets from "./locales/id/widgets";
import trHome from "./locales/tr/home";
import trMenu from "./locales/tr/menu";
import trUI from "./locales/tr/ui";
import trStore from "./locales/tr/store";
import trWidgets from "./locales/tr/widgets";
import ruHome from "./locales/ru/home";
import ruMenu from "./locales/ru/menu";
import ruUI from "./locales/ru/ui";
import ruStore from "./locales/ru/store";
import ruWidgets from "./locales/ru/widgets";
import jaHome from "./locales/ja/home";
import jaMenu from "./locales/ja/menu";
import jaUI from "./locales/ja/ui";
import jaStore from "./locales/ja/store";
import jaWidgets from "./locales/ja/widgets";
import koHome from "./locales/ko/home";
import koMenu from "./locales/ko/menu";
import koUI from "./locales/ko/ui";
import koStore from "./locales/ko/store";
import koWidgets from "./locales/ko/widgets";
import zhHome from "./locales/zh/home";
import zhMenu from "./locales/zh/menu";
import zhUI from "./locales/zh/ui";
import zhStore from "./locales/zh/store";
import zhWidgets from "./locales/zh/widgets";

export const translations = {
    en: { home: enHome, menu: enMenu, ui: enUI, store: enStore, widgets: enWidgets },
    fr: { home: frHome, menu: frMenu, ui: frUI, store: frStore, widgets: frWidgets },
    de: { home: deHome, menu: deMenu, ui: deUI, store: deStore, widgets: deWidgets },
    it: { home: itHome, menu: itMenu, ui: itUI, store: itStore, widgets: itWidgets },
    pt: { home: ptHome, menu: ptMenu, ui: ptUI, store: ptStore, widgets: ptWidgets },
    nl: { home: nlHome, menu: nlMenu, ui: nlUI, store: nlStore, widgets: nlWidgets },
    sv: { home: svHome, menu: svMenu, ui: svUI, store: svStore, widgets: svWidgets },
    pl: { home: plHome, menu: plMenu, ui: plUI, store: plStore, widgets: plWidgets },
    id: { home: idHome, menu: idMenu, ui: idUI, store: idStore, widgets: idWidgets },
    tr: { home: trHome, menu: trMenu, ui: trUI, store: trStore, widgets: trWidgets },
    ru: { home: ruHome, menu: ruMenu, ui: ruUI, store: ruStore, widgets: ruWidgets },
    ja: { home: jaHome, menu: jaMenu, ui: jaUI, store: jaStore, widgets: jaWidgets },
    ko: { home: koHome, menu: koMenu, ui: koUI, store: koStore, widgets: koWidgets },
    zh: { home: zhHome, menu: zhMenu, ui: zhUI, store: zhStore, widgets: zhWidgets },
} as const;

export type TranslationKeys = typeof translations;

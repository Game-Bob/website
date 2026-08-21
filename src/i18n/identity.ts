import type { HeaderLabels } from "@jjlmoya/identity/types";
import type { Language } from "./languages";

export const IDENTITY_HEADER_LABELS = {
    en: { menu: "Open menu", closeMenu: "Close menu", theme: "Theme", switchToLight: "Switch to light theme", switchToDark: "Switch to dark theme", switchToSystem: "Use system theme" },
    fr: { menu: "Ouvrir le menu", closeMenu: "Fermer le menu", theme: "Thème", switchToLight: "Passer au thème clair", switchToDark: "Passer au thème sombre", switchToSystem: "Utiliser le thème du système" },
    de: { menu: "Menü öffnen", closeMenu: "Menü schließen", theme: "Farbschema", switchToLight: "Zum hellen Farbschema wechseln", switchToDark: "Zum dunklen Farbschema wechseln", switchToSystem: "Systemdesign verwenden" },
    it: { menu: "Apri menu", closeMenu: "Chiudi menu", theme: "Tema", switchToLight: "Passa al tema chiaro", switchToDark: "Passa al tema scuro", switchToSystem: "Usa il tema di sistema" },
    pt: { menu: "Abrir menu", closeMenu: "Fechar menu", theme: "Tema", switchToLight: "Mudar para o tema claro", switchToDark: "Mudar para o tema escuro", switchToSystem: "Usar o tema do sistema" },
    nl: { menu: "Menu openen", closeMenu: "Menu sluiten", theme: "Thema", switchToLight: "Naar licht thema schakelen", switchToDark: "Naar donker thema schakelen", switchToSystem: "Systeemthema gebruiken" },
    sv: { menu: "Öppna meny", closeMenu: "Stäng meny", theme: "Tema", switchToLight: "Byt till ljust tema", switchToDark: "Byt till mörkt tema", switchToSystem: "Använd systemtema" },
    pl: { menu: "Otwórz menu", closeMenu: "Zamknij menu", theme: "Motyw", switchToLight: "Przełącz na jasny motyw", switchToDark: "Przełącz na ciemny motyw", switchToSystem: "Użyj motywu systemowego" },
    id: { menu: "Buka menu", closeMenu: "Tutup menu", theme: "Tema", switchToLight: "Beralih ke tema terang", switchToDark: "Beralih ke tema gelap", switchToSystem: "Gunakan tema sistem" },
    tr: { menu: "Menüyü aç", closeMenu: "Menüyü kapat", theme: "Tema", switchToLight: "Açık temaya geç", switchToDark: "Koyu temaya geç", switchToSystem: "Sistem temasını kullan" },
    ru: { menu: "Открыть меню", closeMenu: "Закрыть меню", theme: "Тема", switchToLight: "Включить светлую тему", switchToDark: "Включить тёмную тему", switchToSystem: "Использовать системную тему" },
    ja: { menu: "メニューを開く", closeMenu: "メニューを閉じる", theme: "テーマ", switchToLight: "ライトテーマに切り替える", switchToDark: "ダークテーマに切り替える", switchToSystem: "システムテーマを使用する" },
    ko: { menu: "메뉴 열기", closeMenu: "메뉴 닫기", theme: "테마", switchToLight: "라이트 테마로 전환", switchToDark: "다크 테마로 전환", switchToSystem: "시스템 테마 사용" },
    zh: { menu: "打开菜单", closeMenu: "关闭菜单", theme: "主题", switchToLight: "切换到浅色主题", switchToDark: "切换到深色主题", switchToSystem: "使用系统主题" },
} as const satisfies Record<Language, HeaderLabels>;

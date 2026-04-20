import type { Language } from './languages';
import en from './locales/en/apps';
import fr from './locales/fr/apps';
import de from './locales/de/apps';
import it from './locales/it/apps';
import pt from './locales/pt/apps';
import nl from './locales/nl/apps';
import sv from './locales/sv/apps';
import pl from './locales/pl/apps';
import id from './locales/id/apps';
import tr from './locales/tr/apps';
import ru from './locales/ru/apps';
import ja from './locales/ja/apps';
import ko from './locales/ko/apps';
import zh from './locales/zh/apps';

const appsLocales: Record<Language, typeof en> = {
    en, fr, de, it, pt, nl, sv, pl, id, tr, ru, ja, ko, zh,
};

export function useAppsTranslations(lang: Language) {
    return appsLocales[lang] ?? appsLocales.en;
}

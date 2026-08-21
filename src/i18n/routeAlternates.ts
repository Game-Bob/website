import languageRouteManifest from 'virtual:gamebob-language-route-manifest';
import {
    resolveAlternateUrls,
    type AlternateUrl,
    type LanguageRouteManifest,
} from './languageRouteManifest';

export type { AlternateUrl };

export function getRouteAlternates(pathname: string, currentLang: string): AlternateUrl[] {
    return resolveAlternateUrls(languageRouteManifest as LanguageRouteManifest, pathname, currentLang);
}

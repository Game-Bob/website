import { SUPPORTED_LANGUAGES, externalLanguages } from './languages';
import { slugMapping } from './slugs';

export interface AlternateUrl {
    lang: string;
    url: string;
}

export interface LanguageRouteManifest {
    routes: Record<string, number>;
    groups: AlternateUrl[][];
}

const ensureTrailingSlash = (value: string) => value.endsWith('/') ? value : `${value}/`;

export function addLocalizedRouteGroup(
    manifest: LanguageRouteManifest,
    localizedUrls: Record<string, string>,
): void {
    const alternates = Object.entries(localizedUrls).map(([lang, url]) => ({
        lang,
        url: ensureTrailingSlash(url),
    }));
    const groupIndex = manifest.groups.push(alternates) - 1;

    for (const lang of SUPPORTED_LANGUAGES) {
        const sourceUrl = localizedUrls[lang];
        if (sourceUrl) manifest.routes[ensureTrailingSlash(sourceUrl)] = groupIndex;
    }
}

function translateStaticSegment(segment: string, currentLang: string, targetLang: string): string {
    for (const mapping of Object.values(slugMapping)) {
        if (mapping[currentLang] === segment) return mapping[targetLang] ?? segment;
    }
    return segment;
}

function buildStaticFallback(pathname: string, currentLang: string): AlternateUrl[] {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === currentLang) segments.shift();

    const internal = SUPPORTED_LANGUAGES.map(targetLang => ({
        lang: targetLang,
        url: ensureTrailingSlash(`/${targetLang}/${segments
            .map(segment => translateStaticSegment(segment, currentLang, targetLang))
            .join('/')}`),
    }));
    const external = Object.entries(externalLanguages).map(([targetLang, domain]) => ({
        lang: targetLang,
        url: ensureTrailingSlash(`${domain}/${segments
            .map(segment => translateStaticSegment(segment, currentLang, targetLang))
            .join('/')}`),
    }));

    return [...internal, ...external];
}

export function resolveAlternateUrls(
    manifest: LanguageRouteManifest,
    pathname: string,
    currentLang: string,
): AlternateUrl[] {
    const groupIndex = manifest.routes[ensureTrailingSlash(pathname)];
    return groupIndex === undefined
        ? buildStaticFallback(pathname, currentLang)
        : manifest.groups[groupIndex];
}

import { slugMapping } from "./utils";
import { ALL_TOOL_ENTRIES, CATEGORIES } from "../data/utilities/registry";
import { ALL_APP_DEFINITIONS } from "@jjlmoya/apps";
import type { KnownLocale } from "@jjlmoya/apps";

export function translateFromMapping(segment: string, lang: string, targetLang: string): string | undefined {
    for (const mapping of Object.values(slugMapping)) {
        if (mapping[lang] === segment) return mapping[targetLang];
    }
}

export async function translateFromCategories(segment: string, lang: string, targetLang: string): Promise<string | undefined> {
    for (const cat of CATEGORIES) {
        if (!cat.entry.i18n[lang] || !cat.entry.i18n[targetLang]) continue;
        const current = await cat.entry.i18n[lang]();
        if (current.slug === segment) return (await cat.entry.i18n[targetLang]()).slug;
    }
}

export async function translateFromTools(segment: string, lang: string, targetLang: string): Promise<string | undefined> {
    for (const tool of ALL_TOOL_ENTRIES) {
        if (!tool.i18n[lang] || !tool.i18n[targetLang]) continue;
        const current = await tool.i18n[lang]();
        if (current.slug === segment) return (await tool.i18n[targetLang]()).slug;
    }
}

function getAppLoaders(definition: (typeof ALL_APP_DEFINITIONS)[number], lang: string, targetLang: string) {
    const current = definition.entry.i18n[lang as KnownLocale] ?? definition.entry.i18n.en;
    const target = definition.entry.i18n[targetLang as KnownLocale] ?? definition.entry.i18n.en;
    return current && target ? { current, target } : null;
}

export async function translateFromApps(segment: string, lang: string, targetLang: string): Promise<string | undefined> {
    for (const definition of ALL_APP_DEFINITIONS) {
        const loaders = getAppLoaders(definition, lang, targetLang);
        if (!loaders) continue;
        const current = await loaders.current();
        if (current.slug === segment) return (await loaders.target()).slug;
    }
}

export async function translateSegment(segment: string, lang: string, targetLang: string) {
    return translateFromMapping(segment, lang, targetLang)
        ?? await translateFromCategories(segment, lang, targetLang)
        ?? await translateFromTools(segment, lang, targetLang)
        ?? await translateFromApps(segment, lang, targetLang)
        ?? segment;
}

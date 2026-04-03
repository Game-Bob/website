import { getUtilityUrl } from "../../i18n/urlBuilder";
import type { Language } from "../../i18n/utils";
import type { CategoryDefinition } from "./registry";
import type { SectionData } from "./types";

export async function buildSection(lang: Language, def: CategoryDefinition): Promise<SectionData> {
    const cat = await def.entry.i18n[lang]!();

    const utilities = await Promise.all(
        def.toolsWithColors.map(async ({ toolEntry, color }: { toolEntry: any; color: string }) => {
            const content = await toolEntry.i18n[lang]!();
            return {
                href: getUtilityUrl(lang, def.key, content.slug),
                iconBg: color,
                iconFg: toolEntry.icons.fg,
                title: content.title,
                description: content.description,
                seoDescription: content.seoDescription,
                color,
            };
        })
    );

    return {
        title: cat.title,
        slug: cat.slug,
        icon: def.entry.icon,
        theme: def.theme,
        description: cat.description,
        seo: cat.seo,
        utilities,
    };
}

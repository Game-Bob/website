import { bikeCategory, fixedGear, spokeCalculator, gearCalculator } from '@jjlmoya/utils-bike/data';
import { getUtilityUrl } from "../../i18n/routerUtils";
import { type Language } from "../../i18n/utils";
import type { SectionData } from "./types";

export async function getBikeSection(lang: Language): Promise<SectionData> {
    const locale = lang;
    const [fixed, spoke, gear, cat] = await Promise.all([
        fixedGear.i18n[locale]!(),
        spokeCalculator.i18n[locale]!(),
        gearCalculator.i18n[locale]!(),
        bikeCategory.i18n[locale]!(),
    ]);

    const wrap = (tool: any, content: any, color: string) => ({
        href: getUtilityUrl(lang, "bikes", content.slug),
        iconBg: color,
        iconFg: tool.icons.fg,
        title: content.title,
        description: content.description,
        seoDescription: content.seoDescription,
        color,
    });

    return {
        title: cat.title,
        slug: cat.slug,
        icon: bikeCategory.icon,
        theme: "rose",
        utilities: [
            wrap(fixedGear, fixed, "#ef4444"),
            wrap(spokeCalculator, spoke, "#6366f1"),
            wrap(gearCalculator, gear, "#10b981"),
        ],
    };
}
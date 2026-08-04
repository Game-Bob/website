import type { APIRoute } from "astro";
import { ALL_APP_DEFINITIONS } from "@jjlmoya/apps";
import { SUPPORTED_LANGUAGES } from "../../i18n/utils";

const TEAM_ID = "63D7H6T9N3";

function getBundleId(entry: any): string {
    return entry.packageId;
}

async function getAppPaths(entry: any): Promise<string[]> {
    const pathSet = new Set<string>();
    for (const lang of SUPPORTED_LANGUAGES) {
        const loader = entry.i18n[lang as any] ?? entry.i18n.en;
        if (loader) {
            const card = await loader();
            pathSet.add(`/${lang}/apps/${card.slug}/*`);
            pathSet.add(`/${lang}/apps/${card.slug}/`);
        }
    }
    return Array.from(pathSet);
}

export const GET: APIRoute = async () => {
    const details = [];

    for (const definition of ALL_APP_DEFINITIONS) {
        const bundleId = getBundleId(definition.entry);
        const paths = await getAppPaths(definition.entry);
        details.push({
            appID: `${TEAM_ID}.${bundleId}`,
            paths,
        });
    }

    const association = {
        applinks: {
            apps: [],
            details,
        },
    };

    return new Response(JSON.stringify(association, null, 2), {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
};

import type { APIRoute } from "astro";
import { getWidgetHtml } from "../../utils/widget";

export const prerender = false;

function validateUrl(targetUrl: string) {
    if (!targetUrl) return { valid: false, error: "Missing url parameter" };
    const allowedDomains = ["gamebob.dev", "localhost", "127.0.0.1"];
    if (!allowedDomains.some((d) => targetUrl.toLowerCase().includes(d))) {
        return { valid: false, error: "Invalid domain" };
    }
    return { valid: true };
}

function buildWidgetData(targetUrl: string) {
    const baseUrl = targetUrl.split("?")[0];
    const cleanUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const utilityName = baseUrl.split("/").filter(Boolean).pop() || "utility";
    return { cleanUrl, widgetUrl: `${cleanUrl}?widget=true`, utilityName, widgetId: `wj-${utilityName}` };
}

export const GET: APIRoute = ({ request }) => {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get("url") || "";
    const validation = validateUrl(targetUrl);

    if (!validation.valid) {
        return new Response(JSON.stringify({ error: validation.error }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const { cleanUrl, widgetUrl, utilityName, widgetId } = buildWidgetData(targetUrl);
    const html = getWidgetHtml({ widgetId, widgetUrl, cleanUrl });

    return new Response(JSON.stringify({
        version: "1.0",
        type: "rich",
        provider_name: "GameBob",
        provider_url: url.origin,
        author_name: "GameBob",
        author_url: url.origin,
        title: `Widget: ${utilityName.replace(/-/g, " ")}`,
        html,
        width: 800,
        height: 500,
        cache_age: 3600,
    }), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
};

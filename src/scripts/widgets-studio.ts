import { renderWidget, handleIframeMessage, setupCopy } from "./widgets-render";
import { filterGroup, toggleGroup } from "./widgets-filter";
import { activateButton, activateFromUrl } from "./widgets-activate";

export interface UtilityData {
    href: string;
    title: string;
    description?: string;
    widgetId: string;
    toolSlug: string;
    category?: string;
}

let activeTheme = "light";

function initBgToggles() {
    document.querySelectorAll(".bg-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
            const canvas = document.getElementById("preview-canvas");
            document.querySelectorAll(".bg-toggle").forEach((b) => b.classList.remove("active-bg"));
            btn.classList.add("active-bg");
            if (canvas) { canvas.className = "preview-canvas"; canvas.classList.add(`preview-${(btn as HTMLElement).dataset.bg}`); }
        });
    });
}

function initThemeToggles() {
    document.querySelectorAll(".widget-theme-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            activeTheme = (btn as HTMLElement).dataset.theme ?? "light";
            document.querySelectorAll(".widget-theme-btn").forEach((b) => b.classList.toggle("active", b === btn));
            const active = document.querySelector(".utility-btn.active-tool") as HTMLElement | null;
            if (active) renderWidget(active.dataset.href ?? "", active.dataset.widgetId ?? "", activeTheme);
        });
    });
}

export function initWidgetStudio(flatUtilities: UtilityData[]) {
    document.querySelectorAll(".category-toggle").forEach((t) => {
        t.addEventListener("click", () => toggleGroup(t));
    });

    document.getElementById("widget-search")?.addEventListener("input", (e) => {
        const term = (e.target as HTMLInputElement).value.toLowerCase();
        document.querySelectorAll(".category-group").forEach((g) => filterGroup(g, term));
    });

    initBgToggles();
    initThemeToggles();

    window.addEventListener("message", (e) => {
        const { jjlmoyaId, jjlmoyaHeight } = e.data ?? {};
        if (jjlmoyaId && jjlmoyaHeight) handleIframeMessage(jjlmoyaId, jjlmoyaHeight);
    });

    document.querySelectorAll(".utility-btn").forEach((btn) => {
        btn.addEventListener("click", () => activateButton(btn as HTMLElement, flatUtilities, activeTheme));
    });

    setupCopy("copy-url", "code-url");
    setupCopy("copy-iframe", "code-iframe");

    activateFromUrl(flatUtilities, activeTheme);
}

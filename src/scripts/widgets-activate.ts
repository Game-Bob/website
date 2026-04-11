import type { UtilityData } from "./widgets-studio";
import { renderWidget } from "./widgets-render";
import { toggleGroup } from "./widgets-filter";

function updateUI(_utData: UtilityData, _category: string) {
    document.getElementById("embed-section")?.classList.remove("hidden");
}

export function activateButton(btn: HTMLElement, flatUtilities: UtilityData[], theme: string) {
    document.querySelectorAll(".utility-btn").forEach((b) => b.classList.remove("active-tool"));
    btn.classList.add("active-tool");
    const utData = flatUtilities.find((u) => u.href === btn.dataset.href);
    if (!utData) return;
    const category = btn.dataset.category ?? "";
    const url = new URL(window.location.href);
    url.searchParams.set("utilidad", btn.dataset.toolSlug ?? "");
    window.history.replaceState({}, "", url);
    updateUI(utData, category);
    renderWidget(utData.href, utData.widgetId, theme);
}

function openGroupFor(target: HTMLElement) {
    const toggle = target.closest(".category-group")?.querySelector(".category-toggle") as HTMLElement;
    if (toggle) toggleGroup(toggle);
}

export function activateFromUrl(flatUtilities: UtilityData[], theme: string) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("utilidad") || params.get("u");
    if (!slug) return;

    const btns = Array.from(document.querySelectorAll(".utility-btn"));
    const target = btns.find((b) => (b as HTMLElement).dataset.toolSlug === slug) as HTMLElement;
    if (target) {
        openGroupFor(target);
        activateButton(target, flatUtilities, theme);
    }
}





import type { UtilityData } from "./widgets-studio";
import { renderWidget } from "./widgets-render";
import { toggleGroup } from "./widgets-filter";

function updateBadge(category: string) {
    const badge = document.getElementById("current-category-badge");
    if (badge) { badge.textContent = category; badge.classList.remove("hidden"); }
}

function setTextContent(id: string, text: string) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function updateUI(utData: UtilityData, category: string) {
    setTextContent("current-title", utData.title);
    setTextContent("current-desc", utData.description ?? "");
    document.getElementById("embed-section")?.classList.remove("hidden");
    updateBadge(category);
    if (window.innerWidth < 1024) document.getElementById("current-title")?.scrollIntoView({ behavior: "smooth", block: "center" });
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

export function activateFromUrl(flatUtilities: UtilityData[], theme: string) {
    const slug = new URLSearchParams(window.location.search).get("utilidad");
    if (!slug) return;
    const target = Array.from(document.querySelectorAll(".utility-btn"))
        .find((b) => (b as HTMLElement).dataset.toolSlug === slug) as HTMLElement | undefined;
    if (!target) return;
    const groupToggle = target.closest(".category-group")?.querySelector(".category-toggle");
    if (groupToggle) toggleGroup(groupToggle);
    activateButton(target, flatUtilities, theme);
}

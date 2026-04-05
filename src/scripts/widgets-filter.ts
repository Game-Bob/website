function setExpandState(group: Element, expanding: boolean) {
    group.querySelector(".category-content")?.classList.toggle("hidden", !expanding);
    group.querySelector(".chevron")?.classList.toggle("rotated", expanding);
}

function setGroupVisibility(group: Element, term: string, hasMatch: boolean) {
    (group as HTMLElement).style.display = hasMatch || term === "" ? "block" : "none";
    setExpandState(group, term !== "" && hasMatch);
}

export function filterGroup(group: Element, term: string) {
    let hasMatch = false;
    group.querySelectorAll(".utility-btn").forEach((btn) => {
        const b = btn as HTMLElement;
        const match = (b.dataset.title ?? "").toLowerCase().includes(term);
        b.style.display = match ? "flex" : "none";
        if (match) hasMatch = true;
    });
    setGroupVisibility(group, term, hasMatch);
}

export function closeOtherGroups(current: Element) {
    document.querySelectorAll(".category-group").forEach((g) => {
        if (g === current) return;
        g.querySelector(".category-content")?.classList.add("hidden");
        g.querySelector(".chevron")?.classList.remove("rotated");
        g.classList.remove("is-open");
    });
}

export function toggleGroup(toggle: Element) {
    const group = toggle.closest(".category-group");
    if (!group) return;
    const opening = group.querySelector(".category-content")?.classList.contains("hidden") ?? false;
    closeOtherGroups(group);
    setExpandState(group, opening);
    group.classList.toggle("is-open", opening);
}

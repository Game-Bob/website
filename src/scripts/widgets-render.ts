export function buildWidgetHtml(widgetId: string, widgetUrl: string, theme: string): string {
    const isDark = theme === "dark";
    const bg = isDark ? "#09090b" : "#fff";
    const border = isDark ? "#27272a" : "#e2e8f0";
    const sp = isDark ? "#18181b" : "#f3f4f6";
    const sep = widgetUrl.includes("?") ? "&" : "?";
    const finalUrl = `${widgetUrl}${sep}theme=${theme}`;
    return `\x3Cdiv id="${widgetId}-wrp" style="position:relative;width:100%;border:1px solid ${border};border-radius:12px;overflow:hidden;background:${bg};">\x3Cscript>(function(){var id='${widgetId}';function u(h){var f=document.getElementById(id);var l=document.getElementById(id+'-loader');if(f&&h)f.style.height=h+'px';if(f)f.style.opacity='1';if(l){l.style.opacity='0';setTimeout(function(){l.style.display='none';},400);}}window.addEventListener('message',function(e){if(e.data&&e.data.jjlmoyaId===id&&e.data.jjlmoyaHeight)u(e.data.jjlmoyaHeight);});window._jjshow=u;})();\x3C/script>\x3Cdiv id="${widgetId}-loader" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:${bg};z-index:10;transition:opacity 0.4s;">\x3Cdiv style="width:24px;height:24px;border:2px solid ${sp};border-top-color:#94a3b8;border-radius:50%;animation:jjspin 0.8s linear infinite;">\x3C/div>\x3C/div>\x3Ciframe id="${widgetId}" src="${finalUrl}&id=${widgetId}" width="100%" height="400" frameborder="0" scrolling="no" style="display:block;opacity:0;transition:opacity 0.4s,height 0.3s ease;border:none;" onload="window._jjshow()">\x3C/iframe>\x3Cstyle>@keyframes jjspin{to{transform:rotate(360deg);}}\x3C/style>\x3C/div>`;
}

function applyHtml(html: string) {
    const canvas = document.getElementById("canvas-inner");
    if (!canvas) return;
    canvas.innerHTML = "";
    canvas.appendChild(document.createRange().createContextualFragment(html));
}

function buildPreviewHtml(widgetId: string, widgetUrl: string, theme: string): string {
    const sep = widgetUrl.includes("?") ? "&" : "?";
    const finalUrl = `${widgetUrl}${sep}theme=${theme}&id=${widgetId}`;
    return `<iframe id="${widgetId}" src="${finalUrl}" width="100%" height="400" frameborder="0" scrolling="no" style="display:block;border:none;" onload="this.style.opacity='1'" loading="lazy"></iframe>`;
}

export function renderWidget(href: string, widgetId: string, theme: string) {
    const origin = window.location.origin;
    const clean = `${origin}${href}${href.endsWith("/") ? "" : "/"}`;
    const embedHtml = buildWidgetHtml(widgetId, `${clean}?widget=true`, theme);
    const previewHtml = buildPreviewHtml(widgetId, `${clean}?widget=true`, theme);
    const iframe = document.getElementById("code-iframe");
    const url = document.getElementById("code-url");
    if (iframe) iframe.textContent = embedHtml.trim();
    if (url) url.textContent = clean;
    applyHtml(previewHtml);
}

export function handleIframeMessage(id: string, height: number) {
    const iframe = document.getElementById(id) as HTMLIFrameElement | null;
    const loader = document.getElementById(id + "-loader");
    if (iframe) { iframe.style.height = height + "px"; iframe.style.opacity = "1"; }
    if (loader) { loader.style.opacity = "0"; setTimeout(() => (loader.style.display = "none"), 400); }
}

export function setupCopy(btnId: string, targetId: string) {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetId);
    if (!btn || !target) return;
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(target.textContent ?? "").then(() => {
            const orig = btn.innerHTML;
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            setTimeout(() => (btn.innerHTML = orig), 2000);
        });
    });
}

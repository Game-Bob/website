function getThemeStyles(theme: string) {
    const isDark = theme === "dark";
    return {
        bg: isDark ? "#09090b" : "#fff",
        border: isDark ? "#27272a" : "#e2e8f0",
        sp: isDark ? "#18181b" : "#f3f4f6",
        badgeBorder: isDark ? "#18181b" : "#f1f5f9",
        isDark
    };
}

function getFinalUrls(widgetUrl: string, theme: string) {
    const sep = widgetUrl.includes("?") ? "&" : "?";
    const finalUrl = `${widgetUrl}${sep}theme=${theme}`;
    const cleanUrl = widgetUrl.replace(/[?&]widget=true/, "");
    const finalCleanUrl = cleanUrl.endsWith("/") ? cleanUrl : cleanUrl + "/";
    return { finalUrl, finalCleanUrl };
}

export function buildWidgetHtml(id: string, url: string, theme: string): string {
    const { bg, border, sp, isDark } = getThemeStyles(theme);
    const { finalUrl, finalCleanUrl } = getFinalUrls(url, theme);
    const script = `\x3Cscript>(function(){var id='${id}';function u(h){var f=document.getElementById(id);var l=document.getElementById(id+'-loader');if(f&&h)f.style.height=h+'px';if(f)f.style.opacity='1';if(l){l.style.opacity='0';setTimeout(function(){l.style.display='none';},400);}}window.addEventListener('message',function(e){if(e.data&&e.data.jjlmoyaId===id&&e.data.jjlmoyaHeight)u(e.data.jjlmoyaHeight);});window._jjshow=u;})();\x3C/script>`;
    const loader = `\x3Cdiv id="${id}-loader" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:${bg};z-index:10;transition:opacity 0.4s;">\x3Cdiv style="width:24px;height:24px;border:2px solid ${sp};border-top-color:#94a3b8;border-radius:50%;animation:jjspin 0.8s linear infinite;">\x3C/div>\x3C/div>`;
    const iframe = `\x3Ciframe id="${id}" src="${finalUrl}&id=${id}" width="100%" height="400" frameborder="0" scrolling="no" style="display:block;opacity:0;transition:opacity 0.4s,height 0.3s ease;border:none;" onload="window._jjshow()">\x3C/iframe>`;
    const style = `\x3Cstyle>@keyframes jjspin{to{transform:rotate(360deg);}}#${id}-link:hover{opacity:1!important;color:${isDark ? "#fff" : "#000"}!important;background:${isDark ? "#18181b" : "#f8fafc"}!important;border-color:${border}!important;}\x3C/style>`;
    const link = `\x3Cdiv style="text-align:center;margin-top:10px;">\x3Ca id="${id}-link" href="${finalCleanUrl}" target="_blank" title="Usa esta utilidad en tu web" style="display:inline-flex;align-items:center;gap:6px;font-size:9px;color:#94a3b8;text-decoration:none;padding:4px 12px;border-radius:100px;border:1px solid ${isDark ? "#18181b" : "#f1f5f9"};background:${bg};transition:all 0.2s ease;opacity:0.8;box-shadow:0 1px 2px rgba(0,0,0,0.03);">\x3Csvg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">\x3Cpolyline points="16 18 22 12 16 6">\x3C/polyline>\x3Cpolyline points="8 6 2 12 8 18">\x3C/polyline>\x3C/svg>\x3Cspan style="font-weight:600;letter-spacing:0.02em;">gamebob.dev\x3C/span>\x3C/a>\x3C/div>`;
    return `\x3Cdiv id="${id}-wrp" style="position:relative;width:100%;border:1px solid ${border};border-radius:12px;overflow:hidden;background:${bg};">${script}${loader}${iframe}${style}\x3C/div>${link}`;
}

function applyHtml(html: string) {
    const canvas = document.getElementById("canvas-inner");
    if (!canvas) return;
    canvas.innerHTML = "";
    canvas.appendChild(document.createRange().createContextualFragment(html));
}

export function buildPreviewHtml(id: string, url: string, theme: string): string {
    const { bg, border, badgeBorder } = getThemeStyles(theme);
    const { finalUrl, finalCleanUrl } = getFinalUrls(url, theme);
    const iframe = `<div style="width:100%;border:1px solid ${border};border-radius:12px;overflow:hidden;background:${bg};"><iframe id="${id}" src="${finalUrl}&id=${id}" width="100%" height="400" frameborder="0" scrolling="no" style="display:block;border:none;" onload="this.style.opacity='1'" loading="lazy"></iframe></div>`;
    const link = `<div style="text-align:center;margin-top:10px;"><a href="${finalCleanUrl}" target="_blank" title="Usa esta utilidad en tu web" style="display:inline-flex;align-items:center;gap:6px;font-size:9px;color:#94a3b8;text-decoration:none;padding:4px 12px;border-radius:100px;border:1px solid ${badgeBorder};background:${bg};transition:all 0.2s ease;opacity:0.8;box-shadow:0 1px 2px rgba(0,0,0,0.03);"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg><span style="font-weight:600;letter-spacing:0.02em;">gamebob.dev</span></a></div>`;
    return `${iframe}${link}`;
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

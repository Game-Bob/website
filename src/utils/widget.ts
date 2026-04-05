function buildWidgetUrl(widgetUrl: string, theme?: "light" | "dark"): string {
    const params = new URLSearchParams();
    if (theme) params.append("theme", theme);
    const queryString = params.toString();
    return queryString ? widgetUrl + (widgetUrl.includes("?") ? "&" : "?") + queryString : widgetUrl;
}

function getColors(theme?: "light" | "dark"): { bg: string; border: string; isDark: boolean } {
    const isDark = theme === "dark";
    return {
        bg: isDark ? "#09090b" : "#fff",
        border: isDark ? "#27272a" : "#e2e8f0",
        isDark,
    };
}

function buildLoaderHtml(widgetId: string, bg: string, isDark: boolean): string {
    const spinnerBorder = isDark ? "#18181b" : "#f3f4f6";
    return `\x3Cdiv id="${widgetId}-loader" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: ${bg}; z-index: 10; transition: opacity 0.4s;">
        \x3Cdiv style="width: 24px; height: 24px; border: 2px solid ${spinnerBorder}; border-top-color: #94a3b8; border-radius: 50%; animation: jjspin 0.8s linear infinite;">\x3C/div>
    \x3C/div>`;
}

function buildIframeHtml(widgetId: string, finalWidgetUrl: string): string {
    return `\x3Ciframe id="${widgetId}" src="${finalWidgetUrl}&id=${widgetId}" width="100%" height="400" frameborder="0" scrolling="no" style="display: block; opacity: 0; transition: opacity 0.4s, height 0.3s ease; border: none;" onload="window._jjshow()">\x3C/iframe>`;
}

function buildFooterHtml(finalCleanUrl: string, bg: string, isDark: boolean): string {
    const borderColor = isDark ? "#18181b" : "#f1f5f9";
    return `\x3Cdiv style="text-align: center; margin-top: 10px;">
    \x3Ca href="${finalCleanUrl}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; font-size: 9px; color: #94a3b8; text-decoration: none; padding: 4px 12px; border-radius: 100px; border: 1px solid ${borderColor}; background: ${bg}; opacity: 0.8;">
        \x3Cspan style="font-weight: 600; letter-spacing: 0.02em;">gamebob.dev\x3C/span>
    \x3C/a>
\x3C/div>`;
}

export function getWidgetHtml({
    widgetId,
    widgetUrl,
    cleanUrl,
    theme,
}: {
    widgetId: string;
    widgetUrl: string;
    cleanUrl: string;
    theme?: "light" | "dark";
}): string {
    const finalWidgetUrl = buildWidgetUrl(widgetUrl, theme);
    const finalCleanUrl = cleanUrl.endsWith("/") ? cleanUrl : cleanUrl + "/";
    const { bg, border, isDark } = getColors(theme);

    return `\x3Cdiv id="${widgetId}-wrp" style="position: relative; width: 100%; border: 1px solid ${border}; border-radius: 12px; overflow: hidden; background: ${bg};">
    \x3Cscript>
        (function() {
            var id = '${widgetId}';
            function update(h) {
                var f = document.getElementById(id);
                var l = document.getElementById(id + '-loader');
                if (f && h) f.style.height = h + 'px';
                if (f) f.style.opacity = '1';
                if (l) { l.style.opacity = '0'; setTimeout(function(){ l.style.display = 'none'; }, 400); }
            }
            window.addEventListener('message', function(e) {
                if (e.data && e.data.jjlmoyaId === id && e.data.jjlmoyaHeight) {
                    update(e.data.jjlmoyaHeight);
                }
            });
            window._jjshow = update;
        })();
    \x3C/script>
    ${buildLoaderHtml(widgetId, bg, isDark)}
    ${buildIframeHtml(widgetId, finalWidgetUrl)}
    \x3Cstyle>@keyframes jjspin { to { transform: rotate(360deg); } }\x3C/style>
\x3C/div>
${buildFooterHtml(finalCleanUrl, bg, isDark)}`;
}

const isWidget = new URLSearchParams(window.location.search).get("widget") === "true";
if (isWidget) {
    document.documentElement.classList.add("is-widget");
    document.body.classList.add("is-widget");
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get("theme");
    if (theme === "dark") {
        document.documentElement.classList.remove("theme-light");
        document.documentElement.classList.add("theme-dark");
    } else if (theme === "light") {
        document.documentElement.classList.remove("theme-dark");
        document.documentElement.classList.add("theme-light");
    }
    const id = urlParams.get("id") || `gamebob-widget-${window.location.pathname.split("/").filter(Boolean).pop() || "utility"}`;
    const report = () => {
        const container = document.querySelector(".utility-tool-container");
        const h = container ? container.getBoundingClientRect().height : document.body.scrollHeight;
        if (h > 50) window.parent.postMessage({ jjlmoyaHeight: Math.round(h), jjlmoyaId: id }, "*");
    };
    report();
    const itv = setInterval(report, 600);
    setTimeout(() => clearInterval(itv), 5000);
    window.addEventListener("load", report);
    const container = document.querySelector(".utility-tool-container");
    const obs = new ResizeObserver(report);
    obs.observe(container || document.body);
}

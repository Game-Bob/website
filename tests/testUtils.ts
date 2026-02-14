import fs from "node:fs";
import path from "node:path";

export const BASE_URL = "http://localhost:4321";
export const PAGES_DIR = path.join(process.cwd(), "src/pages");
export const LOCALES_DIR = path.join(process.cwd(), "src/i18n/locales");

export interface PageRoute {
    route: string;
    isDynamic: boolean;
    dynamicParam?: string;
}

export function getSupportedLangs(): string[] {
    if (!fs.existsSync(LOCALES_DIR)) {
        return ["en"];
    }

    return fs.readdirSync(LOCALES_DIR)
        .filter((item) => {
            const itemPath = path.join(LOCALES_DIR, item);
            if (!fs.statSync(itemPath).isDirectory()) {
                return false;
            }

            const files = fs.readdirSync(itemPath);
            return files.some(file => file.endsWith('.ts'));
        });
}

export function getPages(dir: string, baseRoute: string = ""): PageRoute[] {
    const files = fs.readdirSync(dir);
    let pages: PageRoute[] = [];

    files.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const isDynamicDir = file.startsWith("[") && file.endsWith("]");
            const newBaseRoute = isDynamicDir
                ? `${baseRoute}/${file}`
                : `${baseRoute}/${file}`;

            pages = pages.concat(getPages(fullPath, newBaseRoute));
        } else if (file.endsWith(".astro") || file.endsWith(".md") || file.endsWith(".html")) {
            if (file.startsWith("_") || file.startsWith(".")) return;

            let route = baseRoute;
            const name = path.parse(file).name;

            if (name !== "index") {
                route = `${route}/${name}`;
            }

            if (route === "") route = "/";
            else if (!route.endsWith("/")) route = `${route}/`;

            route = route.replace(/\/+/g, "/");

            const isDynamic = route.includes("[");
            const dynamicMatch = route.match(/\[([^\]]+)\]/);
            const dynamicParam = dynamicMatch ? dynamicMatch[1] : undefined;

            pages.push({
                route,
                isDynamic,
                dynamicParam
            });
        }
    });

    return pages;
}

export function generateConcreteRoutes(pageRoutes: PageRoute[]): string[] {
    const supportedLangs = getSupportedLangs();
    const concreteRoutes: string[] = [];

    pageRoutes.forEach((pageRoute) => {
        if (!pageRoute.isDynamic) {
            concreteRoutes.push(pageRoute.route);
        } else if (pageRoute.dynamicParam === "lang") {
            supportedLangs.forEach((lang) => {
                const concreteRoute = pageRoute.route.replace("[lang]", lang);

                if (!concreteRoute.includes("[")) {
                    concreteRoutes.push(concreteRoute);
                }
            });
        }
    });

    return concreteRoutes;
}

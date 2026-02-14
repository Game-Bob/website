import { describe, it, expect } from "vitest";
import { BASE_URL, PAGES_DIR, getPages, generateConcreteRoutes, getSupportedLangs } from "./testUtils";

const pageRoutes = getPages(PAGES_DIR);
const testRoutes = generateConcreteRoutes(pageRoutes);
const supportedLangs = getSupportedLangs();

console.log(`Found ${pageRoutes.length} page templates`);
console.log(`Generated ${testRoutes.length} concrete routes to test`);
console.log(`Testing ${supportedLangs.length} languages: ${supportedLangs.join(", ")}`);

describe("Page Availability Tests", () => {
    testRoutes.forEach((route) => {
        it(`should load ${route} correctly`, async () => {
            const response = await fetch(`${BASE_URL}${route}`);

            if (route === "/404/" || route.includes("/404/")) {
                expect([200, 404]).toContain(response.status);
            } else {
                expect(response.status).toBe(200);
            }

            const text = await response.text();

            expect(text).toContain("jjlmoya");

            expect(text.toLowerCase()).toContain("<html");
            expect(text).toContain("</html>");
        });
    });
});

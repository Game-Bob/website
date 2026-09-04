import { describe, expect, it } from "vitest";
import {
    INDEXABLE_CATEGORIES,
    LEGACY_ROUTE_CATEGORIES,
    SITEMAP_CATEGORIES,
} from "../src/data/utilities/registry";

describe("Host sitemap contract", () => {
    it("uses the complete indexable catalogue as the sitemap source", () => {
        expect(SITEMAP_CATEGORIES).toBe(INDEXABLE_CATEGORIES);
        expect(SITEMAP_CATEGORIES.length).toBeGreaterThan(0);
    });

    it("does not generate legacy utility routes in the host", () => {
        expect(LEGACY_ROUTE_CATEGORIES).toHaveLength(0);
    });
});

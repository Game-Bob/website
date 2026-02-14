import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.join(process.cwd(), "src");

// Global namespaces allowed in any file
const ALLOWED_GLOBAL_NAMESPACES = [
    "nav",         // Navigation links
    "site",        // Site metadata
    "hero",        // Hero sections
    "apps",        // App/project data
    "home",        // Home page content
    "mechanics",   // Mechanics section content
    "prototypes",  // Prototypes section content
    "roadmap",     // Roadmap section content
];

/**
 * Converts a file path to expected namespace(s)
 * Examples:
 * - TermsAndConditions.astro -> termsAndConditions
 * - ProjectHomeCard.astro -> projectHomeCard
 * - MechanicsTemplate.astro -> mechanicsTemplate
 * - pages/[lang]/privacy/index.astro -> privacy
 * - pages/[lang]/terms/index.astro -> terms
 */
function getExpectedNamespaces(filePath: string): string[] {
    const relativePath = path.relative(SRC_DIR, filePath);

    // For pages/[lang]/privacy/index.astro -> privacy
    // For pages/[lang]/terms/index.astro -> terms
    if (relativePath.startsWith("pages/[lang]/")) {
        const parts = relativePath.split("/");
        const pageName = parts[2]; // privacy, terms, etc.
        return [pageName, ...ALLOWED_GLOBAL_NAMESPACES];
    }

    // For regular components: extract filename and convert to camelCase
    const filename = path.basename(filePath, ".astro");
    const camelCased = filename.charAt(0).toLowerCase() + filename.slice(1);

    return [camelCased, ...ALLOWED_GLOBAL_NAMESPACES];
}

/**
 * Extract all t() calls from Astro file content
 * Returns array of namespace.key pairs found in t() calls
 */
function extractTranslationCalls(content: string): string[] {
    const tCallRegex = /\{t\(["']([^"']+)["']\)/g;
    const matches: string[] = [];

    let match;
    while ((match = tCallRegex.exec(content)) !== null) {
        matches.push(match[1]);
    }

    return matches;
}

/**
 * Get namespace from translation key
 * Example: "termsAndConditions.badge" -> "termsAndConditions"
 */
function getNamespace(translationKey: string): string {
    return translationKey.split(".")[0];
}

function getAllAstroFiles(dir: string): string[] {
    const files: string[] = [];

    function scan(currentDir: string) {
        const items = fs.readdirSync(currentDir);

        items.forEach(item => {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (item === 'node_modules' || item === '.git') return;
                scan(fullPath);
            } else if (item.endsWith('.astro')) {
                files.push(fullPath);
            }
        });
    }

    scan(dir);
    return files;
}

interface NamespaceViolation {
    key: string;
    namespace: string;
    line: number;
}

function checkNamespaceUsage(filePath: string): NamespaceViolation[] {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const violations: NamespaceViolation[] = [];

    const expectedNamespaces = getExpectedNamespaces(filePath);
    const translationCalls = extractTranslationCalls(content);

    // Find line numbers for each translation call
    translationCalls.forEach(key => {
        const namespace = getNamespace(key);

        // Check if namespace is one of the expected ones
        if (!expectedNamespaces.includes(namespace)) {
            // Find line number
            const lineIndex = lines.findIndex(line => line.includes(`t("${key}`)  || line.includes(`t('${key}`));
            violations.push({
                key,
                namespace,
                line: lineIndex >= 0 ? lineIndex + 1 : 0
            });
        }
    });

    return violations;
}

const astroFiles = getAllAstroFiles(SRC_DIR);

// Filter only files that use translations (have t() calls)
const filesWithTranslations = astroFiles.filter(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.includes('{t(') && content.includes('useTranslations');
});

describe("i18n: Namespace Enforcement", () => {
    filesWithTranslations.forEach((filePath) => {
        const relativePath = path.relative(SRC_DIR, filePath);
        const expectedNamespaces = getExpectedNamespaces(filePath);
        const ownNamespace = expectedNamespaces[0]; // First one is the file's own namespace

        it(`${relativePath} must use its own namespace "${ownNamespace}" (or global: ${ALLOWED_GLOBAL_NAMESPACES.join(', ')})`, () => {
            const violations = checkNamespaceUsage(filePath);

            if (violations.length > 0) {
                const errorMessage = violations.map(({ key, namespace, line }) =>
                    `  Line ${line}: t("${key}") uses wrong namespace "${namespace}"`
                ).join('\n');

                expect(
                    violations,
                    `File must use its own namespace "${ownNamespace}" or global namespaces: ${ALLOWED_GLOBAL_NAMESPACES.join(', ')}\n${errorMessage}\n\nExpected pattern: t("${ownNamespace}.key") or t("nav.key"), etc.`
                ).toEqual([]);
            }

            expect(violations).toEqual([]);
        });
    });

    it("should have at least some files with translations to test", () => {
        expect(filesWithTranslations.length).toBeGreaterThan(0);
    });
});

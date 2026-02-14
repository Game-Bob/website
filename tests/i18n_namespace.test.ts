import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.join(process.cwd(), "src");

const ALLOWED_GLOBAL_NAMESPACES = [
    "nav",
    "site",
    "hero",
    "apps",
    "home",
    "mechanics",
    "prototypes",
    "roadmap",
];

function getExpectedNamespaces(filePath: string): string[] {
    const relativePath = path.relative(SRC_DIR, filePath);

    if (relativePath.startsWith("pages/[lang]/")) {
        const parts = relativePath.split("/");
        const pageName = parts[2];
        return [pageName, ...ALLOWED_GLOBAL_NAMESPACES];
    }

    const filename = path.basename(filePath, ".astro");
    const camelCased = filename.charAt(0).toLowerCase() + filename.slice(1);

    return [camelCased, ...ALLOWED_GLOBAL_NAMESPACES];
}

function extractTranslationCalls(content: string): string[] {
    const tCallRegex = /\{t\(["']([^"']+)["']\)/g;
    const matches: string[] = [];

    let match;
    while ((match = tCallRegex.exec(content)) !== null) {
        matches.push(match[1]);
    }

    return matches;
}

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

    translationCalls.forEach(key => {
        const namespace = getNamespace(key);

        if (!expectedNamespaces.includes(namespace)) {
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

const filesWithTranslations = astroFiles.filter(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.includes('{t(') && content.includes('useTranslations');
});

describe("i18n: Namespace Enforcement", () => {
    filesWithTranslations.forEach((filePath) => {
        const relativePath = path.relative(SRC_DIR, filePath);
        const expectedNamespaces = getExpectedNamespaces(filePath);
        const ownNamespace = expectedNamespaces[0];

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

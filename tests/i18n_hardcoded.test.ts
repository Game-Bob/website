import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.join(process.cwd(), "src");

const ALLOWED_BRAND_TEXTS = ["jjlmoya", "GameBob", "GAME", "BOB", "GameBoy"];
const ALLOWED_PATTERNS = [
    /^[a-z0-9\-_\.\/]+$/i,  // identifiers, paths, classes
    /^[0-9\s,\.%\(\)]+$/,    // numbers, percentages
    /^(px|rem|em|vh|vw|%)$/, // CSS units
    /^M[0-9\s,\.A-ZLlHhVvCcSsQqTtAa\-]+$/, // SVG paths
    /^\s*$/,                  // whitespace only
];

const TEXT_ATTRIBUTES = ['alt', 'placeholder', 'title', 'aria-label', 'aria-description'];

function isAllowedText(text: string): boolean {
    text = text.trim();

    if (!text || text.length < 2) return true;

    // Allow brand names
    if (ALLOWED_BRAND_TEXTS.some(brand => text === brand)) return true;

    // Allow common patterns
    if (ALLOWED_PATTERNS.some(pattern => pattern.test(text))) return true;

    return false;
}

function extractHtmlVisibleText(htmlContent: string): Array<{ text: string; line: number; context: string }> {
    const results: Array<{ text: string; line: number; context: string }> = [];

    // Remove script and style sections
    const scriptIndex = htmlContent.indexOf('<script');
    const styleIndex = htmlContent.indexOf('<style');
    let processContent = htmlContent;

    if (scriptIndex > 0) processContent = htmlContent.substring(0, scriptIndex);
    if (styleIndex > 0 && styleIndex < processContent.length) {
        processContent = processContent.substring(0, styleIndex);
    }

    const lines = processContent.split('\n');

    lines.forEach((line, index) => {
        const lineNumber = index + 1;

        // Skip lines with translation functions
        if (line.includes('{t(') || line.includes('${t(')) return;

        // 1. Check for text in HTML attributes (alt, placeholder, title, etc.)
        TEXT_ATTRIBUTES.forEach(attr => {
            const attrRegex = new RegExp(`${attr}=["']([^"'{]+)["']`, 'g');
            let match;
            while ((match = attrRegex.exec(line)) !== null) {
                const text = match[1].trim();
                if (!isAllowedText(text)) {
                    results.push({
                        text,
                        line: lineNumber,
                        context: `attribute ${attr}="${text}"`
                    });
                }
            }
        });

        // 2. Check for text between HTML tags (but not inside {})
        const betweenTagsRegex = />([^<{]+)</g;
        let match;
        while ((match = betweenTagsRegex.exec(line)) !== null) {
            const text = match[1].trim();

            // Skip if it's a translation function call
            if (text.includes('t(')) continue;

            if (!isAllowedText(text) && /[a-zA-Z]{2,}/.test(text)) {
                results.push({
                    text,
                    line: lineNumber,
                    context: `text content`
                });
            }
        }
    });

    return results;
}

function getAllAstroFiles(dir: string): string[] {
    const files: string[] = [];

    function scan(currentDir: string) {
        const items = fs.readdirSync(currentDir);

        items.forEach(item => {
            const fullPath = path.join(currentDir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (item === 'node_modules' || item === '.git' || item === 'i18n') return;
                scan(fullPath);
            } else if (item.endsWith('.astro')) {
                files.push(fullPath);
            }
        });
    }

    scan(dir);
    return files;
}

function checkFileForHardcodedText(filePath: string): Array<{ text: string; line: number; context: string }> {
    const content = fs.readFileSync(filePath, 'utf-8');
    const sections = content.split('---');
    const htmlSection = sections.length >= 3 ? sections.slice(2).join('---') : content;
    return extractHtmlVisibleText(htmlSection);
}

const astroFiles = getAllAstroFiles(SRC_DIR);

describe("i18n: No Hardcoded Text", () => {
    astroFiles.forEach((filePath) => {
        const relativePath = path.relative(SRC_DIR, filePath);

        it(`${relativePath} should not have hardcoded user-facing text`, () => {
            const issues = checkFileForHardcodedText(filePath);

            if (issues.length > 0) {
                const errorMessage = issues.map(({ text, line, context }) =>
                    `  Line ${line} (${context}): "${text}"`
                ).join('\n');

                expect(
                    issues,
                    `Found ${issues.length} hardcoded text(s) in ${relativePath}:\n${errorMessage}\n\nUse i18n functions like {t('key')} instead.`
                ).toEqual([]);
            }

            expect(issues).toEqual([]);
        });
    });
});

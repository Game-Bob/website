import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { getSupportedLangs, LOCALES_DIR } from "./testUtils";

const BASE_LANG = "es";

interface TranslationObject {
    [key: string]: string | TranslationObject;
}

function getAllKeys(obj: TranslationObject, prefix = ""): string[] {
    const keys: string[] = [];

    for (const key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
            keys.push(...getAllKeys(obj[key] as TranslationObject, fullKey));
        } else {
            keys.push(fullKey);
        }
    }

    return keys.sort();
}

async function loadTranslationFile(lang: string, file: string): Promise<TranslationObject> {
    const filePath = path.join(LOCALES_DIR, lang, file);

    if (!fs.existsSync(filePath)) {
        return {};
    }

    const module = await import(filePath);
    return module.default || module;
}

function getTranslationFiles(lang: string): string[] {
    const langDir = path.join(LOCALES_DIR, lang);

    if (!fs.existsSync(langDir)) {
        return [];
    }

    return fs.readdirSync(langDir)
        .filter(file => file.endsWith('.ts'))
        .sort();
}

const supportedLangs = getSupportedLangs();
const baseFiles = getTranslationFiles(BASE_LANG);

describe("i18n: Translation Keys Consistency", () => {
    supportedLangs.forEach((lang) => {
        if (lang === BASE_LANG) return;

        describe(`Language: ${lang}`, () => {
            it(`should have all translation files from ${BASE_LANG}`, () => {
                const langFiles = getTranslationFiles(lang);
                const missingFiles = baseFiles.filter(file => !langFiles.includes(file));

                expect(
                    missingFiles,
                    `Missing translation files in ${lang}: ${missingFiles.join(", ")}`
                ).toEqual([]);
            });

            baseFiles.forEach((file) => {
                it(`${file} should have the same keys as ${BASE_LANG}`, async () => {
                    const baseTranslations = await loadTranslationFile(BASE_LANG, file);
                    const langTranslations = await loadTranslationFile(lang, file);

                    const baseKeys = getAllKeys(baseTranslations);
                    const langKeys = getAllKeys(langTranslations);

                    const missingKeys = baseKeys.filter(key => !langKeys.includes(key));
                    const extraKeys = langKeys.filter(key => !baseKeys.includes(key));

                    if (missingKeys.length > 0 || extraKeys.length > 0) {
                        let errorMsg = `Translation key mismatch in ${lang}/${file}:`;

                        if (missingKeys.length > 0) {
                            errorMsg += `\n  Missing keys: ${missingKeys.join(", ")}`;
                        }

                        if (extraKeys.length > 0) {
                            errorMsg += `\n  Extra keys: ${extraKeys.join(", ")}`;
                        }

                        expect(
                            { missingKeys, extraKeys },
                            errorMsg
                        ).toEqual({ missingKeys: [], extraKeys: [] });
                    }

                    expect(missingKeys).toEqual([]);
                    expect(extraKeys).toEqual([]);
                });
            });
        });
    });
});

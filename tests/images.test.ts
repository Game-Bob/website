import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";
import sharp from "sharp";

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;

    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!["node_modules", ".git", "dist"].includes(file)) {
                arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const SRC_DIR = path.resolve(process.cwd(), "src");
const CHECKED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tiff", ".webp"];

async function validateWebpFile(file: string, errors: string[]) {
    try {
        const metadata = await sharp(file).metadata();
        if (metadata.format !== "webp") {
            errors.push(`${path.relative(PUBLIC_DIR, file)} has .webp extension but is actually ${metadata.format}.`);
        }
    } catch (err: any) {
        errors.push(`Could not read metadata for ${path.relative(PUBLIC_DIR, file)}: ${err.message}`);
    }
}

describe("Image Assets Integrity", () => {
    it("should only contain WebP images in public/ (except .ico and .svg)", async () => {
        const files = getAllFiles(PUBLIC_DIR).filter(f => !path.basename(f).startsWith("."));
        const errors: string[] = [];

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (!CHECKED_EXTENSIONS.includes(ext)) continue;

            if (ext !== ".webp") {
                errors.push(`${path.relative(PUBLIC_DIR, file)} has invalid extension '${ext}'. Should be '.webp'.`);
            } else {
                await validateWebpFile(file, errors);
            }
        }

        expect(errors, `Found ${errors.length} image issues in public/:\n${errors.join("\n")}`).toEqual([]);
    });

    it("should not reference non-webp images in src/** code", () => {
        const files = getAllFiles(SRC_DIR);
        const forbiddenPatterns = [/\.png/i, /\.jpg/i, /\.jpeg/i, /\.gif/i, /\.bmp/i];
        const errors: string[] = [];

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if ([".webp", ".ico", ".png", ".jpg"].includes(ext)) continue;

            const content = fs.readFileSync(file, "utf8");
            content.split("\n").forEach((line, index) => {
                if (line.includes("http://") || line.includes("https://")) return;
                forbiddenPatterns.forEach((pattern) => {
                    if (pattern.test(line)) {
                        errors.push(`${path.relative(SRC_DIR, file)}:${index + 1} references forbidden image format: ${line.trim()}`);
                    }
                });
            });
        }

        expect(errors, `Found ${errors.length} forbidden image references in src/:\n${errors.join("\n")}`).toEqual([]);
    });
});

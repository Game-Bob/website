import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { categoryExportName } from './runtimeDiscovery.mjs';

const projectRoot = fileURLToPath(new URL('../../../', import.meta.url));
const generatedRoot = join(projectRoot, '.astro', 'runtime-routes');

export function writeGeneratedRoute(filename, source) {
    mkdirSync(generatedRoot, { recursive: true });
    const destination = join(generatedRoot, filename);
    if (!existsSync(destination) || readFileSync(destination, 'utf8') !== source) {
        writeFileSync(destination, source, 'utf8');
    }
    return pathToFileURL(destination);
}

function categoryToolColors(category) {
    return Object.fromEntries(
        category.toolsWithColors.map(({ toolEntry, color }) => [toolEntry.id, color]),
    );
}

export function utilityAdapter(runtime, category) {
    const entryExport = categoryExportName(category.packageName);
    const toolColors = categoryToolColors(category);
    return `---\nimport RuntimeUtilityRoute from '../../src/routes/utilities/RuntimeUtilityRoute.astro';\nimport { ${runtime.exportName} } from '${runtime.packageName}/runtime/${runtime.subpath}';\nimport { ${entryExport} as categoryEntry } from '${category.packageName}/data';\nimport { ALL_ENTRIES as categoryEntries } from '${category.packageName}/entries';\n\nconst toolColors = ${JSON.stringify(toolColors)};\n---\n\n<RuntimeUtilityRoute tool={${runtime.exportName}} {categoryEntry} {categoryEntries} {toolColors} categoryKey="${category.key}" packageName="${category.packageName}" />\n`;
}

export function categoryAdapter(category) {
    const entryExport = categoryExportName(category.packageName);
    const toolColors = categoryToolColors(category);
    return `---\nimport RuntimeCategoryRoute from '../../src/routes/utilities/RuntimeCategoryRoute.astro';\nimport CategorySEO from '${category.packageName}/category-seo';\nimport { ${entryExport} as categoryEntry } from '${category.packageName}/data';\nimport { ALL_ENTRIES as categoryEntries } from '${category.packageName}/entries';\n\nconst toolColors = ${JSON.stringify(toolColors)};\n---\n\n<RuntimeCategoryRoute {CategorySEO} {categoryEntry} {categoryEntries} {toolColors} categoryKey="${category.key}" noindex={${category.noindex ?? false}} />\n`;
}

export function appAdapter(runtime) {
    return `---\nimport RuntimeAppRoute from '../../src/routes/apps/RuntimeAppRoute.astro';\nimport { ${runtime.exportName} } from '${runtime.packageName}/runtime/${runtime.subpath}';\n---\n\n<RuntimeAppRoute app={${runtime.exportName}} />\n`;
}

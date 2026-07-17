import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { ALL_APP_ENTRIES } from '@jjlmoya/apps/data';
import { CATEGORIES } from '../data/utilities/registry.ts';
import { SUPPORTED_LANGUAGES } from '../i18n/languages.ts';
import { slugMapping } from '../i18n/slugs.ts';

const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
const generatedRoot = join(projectRoot, '.astro', 'runtime-routes');

function resolvePackageRoot(packageName) {
    return resolve(dirname(require.resolve(packageName)), '..');
}

function runtimeDirectories(packageName, sourceDirectory) {
    const directory = join(resolvePackageRoot(packageName), 'src', sourceDirectory);
    return readdirSync(directory, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && existsSync(join(directory, entry.name, 'index.ts')))
        .map(entry => ({
            name: entry.name,
            directory: join(directory, entry.name),
        }))
        .sort((left, right) => left.name.localeCompare(right.name));
}

function discoverRuntimes(packageName, sourceDirectory, entries, exportSuffix) {
    const runtimes = [];
    for (const runtimeDirectory of runtimeDirectories(packageName, sourceDirectory)) {
        const indexSource = readFileSync(join(runtimeDirectory.directory, 'index.ts'), 'utf8');
        const entrySource = readFileSync(join(runtimeDirectory.directory, 'entry.ts'), 'utf8');
        const exportNames = [...indexSource.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*)/g)]
            .map(match => match[1])
            .filter(name => name.endsWith(exportSuffix));
        const entryId = entrySource.match(/\bid\s*:\s*['"]([^'"]+)['"]/)?.[1];
        if (exportNames.length !== 1 || !entryId) {
            throw new Error(`${packageName}/runtime/${runtimeDirectory.name} has an invalid runtime boundary`);
        }
        const definition = entries.find(entry => entry.id === entryId);
        if (!definition) {
            throw new Error(`${packageName}/runtime/${runtimeDirectory.name} is missing from its data registry`);
        }
        runtimes.push({
            packageName,
            subpath: runtimeDirectory.name,
            exportName: exportNames[0],
            definition: { entry: definition },
        });
    }
    const discoveredEntryIds = new Set(runtimes.map(runtime => runtime.definition.entry.id));
    const missingEntries = entries.filter(entry => !discoveredEntryIds.has(entry.id));
    if (missingEntries.length > 0) {
        throw new Error(
            `${packageName} has entries without a valid runtime boundary: ${missingEntries.map(entry => entry.id).join(', ')}`,
        );
    }
    return runtimes;
}

function writeGeneratedRoute(filename, source) {
    mkdirSync(generatedRoot, { recursive: true });
    const destination = join(generatedRoot, filename);
    if (!existsSync(destination) || readFileSync(destination, 'utf8') !== source) {
        writeFileSync(destination, source, 'utf8');
    }
    return pathToFileURL(destination);
}

function utilityAdapter(runtime, category) {
    return `---\nimport RuntimeUtilityRoute from '../../src/routes/utilities/RuntimeUtilityRoute.astro';\nimport { ${runtime.exportName} } from '${runtime.packageName}/runtime/${runtime.subpath}';\n---\n\n<RuntimeUtilityRoute tool={${runtime.exportName}} categoryKey="${category.key}" packageName="${category.packageName}" />\n`;
}

function appAdapter(runtime) {
    return `---\nimport RuntimeAppRoute from '../../src/routes/apps/RuntimeAppRoute.astro';\nimport { ${runtime.exportName} } from '${runtime.packageName}/runtime/${runtime.subpath}';\n---\n\n<RuntimeAppRoute app={${runtime.exportName}} />\n`;
}

const utilityRuntimeGroups = CATEGORIES.map(category => ({
    category,
    runtimes: discoverRuntimes(
        category.packageName,
        'tool',
        category.toolsWithColors.map(({ toolEntry }) => toolEntry),
        '_TOOL',
    ),
}));
const appRuntimes = discoverRuntimes(
    '@jjlmoya/apps',
    'app',
    ALL_APP_ENTRIES,
    '_APP',
);

const utilityRoutes = [];
for (const { category, runtimes } of utilityRuntimeGroups) {
    for (const runtime of runtimes) {
        const entrypoint = writeGeneratedRoute(
            `${category.key}-${runtime.subpath.replaceAll(/[^a-zA-Z0-9-]/g, '-')}.astro`,
            utilityAdapter(runtime, category),
        );
        for (const lang of SUPPORTED_LANGUAGES) {
            const categoryLoader = category.entry.i18n[lang] ?? category.entry.i18n.en;
            const toolLoader = runtime.definition.entry.i18n[lang] ?? runtime.definition.entry.i18n.en;
            if (!categoryLoader || !toolLoader) {
                throw new Error(`Missing ${runtime.definition.entry.id} locale: ${lang}`);
            }
            const [categoryContent, tool] = await Promise.all([categoryLoader(), toolLoader()]);
            utilityRoutes.push({
                pattern: `/${lang}/${slugMapping.utilities[lang]}/${slugMapping.categories[lang]}/${categoryContent.slug}/${tool.slug}`,
                entrypoint,
            });
        }
    }
}

const appRoutes = [];
for (const runtime of appRuntimes) {
    const entrypoint = writeGeneratedRoute(
        `app-${runtime.subpath.replaceAll(/[^a-zA-Z0-9-]/g, '-')}.astro`,
        appAdapter(runtime),
    );
    for (const lang of SUPPORTED_LANGUAGES) {
        const loader = runtime.definition.entry.i18n[lang] ?? runtime.definition.entry.i18n.en;
        if (!loader) throw new Error(`Missing ${runtime.definition.entry.id} locale: ${lang}`);
        const content = await loader();
        appRoutes.push({
            pattern: `/${lang}/${slugMapping.apps[lang]}/${content.slug}`,
            entrypoint,
        });
    }
}

export default function isolatedContentRoutes() {
    const utilityRuntimeCount = utilityRuntimeGroups.reduce((total, group) => total + group.runtimes.length, 0);
    return {
        name: 'gamebob-isolated-content-routes',
        hooks: {
            'astro:config:setup': ({ injectRoute, logger }) => {
                for (const route of [...utilityRoutes, ...appRoutes]) {
                    injectRoute({ ...route, prerender: true });
                }
                logger.info(`Injected ${utilityRuntimeCount} utility runtimes and ${appRuntimes.length} app runtimes`);
            },
        },
    };
}

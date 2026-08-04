import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';

const require = createRequire(import.meta.url);

function resolvePackageRoot(packageName) {
    return resolve(dirname(require.resolve(packageName)), '..');
}

export function categoryExportName(packageName) {
    const dataSource = readFileSync(join(resolvePackageRoot(packageName), 'src', 'data.ts'), 'utf8');
    const exportedConst = [...dataSource.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*Category)\b/g)]
        .map(match => match[1]);
    if (exportedConst.length > 0) return exportedConst.at(-1);

    const categoryExports = dataSource.match(/export\s*{([^}]+)}\s*from\s*['"]\.\/category['"]/)?.[1]
        .split(',')
        .map(value => value.trim().split(/\s+as\s+/).at(-1))
        .filter(name => name?.endsWith('Category')) ?? [];
    if (categoryExports.length === 0) {
        throw new Error(`${packageName}/data does not export a category entry`);
    }
    return categoryExports[0];
}

function runtimeDirectories(packageName, sourceDirectory) {
    const directory = join(resolvePackageRoot(packageName), 'src', sourceDirectory);
    return readdirSync(directory, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && existsSync(join(directory, entry.name, 'index.ts')))
        .map(entry => ({ name: entry.name, directory: join(directory, entry.name) }))
        .sort((left, right) => left.name.localeCompare(right.name));
}

function runtimeDefinition(packageName, runtimeDirectory, options) {
    const indexSource = readFileSync(join(runtimeDirectory.directory, 'index.ts'), 'utf8');
    const entrySource = readFileSync(join(runtimeDirectory.directory, 'entry.ts'), 'utf8');
    const exportNames = [...indexSource.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*)/g)]
        .map(match => match[1])
        .filter(name => name.endsWith(options.exportSuffix));
    const entryId = entrySource.match(/\bid\s*:\s*['"]([^'"]+)['"]/)?.[1];
    if (exportNames.length !== 1 || !entryId) {
        throw new Error(`${packageName}/runtime/${runtimeDirectory.name} has an invalid runtime boundary`);
    }
    const definition = options.entries.find(entry => entry.id === entryId);
    if (!definition) {
        throw new Error(`${packageName}/runtime/${runtimeDirectory.name} is missing from its data registry`);
    }
    return {
        packageName,
        subpath: runtimeDirectory.name,
        exportName: exportNames[0],
        definition: { entry: definition },
    };
}

export function discoverRuntimes(packageName, sourceDirectory, options) {
    const runtimes = runtimeDirectories(packageName, sourceDirectory)
        .map(directory => runtimeDefinition(packageName, directory, options));
    const discoveredEntryIds = new Set(runtimes.map(runtime => runtime.definition.entry.id));
    const missingEntries = options.entries.filter(entry => !discoveredEntryIds.has(entry.id));
    if (missingEntries.length > 0) {
        throw new Error(
            `${packageName} has entries without a valid runtime boundary: ${missingEntries.map(entry => entry.id).join(', ')}`,
        );
    }
    return runtimes;
}

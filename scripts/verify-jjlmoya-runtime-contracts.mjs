import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';

const projectRoot = process.cwd();
const require = createRequire(join(projectRoot, 'package.json'));
const projectPackage = JSON.parse(readFileSync(join(projectRoot, 'package.json'), 'utf8'));
const dependencies = Object.entries(projectPackage.dependencies ?? {})
    .filter(([name]) => name.startsWith('@jjlmoya/'))
    .sort(([left], [right]) => left.localeCompare(right));
const failures = [];
const results = [];

function fail(packageName, message) {
    failures.push({ packageName, message });
}

function packageRoot(packageName) {
    return resolve(dirname(require.resolve(packageName)), '..');
}

function exportTarget(value) {
    if (typeof value === 'string') return value;
    if (!value || typeof value !== 'object') return null;
    for (const condition of ['import', 'default', 'node', 'browser']) {
        const target = exportTarget(value[condition]);
        if (target) return target;
    }
    return null;
}

function verifyExport(packageName, root, exportsMap, subpath) {
    const target = exportTarget(exportsMap?.[subpath]);
    if (!target) {
        fail(packageName, `missing export ${subpath}`);
        return null;
    }
    if (!target.includes('*') && !existsSync(resolve(root, target))) {
        fail(packageName, `${subpath} points to missing file ${target}`);
    }
    return target;
}

function sourceDirectories(root, sourceDirectory) {
    const directory = join(root, 'src', sourceDirectory);
    if (!existsSync(directory)) return [];
    return readdirSync(directory, { withFileTypes: true })
        .filter(entry => entry.isDirectory() && existsSync(join(directory, entry.name, 'index.ts')))
        .map(entry => entry.name)
        .sort();
}

function registeredDirectories(source, sourceDirectory) {
    const pattern = new RegExp(`from\\s+['\"]\\./${sourceDirectory}/([^/'\"]+)/entry['\"]`, 'g');
    return [...source.matchAll(pattern)].map(match => match[1]).sort();
}

function difference(left, right) {
    const rightSet = new Set(right);
    return left.filter(value => !rightSet.has(value));
}

function verifyRuntimeSet({ packageName, root, exportsMap, sourceDirectory, registryFile, suffix }) {
    const runtimeTarget = verifyExport(packageName, root, exportsMap, './runtime/*');
    const registryPath = join(root, 'src', registryFile);
    if (!existsSync(registryPath)) {
        fail(packageName, `missing registry src/${registryFile}`);
        return 0;
    }

    const registrySource = readFileSync(registryPath, 'utf8');
    const runtimes = sourceDirectories(root, sourceDirectory);
    const registered = registeredDirectories(registrySource, sourceDirectory);
    const unregistered = difference(runtimes, registered);
    const missingRuntimes = difference(registered, runtimes);
    if (unregistered.length) fail(packageName, `runtime directories absent from registry: ${unregistered.join(', ')}`);
    if (missingRuntimes.length) fail(packageName, `registered entries without runtime: ${missingRuntimes.join(', ')}`);

    const ids = new Map();
    for (const runtimeName of runtimes) {
        const runtimeDirectory = join(root, 'src', sourceDirectory, runtimeName);
        const indexPath = join(runtimeDirectory, 'index.ts');
        const entryPath = join(runtimeDirectory, 'entry.ts');
        if (!existsSync(entryPath)) {
            fail(packageName, `${sourceDirectory}/${runtimeName} is missing entry.ts`);
            continue;
        }

        const indexSource = readFileSync(indexPath, 'utf8');
        const runtimeExports = [...indexSource.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*)/g)]
            .map(match => match[1])
            .filter(name => name.endsWith(suffix));
        if (runtimeExports.length !== 1) {
            fail(packageName, `${sourceDirectory}/${runtimeName}/index.ts must export exactly one ${suffix}`);
        }

        const entrySource = readFileSync(entryPath, 'utf8');
        const id = entrySource.match(/\bid\s*:\s*['\"]([^'\"]+)['\"]/)?.[1];
        if (!id) {
            fail(packageName, `${sourceDirectory}/${runtimeName}/entry.ts has no static id`);
        } else if (ids.has(id)) {
            fail(packageName, `duplicate id ${id} in ${ids.get(id)} and ${runtimeName}`);
        } else {
            ids.set(id, runtimeName);
        }

        if (runtimeTarget) {
            const target = runtimeTarget.replaceAll('*', runtimeName);
            if (!existsSync(resolve(root, target))) {
                fail(packageName, `runtime/${runtimeName} points to missing file ${target}`);
            }
        }
    }

    return runtimes.length;
}

for (const [packageName, declaredVersion] of dependencies) {
    let root;
    try {
        root = packageRoot(packageName);
    } catch (error) {
        fail(packageName, `cannot resolve installed package: ${error.message}`);
        continue;
    }

    const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
    if (declaredVersion !== packageJson.version) {
        fail(packageName, `declared ${declaredVersion}, installed ${packageJson.version}`);
    }
    if (/^[\^~]/.test(declaredVersion)) fail(packageName, `version is not exact: ${declaredVersion}`);

    if (packageName.startsWith('@jjlmoya/utils-')) {
        verifyExport(packageName, root, packageJson.exports, './data');
        verifyExport(packageName, root, packageJson.exports, './entries');
        verifyExport(packageName, root, packageJson.exports, './category-seo');
        const count = verifyRuntimeSet({
            packageName,
            root,
            exportsMap: packageJson.exports,
            sourceDirectory: 'tool',
            registryFile: 'entries.ts',
            suffix: '_TOOL',
        });
        results.push(`${packageName}@${packageJson.version}: ${count} runtimes`);
        continue;
    }

    if (packageName === '@jjlmoya/apps') {
        verifyExport(packageName, root, packageJson.exports, './data');
        const count = verifyRuntimeSet({
            packageName,
            root,
            exportsMap: packageJson.exports,
            sourceDirectory: 'app',
            registryFile: 'data.ts',
            suffix: '_APP',
        });
        results.push(`${packageName}@${packageJson.version}: ${count} runtimes`);
        continue;
    }

    results.push(`${packageName}@${packageJson.version}: installed`);
}

for (const result of results) console.log(`OK ${result}`);
if (failures.length) {
    console.error(`\n${failures.length} contract failure(s):`);
    for (const { packageName, message } of failures) console.error(`FAIL ${packageName}: ${message}`);
}
console.log(`\nChecked ${dependencies.length} packages; ${failures.length} failure(s).`);
process.exitCode = failures.length ? 1 : 0;

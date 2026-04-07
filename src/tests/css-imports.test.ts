import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { resolve } from 'path';

function getInstalledLibs(): Record<string, string> {
  const pkgPath = resolve('package.json');
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));

  const libs: Record<string, string> = {};
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };

  for (const [libName] of Object.entries(deps)) {
    if (typeof libName === 'string' && libName.startsWith('@jjlmoya/utils-')) {
      const npmPath = resolve(`node_modules/${libName}`);
      if (existsSync(npmPath)) {
        libs[libName] = npmPath;
      }
    }
  }

  return libs;
}

function discoverTools(libPath: string): string[] {
  const toolsDir = resolve(libPath, 'src/tool');
  if (!existsSync(toolsDir)) return [];

  return readdirSync(toolsDir).filter(dir => {
    const componentFile = resolve(toolsDir, dir, 'component.astro');
    return existsSync(componentFile);
  });
}

function testComponentHasNoCssImports(toolName: string, componentPath: string): void {
  it(`${toolName} - must not have CSS imports`, () => {
    const content = readFileSync(componentPath, 'utf-8');
    expect(content).not.toMatch(/import\s+['"][^'"]*\.css['"]/);
  });
}

describe('CSS Imports', () => {
  const libs = getInstalledLibs();

  for (const [libName, libPath] of Object.entries(libs)) {
    const displayName = libName.replace('@jjlmoya/utils-', '');
    const tools = discoverTools(libPath);

    if (tools.length === 0) continue;

    describe(displayName, () => {
      for (const toolName of tools) {
        const componentPath = resolve(libPath, 'src/tool', toolName, 'component.astro');
        testComponentHasNoCssImports(toolName, componentPath);
      }
    });
  }
});

#!/usr/bin/env python3
"""
Script para verificar el status de migración de CSS imports a <style> tags
Lee dinámicamente las librerías instaladas desde package.json
"""

import os
import json
import sys
from pathlib import Path

def get_installed_libs():
    """Lee package.json y obtiene las librerías jjlmoya instaladas"""
    pkg_path = Path("package.json")

    if not pkg_path.exists():
        print(f"Error: No se encontró {pkg_path}")
        sys.exit(1)

    with open(pkg_path, 'r', encoding='utf-8') as f:
        pkg = json.load(f)

    libs = {}
    deps = {**pkg.get('dependencies', {}), **pkg.get('devDependencies', {})}

    for lib_name in sorted(deps.keys()):
        if lib_name.startswith('@jjlmoya/utils-'):
            # Primero intenta versión local en ../
            local_folder = lib_name.replace('@jjlmoya/utils-', 'jjlmoya-utils-')
            local_path = Path("../") / local_folder

            # Si existe localmente, usa eso. Si no, usa node_modules
            if local_path.exists() and (local_path / "src" / "tool").exists():
                libs[lib_name] = local_path.resolve()
            else:
                npm_path = Path("node_modules") / lib_name
                if npm_path.exists() and (npm_path / "src" / "tool").exists():
                    libs[lib_name] = npm_path.resolve()

    return libs

def discover_tools(lib_path):
    """Descubre herramientas en una librería"""
    tools_dir = lib_path / "src" / "tool"

    if not tools_dir.exists():
        return []

    tools = []
    for tool_dir in sorted(os.listdir(tools_dir)):
        component_file = tools_dir / tool_dir / "component.astro"
        if component_file.is_file():
            tools.append(tool_dir)

    return tools

def check_tool_status(component_path):
    """Verifica el status de un componente"""
    if not component_path.exists():
        return "MISS"

    with open(component_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Detectar CUALQUIER import de archivo .css
    has_import = bool(__import__('re').search(r"import\s+['\"]\.\/[^'\"]*\.css['\"]", content))

    # Filter out false positives - if it's importing a component or type, not CSS
    has_style_tag = '<style' in content

    if has_import and '.css' in content:
        # Has CSS import
        if not has_style_tag:
            return "TODO"
        else:
            return "BOTH"
    elif has_style_tag:
        return "OK"
    else:
        return "EMPTY"

def main():
    # Obtener librerías instaladas
    libs = get_installed_libs()

    if not libs:
        print("No se encontraron librerías jjlmoya instaladas")
        sys.exit(1)

    print("=" * 80)
    print("CSS IMPORT STATUS CHECK")
    print("=" * 80)

    total = 0
    ok = 0
    todo = 0
    both = 0
    empty = 0
    miss = 0

    for lib_name in sorted(libs.keys()):
        lib_path = libs[lib_name]
        tools = discover_tools(lib_path)

        if not tools:
            continue

        lib_ok = 0
        lib_todo = 0

        display_name = lib_name.replace("@jjlmoya/utils-", "")
        print(f"\n{display_name}")

        for tool_name in tools:
            component_path = lib_path / "src" / "tool" / tool_name / "component.astro"
            status = check_tool_status(component_path)
            
            if status == "OK":
                symbol = "[OK]"
                lib_ok += 1
                ok += 1
            elif status == "TODO":
                symbol = "[TODO]"
                lib_todo += 1
                todo += 1
            elif status == "BOTH":
                symbol = "[BOTH]"
                both += 1
            elif status == "EMPTY":
                symbol = "[EMPTY]"
                empty += 1
            else:
                symbol = f"[{status}]"
                miss += 1
            
            print(f"  {symbol} {tool_name}")

            total += 1

        print(f"  -> {lib_ok}/{len(tools)} completadas")

    print("\n" + "=" * 80)
    print(f"Total herramientas: {total}")
    print(f"[OK]    Completadas: {ok}")
    print(f"[TODO]  Pendientes:  {todo}")
    print(f"[BOTH]  Duplicados:  {both}")
    print(f"[EMPTY] Sin CSS:     {empty}")
    pct = 100*ok//total if total > 0 else 0
    print(f"Progreso: {ok}/{total} ({pct}%)")
    print("=" * 80)

    # RESUMEN: Solo las que necesitan migración
    print("\nHERRAMIENTAS POR MIGRAR:")
    print("=" * 80)
    for lib_name in sorted(libs.keys()):
        lib_path = libs[lib_name]
        tools = discover_tools(lib_path)
        display_name = lib_name.replace("@jjlmoya/utils-", "")

        pending = []
        for tool_name in tools:
            component_path = lib_path / "src" / "tool" / tool_name / "component.astro"
            status = check_tool_status(component_path)
            if status == "TODO" or status == "BOTH":
                pending.append(tool_name)

        if pending:
            print(f"\n{display_name}: {len(pending)}")
            for tool in pending:
                print(f"  - {tool}")

    print("\n" + "=" * 80)

if __name__ == "__main__":
    main()

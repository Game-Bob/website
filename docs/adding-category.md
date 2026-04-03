# Añadir una nueva categoría de utilidades

## Requisitos previos

El paquete `@jjlmoya/utils-xxx` debe seguir la misma estructura que `utils-bike` o `utils-pets`:
- Exportar `xxxCategory` (entry de la categoría con i18n)
- Exportar `XxxCategorySEO` (componente Astro de SEO)
- Exportar `ALL_TOOLS` (array de `ToolDefinition`)
- Exportar cada tool entry individualmente (`tool1`, `tool2`...)
- Tener i18n con slugs por idioma (`en`, `fr`, `es`)

---

## Pasos

### 1. Instalar el paquete

```json
// package.json
"@jjlmoya/utils-cooking": "^1.0.0"
```

```bash
npm install
```

---

### 2. Añadir el slug de la categoría al router

```ts
// src/i18n/utils.ts — slugMapping
cooking: {
    en: "cooking",
    fr: "cuisine",
    es: "cocina",
},
```

Los slugs deben coincidir con los definidos en el `i18n` del paquete.

---

### 3. Crear el fichero de la categoría

Crear `src/data/utilities/categories/cooking.ts`:

```ts
import { cookingCategory as entry, CookingCategorySEO, ALL_TOOLS as COOKING_TOOLS, tool1, tool2 } from '@jjlmoya/utils-cooking';
import type { CategoryDefinition } from '../types';

export const cooking: CategoryDefinition = {
    key: "cooking",          // debe coincidir con la clave en slugMapping
    entry,
    SEOComponent: CookingCategorySEO,
    theme: "orange",         // clase de tema CSS
    toolsWithColors: [
        { toolEntry: tool1, color: "#f97316" },
        { toolEntry: tool2, color: "#84cc16" },
    ],
    AllTools: COOKING_TOOLS,
};
```

---

### 4. Registrar la categoría

```ts
// src/data/utilities/registry.ts
import { cooking } from './categories/cooking';

export const CATEGORIES: CategoryDefinition[] = [
    bikes,
    pets,
    cooking, // ← añadir aquí
];
```

---

## Eso es todo

El resto es automático:
- Las rutas `/[lang]/utilities/categories/cooking/` y `/[lang]/utilities/categories/cooking/[tool]/` se generan solas
- El traductor de URLs (cambio de idioma) reconoce los nuevos slugs
- La página hub de utilidades muestra la nueva categoría
- `RelatedUtilities` funciona sin cambios

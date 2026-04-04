import { bikes } from './categories/bikes';
import { pets } from './categories/pets';
import { alcohol } from './categories/alcohol';
import type { CategoryDefinition } from './types';

export type { CategoryDefinition };

export const CATEGORIES: CategoryDefinition[] = [
    bikes,
    pets,
    alcohol,
];

export const ALL_TOOL_ENTRIES = CATEGORIES.flatMap(c => c.toolsWithColors.map(t => t.toolEntry));

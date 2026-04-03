import { bikes } from './categories/bikes';
import { pets } from './categories/pets';
import type { CategoryDefinition } from './types';

export type { CategoryDefinition };

export const CATEGORIES: CategoryDefinition[] = [
    bikes,
    pets,
];

export const ALL_TOOL_ENTRIES = CATEGORIES.flatMap(c => c.toolsWithColors.map(t => t.toolEntry));

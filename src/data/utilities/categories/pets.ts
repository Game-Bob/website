import { petsCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-pets';
import type { CategoryDefinition } from '../types';

const categoryColor = "#fbbf24";

export const pets: CategoryDefinition = {
    key: "pets",
    entry,
    theme: "amber",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

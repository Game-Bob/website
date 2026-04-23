import { dronesCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-drones';
import type { CategoryDefinition } from '../types';

const categoryColor = "#10b981";

export const drones: CategoryDefinition = {
    key: "drones",
    entry,
    theme: "sky",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

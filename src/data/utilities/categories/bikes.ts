import { bikeCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-bike';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ef4444";

export const bikes: CategoryDefinition = {
    key: "bikes",
    entry,
    theme: "rose",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

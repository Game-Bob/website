import { chronoCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-chrono';
import type { CategoryDefinition } from '../types';

const categoryColor = "#d97706";

export const chrono: CategoryDefinition = {
    key: "chrono",
    entry,
    theme: "amber",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

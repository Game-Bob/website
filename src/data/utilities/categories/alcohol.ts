import { alcoholCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-alcohol';
import type { CategoryDefinition } from '../types';

const categoryColor = "#f43f5e";

export const alcohol: CategoryDefinition = {
    key: "alcohol",
    entry,
    theme: "amber",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

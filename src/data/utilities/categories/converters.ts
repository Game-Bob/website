import { convertersCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-converters';
import type { CategoryDefinition } from '../types';

const categoryColor = "#06b6d4";

export const converters: CategoryDefinition = {
    key: "converters",
    entry,
    theme: "amber",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

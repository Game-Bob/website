import { nauticalCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-nautical';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0284c7";

export const nautical: CategoryDefinition = {
    key: "nautical",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

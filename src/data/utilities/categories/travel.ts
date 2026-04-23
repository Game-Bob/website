import { travelCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-travel';
import type { CategoryDefinition } from '../types';

const categoryColor = "#14b8a6";

export const travel: CategoryDefinition = {
    key: "travel",
    entry,
    theme: "blue",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

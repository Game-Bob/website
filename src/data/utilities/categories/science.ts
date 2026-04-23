import { scienceCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-science';
import type { CategoryDefinition } from '../types';

const categoryColor = "#06b6d4";

export const science: CategoryDefinition = {
    key: "science",
    entry,
    theme: "violet",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

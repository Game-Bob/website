import { statisticsCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-statistics';
import type { CategoryDefinition } from '../types';

const categoryColor = "#3b82f6";

export const statistics: CategoryDefinition = {
    key: "statistics",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

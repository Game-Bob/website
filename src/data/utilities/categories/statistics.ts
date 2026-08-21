import { statisticsCategory as entry } from '@jjlmoya/utils-statistics/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-statistics/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#3b82f6";

export const statistics: CategoryDefinition = {
    key: "statistics",
    packageName: "@jjlmoya/utils-statistics",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

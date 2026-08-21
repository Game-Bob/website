import { scienceCategory as entry } from '@jjlmoya/utils-science/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-science/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#06b6d4";

export const science: CategoryDefinition = {
    key: "science",
    packageName: "@jjlmoya/utils-science",
    entry,
    theme: "violet",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

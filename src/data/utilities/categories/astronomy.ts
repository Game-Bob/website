import { astronomyCategory as entry } from '@jjlmoya/utils-astronomy/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-astronomy/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6366f1";

export const astronomy: CategoryDefinition = {
    key: "astronomy",
    packageName: "@jjlmoya/utils-astronomy",
    entry,
    theme: "indigo",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

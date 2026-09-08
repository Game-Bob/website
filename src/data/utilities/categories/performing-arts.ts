import { performingArtsCategory as entry } from '@jjlmoya/utils-performing-arts/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-performing-arts/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#10b981";

export const performingArts: CategoryDefinition = {
    key: "performing-arts",
    packageName: "@jjlmoya/utils-performing-arts",
    entry,
    theme: "green",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

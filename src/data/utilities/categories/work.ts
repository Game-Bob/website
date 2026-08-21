import { workCategory as entry } from '@jjlmoya/utils-work/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-work/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#60a5fa";

export const work: CategoryDefinition = {
    key: "work",
    packageName: "@jjlmoya/utils-work",
    entry,
    theme: "blue",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

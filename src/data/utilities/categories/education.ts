import { educationCategory as entry } from '@jjlmoya/utils-education/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-education/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#8b5cf6";

export const education: CategoryDefinition = {
    key: "education",
    packageName: "@jjlmoya/utils-education",
    entry,
    theme: "blue",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

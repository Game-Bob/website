import { socialCategory as entry } from '@jjlmoya/utils-social/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-social/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#3b82f6";

export const social: CategoryDefinition = {
    key: "social",
    packageName: "@jjlmoya/utils-social",
    entry,
    theme: "red",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

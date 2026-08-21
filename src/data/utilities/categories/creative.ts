import { creativeCategory as entry } from '@jjlmoya/utils-creative/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-creative/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#a855f7";

export const creative: CategoryDefinition = {
    key: "creative",
    packageName: "@jjlmoya/utils-creative",
    entry,
    theme: "fuchsia",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

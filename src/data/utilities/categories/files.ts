import { filesCategory as entry } from '@jjlmoya/utils-files/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-files/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6b7280";

export const files: CategoryDefinition = {
    key: "files",
    packageName: "@jjlmoya/utils-files",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

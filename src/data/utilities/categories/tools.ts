import { toolsCategory as entry } from '@jjlmoya/utils-tools/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-tools/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#6b7280";

export const tools: CategoryDefinition = {
    key: "tools",
    packageName: "@jjlmoya/utils-tools",
    entry,
    theme: "violet",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

import { motorCategory as entry } from '@jjlmoya/utils-motor/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-motor/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0f766e";

export const motor: CategoryDefinition = {
    key: "motor",
    packageName: "@jjlmoya/utils-motor",
    entry,
    theme: "cyan",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

import { hardwareCategory as entry } from '@jjlmoya/utils-hardware/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-hardware/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#64748b";

export const hardware: CategoryDefinition = {
    key: "hardware",
    packageName: "@jjlmoya/utils-hardware",
    entry,
    theme: "slate",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

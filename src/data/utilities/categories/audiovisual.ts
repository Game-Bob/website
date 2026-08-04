import { audiovisualCategory as entry } from '@jjlmoya/utils-audiovisual/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-audiovisual/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ec4899";

export const audiovisual: CategoryDefinition = {
    key: "audiovisual",
    packageName: "@jjlmoya/utils-audiovisual",
    entry,
    theme: "violet",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

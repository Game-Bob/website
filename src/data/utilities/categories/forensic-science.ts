import { forensicCategory as entry } from '@jjlmoya/utils-forensic-science/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-forensic-science/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#7c3aed";

export const forensicScience: CategoryDefinition = {
    key: "forensic-science",
    packageName: "@jjlmoya/utils-forensic-science",
    entry,
    theme: "violet",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

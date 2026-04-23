import { audiovisualCategory as entry, ALL_TOOLS } from '@jjlmoya/utils-audiovisual';
import type { CategoryDefinition } from '../types';

const categoryColor = "#ec4899";

export const audiovisual: CategoryDefinition = {
    key: "audiovisual",
    entry,
    theme: "violet",
    toolsWithColors: ALL_TOOLS.map(tool => ({ toolEntry: tool.entry, color: categoryColor })),
};

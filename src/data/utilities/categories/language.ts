import { languageCategory as entry } from '@jjlmoya/utils-language/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-language/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#0f766e";

export const language: CategoryDefinition = {
    key: "language",
    packageName: "@jjlmoya/utils-language",
    entry,
    theme: "teal",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

import { gamesCategory as entry } from '@jjlmoya/utils-games-development/data';
import { ALL_ENTRIES } from '@jjlmoya/utils-games-development/entries';
import type { CategoryDefinition } from '../types';

const categoryColor = "#8b5cf6";

export const gamesDevelopment: CategoryDefinition = {
    key: "games-development",
    packageName: "@jjlmoya/utils-games-development",
    entry,
    theme: "purple",
    toolsWithColors: ALL_ENTRIES.map(toolEntry => ({ toolEntry, color: categoryColor })),
};

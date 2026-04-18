import { gamesCategory as entry, TYPING_TEST_TOOL } from '@jjlmoya/utils-games';
import type { CategoryDefinition } from '../types';

export const games: CategoryDefinition = {
    key: "games",
    entry,
    theme: "purple",
    toolsWithColors: [
        { toolEntry: TYPING_TEST_TOOL.entry, color: "#a855f7" },
    ],
};

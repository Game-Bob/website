import { gamesCategory as entry, GamesCategorySEO as SEOComponent, ALL_TOOLS as GAMES_TOOLS, TYPING_TEST_TOOL } from '@jjlmoya/utils-games';
import type { CategoryDefinition } from '../types';

export const games: CategoryDefinition = {
    key: "games",
    entry,
    SEOComponent,
    theme: "purple",
    toolsWithColors: [
        { toolEntry: TYPING_TEST_TOOL.entry, color: "#a855f7" },
    ],
    AllTools: GAMES_TOOLS,
};

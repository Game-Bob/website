import { creativeCategory, creativeCategorySEO, excuseGenerator, fortuneCookie, synesthesiaPainter, zalgoGenerator, beadPatternGenerator, diceRoller, ALL_TOOLS as CREATIVE_TOOLS } from '@jjlmoya/utils-creative';
import type { CategoryDefinition } from '../types';

export const creative: CategoryDefinition = {
    key: "creative",
    entry: creativeCategory,
    SEOComponent: creativeCategorySEO,
    theme: "fuchsia",
    toolsWithColors: [
        { toolEntry: excuseGenerator, color: "#d946ef" },
        { toolEntry: fortuneCookie, color: "#c026d3" },
        { toolEntry: synesthesiaPainter, color: "#a21caf" },
        { toolEntry: zalgoGenerator, color: "#86198f" },
        { toolEntry: beadPatternGenerator, color: "#701c9a" },
        { toolEntry: diceRoller, color: "#581c87" },
    ],
    AllTools: CREATIVE_TOOLS,
};

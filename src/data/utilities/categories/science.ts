import { scienceCategory as entry, ScienceCategorySEO, ALL_TOOLS as SCIENCE_TOOLS, COLONY_COUNTER_TOOL, ASTEROID_IMPACT_TOOL, MICROWAVE_DETECTOR_TOOL, SIMULATION_PROBABILITY_TOOL, CELLULAR_RENEWAL_TOOL } from '@jjlmoya/utils-science';
import type { CategoryDefinition } from '../types';

export const science: CategoryDefinition = {
    key: "science",
    entry,
    SEOComponent: ScienceCategorySEO,
    theme: "violet",
    toolsWithColors: [
        { toolEntry: COLONY_COUNTER_TOOL.entry, color: "#8b5cf6" },
        { toolEntry: ASTEROID_IMPACT_TOOL.entry, color: "#a78bfa" },
        { toolEntry: MICROWAVE_DETECTOR_TOOL.entry, color: "#c4b5fd" },
        { toolEntry: SIMULATION_PROBABILITY_TOOL.entry, color: "#ddd6fe" },
        { toolEntry: CELLULAR_RENEWAL_TOOL.entry, color: "#ede9fe" },
    ],
    AllTools: SCIENCE_TOOLS,
};

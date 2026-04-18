import { educationCategory as entry, WEIGHTED_GRADE_CALCULATOR_TOOL, CITATION_GENERATOR_TOOL } from '@jjlmoya/utils-education';
import type { CategoryDefinition } from '../types';

export const education: CategoryDefinition = {
    key: "education",
    entry,
    theme: "blue",
    toolsWithColors: [
        { toolEntry: WEIGHTED_GRADE_CALCULATOR_TOOL.entry, color: "#3b82f6" },
        { toolEntry: CITATION_GENERATOR_TOOL.entry, color: "#60a5fa" },
    ],
};

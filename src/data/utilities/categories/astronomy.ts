import { astronomyCategory as entry, bortleVisualizer, deepSpaceScope, starExposureCalculator, telescopeResolution } from '@jjlmoya/utils-astronomy';
import type { CategoryDefinition } from '../types';

export const astronomy: CategoryDefinition = {
    key: "astronomy",
    entry,
    theme: "indigo",
    toolsWithColors: [
        { toolEntry: bortleVisualizer, color: "#6366f1" },
        { toolEntry: deepSpaceScope, color: "#8b5cf6" },
        { toolEntry: starExposureCalculator, color: "#0ea5e9" },
        { toolEntry: telescopeResolution, color: "#10b981" },
    ],
};

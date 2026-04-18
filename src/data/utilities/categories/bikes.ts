import { bikeCategory, fixedGear, spokeCalculator, gearCalculator } from '@jjlmoya/utils-bike';
import type { CategoryDefinition } from '../types';

export const bikes: CategoryDefinition = {
    key: "bikes",
    entry: bikeCategory,
    theme: "rose",
    toolsWithColors: [
        { toolEntry: fixedGear, color: "#ef4444" },
        { toolEntry: spokeCalculator, color: "#6366f1" },
        { toolEntry: gearCalculator, color: "#10b981" },
    ],
};

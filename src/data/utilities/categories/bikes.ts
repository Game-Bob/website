import { bikeCategory, BikeCategorySEO, ALL_TOOLS as BIKE_TOOLS, fixedGear, spokeCalculator, gearCalculator } from '@jjlmoya/utils-bike';
import type { CategoryDefinition } from '../types';

export const bikes: CategoryDefinition = {
    key: "bikes",
    entry: bikeCategory,
    SEOComponent: BikeCategorySEO,
    theme: "rose",
    toolsWithColors: [
        { toolEntry: fixedGear, color: "#ef4444" },
        { toolEntry: spokeCalculator, color: "#6366f1" },
        { toolEntry: gearCalculator, color: "#10b981" },
    ],
    AllTools: BIKE_TOOLS,
};

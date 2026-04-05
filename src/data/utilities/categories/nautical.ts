import { nauticalCategory, NauticalCategorySEO, tideCalculator, underKeel, nauticalConverter, sailArea, speedConverter, endurance, ALL_TOOLS as NAUTICAL_TOOLS } from '@jjlmoya/utils-nautical';
import type { CategoryDefinition } from '../types';

export const nautical: CategoryDefinition = {
    key: "nautical",
    entry: nauticalCategory,
    SEOComponent: NauticalCategorySEO,
    theme: "cyan",
    toolsWithColors: [
        { toolEntry: tideCalculator, color: "#06b6d4" },
        { toolEntry: underKeel, color: "#0891b2" },
        { toolEntry: nauticalConverter, color: "#0e7490" },
        { toolEntry: sailArea, color: "#164e63" },
        { toolEntry: speedConverter, color: "#083344" },
        { toolEntry: endurance, color: "#067e8a" },
    ],
    AllTools: NAUTICAL_TOOLS,
};

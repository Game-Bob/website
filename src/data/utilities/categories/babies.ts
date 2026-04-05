import { babiesCategory, babiesCategorySEO, babyFeedingCalculator, babySizeConverter, babyPercentileCalculator, fertileDaysEstimator, pregnancyCalculator, vaccinationCalendar, ALL_TOOLS as BABIES_TOOLS } from '@jjlmoya/utils-babies';
import type { CategoryDefinition } from '../types';

export const babies: CategoryDefinition = {
    key: "babies",
    entry: babiesCategory,
    SEOComponent: babiesCategorySEO,
    theme: "pink",
    toolsWithColors: [
        { toolEntry: babyFeedingCalculator, color: "#ec4899" },
        { toolEntry: babySizeConverter, color: "#f472b6" },
        { toolEntry: babyPercentileCalculator, color: "#fbcfe8" },
        { toolEntry: fertileDaysEstimator, color: "#be123c" },
        { toolEntry: pregnancyCalculator, color: "#db2777" },
        { toolEntry: vaccinationCalendar, color: "#be185d" },
    ],
    AllTools: BABIES_TOOLS,
};

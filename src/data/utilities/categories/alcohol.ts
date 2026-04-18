import { alcoholCategory as entry, cocktailBalancer, beerCooler, partyKeg, carbonationCalculator, alcoholClearance } from '@jjlmoya/utils-alcohol';
import type { CategoryDefinition } from '../types';

export const alcohol: CategoryDefinition = {
    key: "alcohol",
    entry,
    theme: "amber",
    toolsWithColors: [
        { toolEntry: cocktailBalancer, color: "#f43f5e" },
        { toolEntry: beerCooler, color: "#3b82f6" },
        { toolEntry: partyKeg, color: "#f59e0b" },
        { toolEntry: carbonationCalculator, color: "#10b981" },
        { toolEntry: alcoholClearance, color: "#8b5cf6" },
    ],
};

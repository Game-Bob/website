import { travelCategory as entry, LUGGAGE_CALCULATOR_TOOL, TIP_CALCULATOR_TOOL, SUITCASE_CHECKLIST_TOOL, MINI_ADVENTURES_TOOL } from '@jjlmoya/utils-travel';
import type { CategoryDefinition } from '../types';

export const travel: CategoryDefinition = {
    key: "travel",
    entry,
    theme: "blue",
    toolsWithColors: [
        { toolEntry: LUGGAGE_CALCULATOR_TOOL.entry, color: "#3b82f6" },
        { toolEntry: TIP_CALCULATOR_TOOL.entry, color: "#06b6d4" },
        { toolEntry: SUITCASE_CHECKLIST_TOOL.entry, color: "#8b5cf6" },
        { toolEntry: MINI_ADVENTURES_TOOL.entry, color: "#f59e0b" },
    ],
};

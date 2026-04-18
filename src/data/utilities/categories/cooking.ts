import { cookingCategory as entry, AMERICAN_KITCHEN_CONVERTER_TOOL, MERENGUE_CALCULATOR_TOOL, BANANA_CARE_TOOL, EGG_TIMER_TOOL, KITCHEN_TIMER_TOOL, PIZZA_TOOL, BRINE_TOOL, MOLD_SCALER_TOOL, INGREDIENT_RESCALER_TOOL, SOURDOUGH_CALCULATOR_TOOL, ROUX_GUIDE_TOOL, COOKWARE_GUIDE_TOOL } from '@jjlmoya/utils-cooking';
import type { CategoryDefinition } from '../types';

export const cooking: CategoryDefinition = {
    key: "cooking",
    entry,
    theme: "orange",
    toolsWithColors: [
        { toolEntry: AMERICAN_KITCHEN_CONVERTER_TOOL.entry, color: "#f97316" },
        { toolEntry: MERENGUE_CALCULATOR_TOOL.entry, color: "#fb923c" },
        { toolEntry: BANANA_CARE_TOOL.entry, color: "#fdba74" },
        { toolEntry: EGG_TIMER_TOOL.entry, color: "#fed7aa" },
        { toolEntry: KITCHEN_TIMER_TOOL.entry, color: "#fecaca" },
        { toolEntry: PIZZA_TOOL.entry, color: "#fca5a5" },
        { toolEntry: BRINE_TOOL.entry, color: "#f87171" },
        { toolEntry: MOLD_SCALER_TOOL.entry, color: "#ef4444" },
        { toolEntry: INGREDIENT_RESCALER_TOOL.entry, color: "#dc2626" },
        { toolEntry: SOURDOUGH_CALCULATOR_TOOL.entry, color: "#b91c1c" },
        { toolEntry: ROUX_GUIDE_TOOL.entry, color: "#991b1b" },
        { toolEntry: COOKWARE_GUIDE_TOOL.entry, color: "#7c2d12" },
    ],
} as const;

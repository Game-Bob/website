import { socialCategory as entry, ALL_TOOLS as SOCIAL_TOOLS } from '@jjlmoya/utils-social';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    "#e11d48",
    "#f59e0b",
    "#06b6d4",
    "#8b5cf6",
    "#f97316",
    "#10b981",
    "#3b82f6",
];

export const social: CategoryDefinition = {
    key: "social",
    entry,
    theme: "red",
    toolsWithColors: SOCIAL_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? "#e11d48" })),
};

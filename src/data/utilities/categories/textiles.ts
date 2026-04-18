import { textilesCategory as entry, ALL_TOOLS as TEXTILES_TOOLS } from '@jjlmoya/utils-textiles';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    "#8b5cf6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#ec4899",
    "#3b82f6",
    "#6366f1",
    "#f97316",
    "#14b8a6",
    "#a855f7",
    "#64748b",
    "#e11d48",
];

export const textiles: CategoryDefinition = {
    key: "textiles",
    entry,
    theme: "purple",
    toolsWithColors: TEXTILES_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? "#8b5cf6" })),
};

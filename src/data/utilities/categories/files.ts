import { filesCategory as entry, filesCategorySEO as SEOComponent, ALL_TOOLS as FILES_TOOLS } from '@jjlmoya/utils-files';
import type { CategoryDefinition } from '../types';

const TOOL_COLORS = [
    "#06b6d4",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#3b82f6",
    "#f97316",
    "#6366f1",
    "#ec4899",
];

export const files: CategoryDefinition = {
    key: "files",
    entry,
    SEOComponent,
    theme: "cyan",
    toolsWithColors: FILES_TOOLS.map((tool, i) => ({ toolEntry: tool.entry, color: TOOL_COLORS[i] ?? "#06b6d4" })),
    AllTools: FILES_TOOLS,
};

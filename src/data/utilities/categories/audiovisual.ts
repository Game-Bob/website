import { audiovisualCategory, audiovisualCategorySEO, timelapseCalculator, exifCleaner, subtitleSync, chromaticLens, printQualityCalculator, tvDistance, imageCompressor, collageMaker, videoFrameExtractor, privacyBlur, ALL_TOOLS as AUDIOVISUAL_TOOLS } from '@jjlmoya/utils-audiovisual';
import type { CategoryDefinition } from '../types';

export const audiovisual: CategoryDefinition = {
    key: "audiovisual",
    entry: audiovisualCategory,
    SEOComponent: audiovisualCategorySEO,
    theme: "violet",
    toolsWithColors: [
        { toolEntry: timelapseCalculator, color: "#8b5cf6" },
        { toolEntry: exifCleaner, color: "#6366f1" },
        { toolEntry: subtitleSync, color: "#ec4899" },
        { toolEntry: chromaticLens, color: "#f59e0b" },
        { toolEntry: printQualityCalculator, color: "#10b981" },
        { toolEntry: tvDistance, color: "#3b82f6" },
        { toolEntry: imageCompressor, color: "#ef4444" },
        { toolEntry: collageMaker, color: "#06b6d4" },
        { toolEntry: videoFrameExtractor, color: "#84cc16" },
        { toolEntry: privacyBlur, color: "#14b8a6" },
    ],
    AllTools: AUDIOVISUAL_TOOLS,
};

import { convertersCategory, pngAJpg, jpgAPng, webpAPng, webpAJpg, pngAWebp, jpgAWebp, svgAPng, svgAJpg, imagenBase64, bmpAJpg, bmpAPng, bmpAWebp, avifAJpg, avifAPng, avifAWebp, gifAJpg, gifAPng, gifAWebp, pngAIco, jpgAIco, webpAIco } from '@jjlmoya/utils-converters';
import type { CategoryDefinition } from '../types';

export const converters: CategoryDefinition = {
    key: "converters",
    entry: convertersCategory,
    theme: "amber",
    toolsWithColors: [
        { toolEntry: pngAJpg, color: "#f59e0b" },
        { toolEntry: jpgAPng, color: "#d97706" },
        { toolEntry: webpAPng, color: "#92400e" },
        { toolEntry: webpAJpg, color: "#f97316" },
        { toolEntry: pngAWebp, color: "#fb923c" },
        { toolEntry: jpgAWebp, color: "#fbbf24" },
        { toolEntry: svgAPng, color: "#fcd34d" },
        { toolEntry: svgAJpg, color: "#fde68a" },
        { toolEntry: imagenBase64, color: "#fed7aa" },
        { toolEntry: bmpAJpg, color: "#fef3c7" },
        { toolEntry: bmpAPng, color: "#fef08a" },
        { toolEntry: bmpAWebp, color: "#fce7f3" },
        { toolEntry: avifAJpg, color: "#f0fdf4" },
        { toolEntry: avifAPng, color: "#dcfce7" },
        { toolEntry: avifAWebp, color: "#bbf7d0" },
        { toolEntry: gifAJpg, color: "#86efac" },
        { toolEntry: gifAPng, color: "#4ade80" },
        { toolEntry: gifAWebp, color: "#22c55e" },
        { toolEntry: pngAIco, color: "#16a34a" },
        { toolEntry: jpgAIco, color: "#15803d" },
        { toolEntry: webpAIco, color: "#166534" },
    ],
};

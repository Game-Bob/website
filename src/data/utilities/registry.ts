import { bikes } from './categories/bikes';
import { pets } from './categories/pets';
import { alcohol } from './categories/alcohol';
import { astronomy } from './categories/astronomy';
import { audiovisual } from './categories/audiovisual';
import { babies } from './categories/babies';
import { converters } from './categories/converters';
import { creative } from './categories/creative';
import { drones } from './categories/drones';
import { nautical } from './categories/nautical';
import type { CategoryDefinition } from './types';

export type { CategoryDefinition };

export const CATEGORIES: CategoryDefinition[] = [
    bikes,
    pets,
    alcohol,
    astronomy,
    audiovisual,
    babies,
    converters,
    creative,
    drones,
    nautical,
];

export const ALL_TOOL_ENTRIES = CATEGORIES.flatMap(c => c.toolsWithColors.map(t => t.toolEntry));

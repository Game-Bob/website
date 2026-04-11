import { bikes } from './categories/bikes';
import { pets } from './categories/pets';
import { alcohol } from './categories/alcohol';
import { astronomy } from './categories/astronomy';
import { audiovisual } from './categories/audiovisual';
import { babies } from './categories/babies';
import { converters } from './categories/converters';
import { cooking } from './categories/cooking';
import { creative } from './categories/creative';
import { drones } from './categories/drones';
import { education } from './categories/education';
import { games } from './categories/games';
import { nautical } from './categories/nautical';
import { science } from './categories/science';
import { travel } from './categories/travel';
import { textiles } from './categories/textiles';
import { home } from './categories/home';
import { files } from './categories/files';
import { social } from './categories/social';
import { music } from './categories/music';
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
    cooking,
    creative,
    drones,
    education,
    games,
    nautical,
    science,
    travel,
    textiles,
    home,
    files,
    social,
    music,
];

export const ALL_TOOL_ENTRIES = CATEGORIES.flatMap(c => c.toolsWithColors.map(t => t.toolEntry));

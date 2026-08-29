import { bikes } from './categories/bikes';
import { pets } from './categories/pets';
import { alcohol } from './categories/alcohol';
import { aquarium } from './categories/aquarium';
import { astronomy } from './categories/astronomy';
import { audiovisual } from './categories/audiovisual';
import { babies } from './categories/babies';
import { converters } from './categories/converters';
import { cooking } from './categories/cooking';
import { creative } from './categories/creative';
import { drones } from './categories/drones';
import { education } from './categories/education';
import { games } from './categories/games';
import { gamesDevelopment } from './categories/games-development';
import { nautical } from './categories/nautical';
import { science } from './categories/science';
import { travel } from './categories/travel';
import { textiles } from './categories/textiles';
import { home } from './categories/home';
import { files } from './categories/files';
import { social } from './categories/social';
import { music } from './categories/music';
import { health } from './categories/health';
import { sports } from './categories/sports';
import { motor } from './categories/motor';
import { nature } from './categories/nature';
import { developer } from './categories/developer';
import { hardware } from './categories/hardware';
import { coffee } from './categories/coffee';
import { printing3d } from './categories/printing3d';
import { streaming } from './categories/streaming';
import { finance } from './categories/finance';
import { statistics } from './categories/statistics';
import { diy } from './categories/diy';
import { work } from './categories/work';
import { tools } from './categories/tools';
import { chrono } from './categories/chrono';
import { tabletop } from './categories/tabletop';
import { books } from './categories/books';
import { forensicScience } from './categories/forensic-science';
import type { CategoryDefinition } from './types';

export type { CategoryDefinition };

export const CATEGORIES: CategoryDefinition[] = [
    bikes,
    pets,
    alcohol,
    aquarium,
    astronomy,
    audiovisual,
    babies,
    converters,
    cooking,
    creative,
    drones,
    education,
    games,
    gamesDevelopment,
    nautical,
    science,
    travel,
    textiles,
    home,
    files,
    social,
    music,
    health,
    sports,
    motor,
    nature,
    developer,
    hardware,
    coffee,
    printing3d,
    streaming,
    finance,
    statistics,
    diy,
    work,
    tools,
    chrono,
    tabletop,
    books,
    forensicScience,
];

export const INDEXABLE_CATEGORIES = CATEGORIES.filter(({ noindex }) => !noindex);

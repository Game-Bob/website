import { dronesCategory as entry, DronesCategorySEO, ALL_TOOLS as DRONES_TOOLS, DRONE_FLIGHT_TIME_TOOL, ANTENNA_LENGTH_CALCULATOR_TOOL, GPS_COORDINATES_CONVERTER_TOOL } from '@jjlmoya/utils-drones';
import type { CategoryDefinition } from '../types';

export const drones: CategoryDefinition = {
    key: "drones",
    entry,
    SEOComponent: DronesCategorySEO,
    theme: "sky",
    toolsWithColors: [
        { toolEntry: DRONE_FLIGHT_TIME_TOOL.entry, color: "#0ea5e9" },
        { toolEntry: ANTENNA_LENGTH_CALCULATOR_TOOL.entry, color: "#06b6d4" },
        { toolEntry: GPS_COORDINATES_CONVERTER_TOOL.entry, color: "#14b8a6" },
    ],
    AllTools: DRONES_TOOLS,
};

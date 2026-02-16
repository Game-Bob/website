export const SITE_CONFIG = {
    dev: {
        url: 'http://localhost:4321',
        name: 'GameBob Studio (Dev)'
    },
    prod: {
        url: 'https://www.gamebob.dev',
        name: 'GameBob Studio'
    }
} as const;

export const CURRENT_ENV = import.meta.env.PROD ? 'prod' : 'dev';
export const SITE_URL = SITE_CONFIG[CURRENT_ENV].url;
export const SITE_NAME = SITE_CONFIG[CURRENT_ENV].name;

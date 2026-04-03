import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
    },
    plugins: [
        {
            name: 'astro-loader',
            resolveId(id) {
                if (id.endsWith('.astro')) {
                    return id;
                }
            },
            load(id) {
                if (id.endsWith('.astro')) {
                    return 'export default {};';
                }
            },
        },
    ],
});

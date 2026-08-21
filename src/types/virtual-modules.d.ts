declare module 'virtual:gamebob-language-route-manifest' {
    const manifest: {
        routes: Record<string, number>;
        groups: Array<Array<{ lang: string; url: string }>>;
    };
    export default manifest;
}

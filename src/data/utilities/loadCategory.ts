const loaders = import.meta.glob('./loaders/*.ts');

export async function loadCategoryComponents(catKey: string): Promise<{ AllTools: any[]; CategorySEO: any }> {
    const loader = loaders[`./loaders/${catKey}.ts`];
    if (!loader) throw new Error(`No component loader for category: ${catKey}`);
    return loader() as Promise<{ AllTools: any[]; CategorySEO: any }>;
}

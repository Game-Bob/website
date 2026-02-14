const GITHUB_REPO_BASE = "https://github.com/Game-Bob/website";

export function getGitHubUrls(mechanicId: string) {
    return {
        repo: `${GITHUB_REPO_BASE}/tree/main/src/lib/mechanics/${mechanicId}`,
        code: `${GITHUB_REPO_BASE}/blob/main/src/lib/mechanics/${mechanicId}/${getMechanicFileName(mechanicId)}`
    };
}

function getMechanicFileName(mechanicId: string): string {
    const words = mechanicId.split('-');
    const className = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    return `${className}Mechanic.ts`;
}

export const GITHUB_REPO = GITHUB_REPO_BASE;

/** Team member pages live at /en/roosevelt, /en/ops, etc. */
export const TEAM_PAGES = [
    { id: 'roosevelt', path: 'roosevelt' },
    { id: 'ops', path: 'ops' },
    { id: 'community', path: 'community-lead' },
    { id: 'engineering', path: 'engineering' },
    { id: 'design', path: 'design' },
] as const;

export type TeamMemberId = (typeof TEAM_PAGES)[number]['id'];
export type TeamPath = (typeof TEAM_PAGES)[number]['path'];

export const TEAM_PATHS = TEAM_PAGES.map((p) => p.path);

export const TEAM_LOCALES = ['en', 'es'] as const;

export const FIRST_TEAM_MEMBER_ID = TEAM_PAGES[0].id;

export function isTeamPath(path: string): path is TeamPath {
    return (TEAM_PATHS as readonly string[]).includes(path);
}

export function memberIdFromPath(path: string): TeamMemberId | undefined {
    return TEAM_PAGES.find((p) => p.path === path)?.id;
}

export function pathFromMemberId(id: string): TeamPath | undefined {
    return TEAM_PAGES.find((p) => p.id === id)?.path;
}

export function getAdjacentPaths(currentPath: string): { prev: string; next: string } {
    const idx = TEAM_PAGES.findIndex((p) => p.path === currentPath);
    if (idx < 0) {
        const first = TEAM_PAGES[0].path;
        return { prev: first, next: first };
    }
    const prev = TEAM_PAGES[(idx - 1 + TEAM_PAGES.length) % TEAM_PAGES.length].path;
    const next = TEAM_PAGES[(idx + 1) % TEAM_PAGES.length].path;
    return { prev: `/${prev}`, next: `/${next}` };
}

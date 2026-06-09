import { isTeamMemberId } from '@/lib/team-member-ids';

/** Read the team member slug from a browser pathname (e.g. /en/team/roosevelt). */
export function getTeamMemberSlugFromPath(pathname: string): string | undefined {
    const segments = pathname.split('/').filter(Boolean);
    const teamIndex = segments.indexOf('team');
    if (teamIndex < 0) return undefined;

    const slug = segments[teamIndex + 1];
    return slug && isTeamMemberId(slug) ? slug : undefined;
}

/** Update the URL to /team/{slug} without triggering a Next.js navigation. */
export function setTeamMemberUrl(slug: string): void {
    if (typeof window === 'undefined') return;

    const { pathname, search, hash } = window.location;
    const nextPath = pathname.match(/\/team(\/[^/]+)?$/)
        ? pathname.replace(/\/team(\/[^/]+)?$/, `/team/${slug}`)
        : `${pathname.replace(/\/$/, '')}/team/${slug}`;

    if (pathname !== nextPath) {
        window.history.pushState({ teamMember: slug }, '', `${nextPath}${search}${hash}`);
    }
}

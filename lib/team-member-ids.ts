export const TEAM_MEMBER_IDS = [
    'roosevelt',
    'ops',
    'community',
    'engineering',
    'design',
] as const;

export type TeamMemberId = (typeof TEAM_MEMBER_IDS)[number];

export function isTeamMemberId(id: string): id is TeamMemberId {
    return (TEAM_MEMBER_IDS as readonly string[]).includes(id);
}

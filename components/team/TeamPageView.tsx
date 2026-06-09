'use client';

import { TeamProfileView } from '@/components/team/TeamProfileView';
import { FIRST_TEAM_MEMBER_ID } from '@/lib/team-slugs';

/** Main team page at /team — shows the first team member. */
export function TeamPageView() {
    return <TeamProfileView memberId={FIRST_TEAM_MEMBER_ID} />;
}

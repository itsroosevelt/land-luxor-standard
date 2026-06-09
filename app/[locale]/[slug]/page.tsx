'use client';

import { notFound, useParams } from 'next/navigation';
import { TeamProfileView } from '@/components/team/TeamProfileView';
import { isTeamPath, memberIdFromPath, TEAM_LOCALES } from '@/lib/team-slugs';

export default function TeamMemberRoute() {
    const { locale, slug } = useParams<{ locale: string; slug: string }>();

    if (!TEAM_LOCALES.includes(locale as (typeof TEAM_LOCALES)[number])) {
        notFound();
    }

    if (!isTeamPath(slug)) {
        notFound();
    }

    const memberId = memberIdFromPath(slug);
    if (!memberId) {
        notFound();
    }

    return <TeamProfileView memberId={memberId} />;
}

'use client';

import { notFound, useParams } from 'next/navigation';
import { isTeamPath, TEAM_LOCALES } from '@/lib/team-slugs';
import ComingSoonPage from '../coming-soon/page';

export default function TeamMemberRoute() {
    const { locale, slug } = useParams<{ locale: string; slug: string }>();

    if (!TEAM_LOCALES.includes(locale as (typeof TEAM_LOCALES)[number])) {
        notFound();
    }

    if (!isTeamPath(slug)) {
        notFound();
    }

    return <ComingSoonPage />;
}



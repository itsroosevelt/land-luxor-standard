'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { TeamPageView } from '@/components/team/TeamPageView';
import { TEAM_LOCALES } from '@/lib/team-slugs';

export default function TeamPage() {
    const { locale } = useParams<{ locale: string }>();

    if (!TEAM_LOCALES.includes(locale as (typeof TEAM_LOCALES)[number])) {
        notFound();
    }

    return <TeamPageView />;
}

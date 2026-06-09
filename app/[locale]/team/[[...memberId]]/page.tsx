import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { TeamPageView } from '@/components/team/TeamPageView';
import { TeamMemberItem } from '@/components/team/TeamPlaylist';
import { isTeamMemberId, TEAM_MEMBER_IDS } from '@/lib/team-member-ids';

interface Props {
    params: Promise<{ memberId?: string[]; locale: string }>;
}

export function generateStaticParams() {
    const params: { locale: string; memberId?: string[] }[] = [];

    for (const locale of routing.locales) {
        params.push({ locale });
        for (const memberId of TEAM_MEMBER_IDS) {
            params.push({ locale, memberId: [memberId] });
        }
    }

    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { memberId, locale } = await params;
    const slug = memberId?.[0];
    const t = await getTranslations({ locale, namespace: 'TeamPage' });

    if (!slug) {
        return {
            title: 'Team - Luxor',
            description: t('tagline'),
        };
    }

    if (!isTeamMemberId(slug)) {
        return { title: 'Team - Luxor' };
    }

    const members = t.raw('members') as TeamMemberItem[];
    const member = members.find((m) => m.id === slug);

    if (!member) {
        return { title: 'Team - Luxor' };
    }

    const title = `${member.name} - Luxor Team`;
    const description = member.description;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'profile',
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
    };
}

export default async function TeamPage({ params }: Props) {
    const { memberId } = await params;
    const slug = memberId?.[0];

    if (slug && !isTeamMemberId(slug)) {
        notFound();
    }

    return <TeamPageView memberId={slug} />;
}

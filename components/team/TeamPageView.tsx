'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { TeamPlaylist, TeamMemberItem } from '@/components/team/TeamPlaylist';
import { getTeamMemberSlugFromPath, setTeamMemberUrl } from '@/lib/team-url';

interface TeamPageViewProps {
    memberId?: string;
}

function indexFromMemberId(members: TeamMemberItem[], memberId?: string) {
    if (!memberId) return 0;
    const idx = members.findIndex((m) => m.id === memberId);
    return idx >= 0 ? idx : 0;
}

export function TeamPageView({ memberId }: TeamPageViewProps) {
    const t = useTranslations('TeamPage');
    const members = t.raw('members') as TeamMemberItem[];
    const [activeIdx, setActiveIdx] = useState(() => indexFromMemberId(members, memberId));
    const activeMember = members[activeIdx] ?? members[0];

    // Sync when landing on a direct link (/team/roosevelt) or using browser back/forward.
    useEffect(() => {
        setActiveIdx(indexFromMemberId(members, memberId));
    }, [memberId]);

    useEffect(() => {
        const onPopState = () => {
            const slug = getTeamMemberSlugFromPath(window.location.pathname);
            setActiveIdx(indexFromMemberId(members, slug));
        };

        window.addEventListener('popstate', onPopState);
        return () => window.removeEventListener('popstate', onPopState);
    }, [members]);

    const handleActiveIdxChange = useCallback(
        (idx: number) => {
            setActiveIdx(idx);
            const slug = members[idx]?.id;
            if (slug) {
                setTeamMemberUrl(slug);
            }
        },
        [members]
    );

    return (
        <div className="min-h-screen bg-black pt-20 sm:pt-24 pb-24 overflow-x-hidden">
            <div className="w-full px-4 sm:px-6 mb-16 sm:mb-20 md:mb-24 text-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={activeMember?.id ?? 'team-name'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight"
                    >
                        {activeMember?.name}
                    </motion.h1>
                </AnimatePresence>
            </div>

            <TeamPlaylist
                members={members}
                tagline={t('tagline')}
                activeIdx={activeIdx}
                onActiveIdxChange={handleActiveIdxChange}
            />
        </div>
    );
}

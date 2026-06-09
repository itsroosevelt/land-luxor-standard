'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { TeamMemberItem } from '@/components/team/types';
import { getAdjacentPaths, pathFromMemberId } from '@/lib/team-slugs';

interface TeamProfileViewProps {
    memberId: string;
}

function MemberVisual({ member }: { member: TeamMemberItem }) {
    const from = member.accentFrom ?? '#1d4ed8';
    const to = member.accentTo ?? '#3b82f6';

    if (member.image) {
        return (
            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 840px) 90vw, 840px"
            />
        );
    }

    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 55%, #1a1a1a 100%)` }}
        >
            <span className="text-[80px] sm:text-[120px] font-bold text-white/10 select-none">
                {member.initials}
            </span>
        </div>
    );
}

function ProfileCard({ member, showPlay }: { member: TeamMemberItem; showPlay: boolean }) {
    return (
        <div className="relative w-full max-w-[840px] mx-auto aspect-[16/10] sm:aspect-[16/9] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
            <MemberVisual member={member} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 md:p-12">
                <div className="flex items-center gap-3 max-w-xl">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                        {member.headline}
                    </h2>
                    <div className="flex gap-1 shrink-0" aria-hidden>
                        <span className="w-1 h-7 sm:h-9 rounded-full bg-blue-500" />
                        <span className="w-1 h-7 sm:h-9 rounded-full bg-red-500" />
                        <span className="w-1 h-7 sm:h-9 rounded-full bg-yellow-400" />
                        <span className="w-1 h-7 sm:h-9 rounded-full bg-green-500" />
                    </div>
                </div>
            </div>

            {showPlay && (
                <button
                    type="button"
                    suppressHydrationWarning
                    className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${member.name} — video`}
                >
                    <Play size={20} className="ml-0.5 fill-white" />
                </button>
            )}
        </div>
    );
}

function ProfileNav({ prevHref, nextHref }: { prevHref: string; nextHref: string }) {
    return (
        <div className="flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-1">
            <Link
                href={prevHref}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous team member"
            >
                <ChevronLeft size={18} />
            </Link>
            <Link
                href={nextHref}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next team member"
            >
                <ChevronRight size={18} />
            </Link>
        </div>
    );
}

export function TeamProfileView({ memberId }: TeamProfileViewProps) {
    const t = useTranslations('TeamPage');
    const members = t.raw('members') as TeamMemberItem[];
    const member = members.find((m) => m.id === memberId) ?? members[0];
    const [mounted, setMounted] = useState(false);

    const currentPath = pathFromMemberId(member.id);
    const { prev, next } = currentPath ? getAdjacentPaths(currentPath) : { prev: '/roosevelt', next: '/ops' };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!member) return null;

    return (
        <div className="min-h-screen bg-black pt-20 sm:pt-24 pb-24 overflow-x-hidden">
            <div className="w-full px-4 sm:px-6 mb-12 sm:mb-16 text-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={member.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight"
                    >
                        {member.name}
                    </motion.h1>
                </AnimatePresence>
            </div>

            <section className="w-full max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                    <div className="w-full lg:flex-1">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 24 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                <ProfileCard member={member} showPlay={mounted} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`desc-${member.id}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="w-full lg:max-w-md lg:pt-6"
                        >
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">
                                {member.role}
                            </p>
                            <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                                {member.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-10 sm:mt-12 flex justify-center">
                    <ProfileNav prevHref={prev} nextHref={next} />
                </div>
            </section>
        </div>
    );
}

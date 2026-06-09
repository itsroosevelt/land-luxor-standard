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
                sizes="(max-width: 1024px) 92vw, 960px"
            />
        );
    }

    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 55%, #1a1a1a 100%)` }}
        >
            <span className="text-[72px] sm:text-[100px] font-bold text-white/10 select-none">
                {member.initials}
            </span>
        </div>
    );
}

function ProfileCard({ member, showPlay }: { member: TeamMemberItem; showPlay: boolean }) {
    return (
        <div className="relative w-full aspect-[4/3] max-h-[48vh] sm:max-h-[53vh] lg:max-h-[min(61vh,720px)] rounded-[22px] sm:rounded-[28px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]">
            <MemberVisual member={member} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end items-start p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-3 max-w-xl">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-normal text-white tracking-tight leading-tight">
                        {member.headline}
                    </h2>
                    <div className="flex gap-1 shrink-0" aria-hidden>
                        <span className="w-1 h-6 sm:h-8 rounded-full bg-blue-500" />
                        <span className="w-1 h-6 sm:h-8 rounded-full bg-red-500" />
                        <span className="w-1 h-6 sm:h-8 rounded-full bg-yellow-400" />
                        <span className="w-1 h-6 sm:h-8 rounded-full bg-green-500" />
                    </div>
                </div>
            </div>

            {showPlay && (
                <button
                    type="button"
                    suppressHydrationWarning
                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
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
        <div className="h-[calc(100dvh-4rem)] flex flex-col overflow-hidden bg-black py-4 sm:py-6">
            {/* Name — full viewport width so it stays visually centered */}
            <header className="shrink-0 w-full text-center px-4 pt-4 sm:pt-6 lg:pt-10 mb-4 sm:mb-6">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={member.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="w-full text-center text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-white tracking-tight leading-tight"
                    >
                        {member.name}
                    </motion.h1>
                </AnimatePresence>
            </header>

            {/* Card + description */}
            <div className="flex-1 min-h-0 flex flex-col lg:flex-row lg:items-center gap-4 sm:gap-6 lg:gap-[2.5cm] w-full max-w-[1600px] pl-4 sm:pl-6 lg:pl-[4cm] pr-4 sm:pr-8 lg:pr-12">
                <div className="shrink-0 w-full lg:w-[70%]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <ProfileCard member={member} showPlay={mounted} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`desc-${member.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-1 min-h-0 w-full lg:w-[30%] flex flex-col justify-center lg:py-2 lg:pr-2"
                    >
                        <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/35 font-normal mb-2 sm:mb-3">
                            {member.role}
                        </p>
                        <p className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed lg:leading-relaxed">
                            {member.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <footer className="shrink-0 pt-4 sm:pt-5 flex justify-center">
                <ProfileNav prevHref={prev} nextHref={next} />
            </footer>
        </div>
    );
}

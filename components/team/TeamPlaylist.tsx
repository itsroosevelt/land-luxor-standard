'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export interface TeamMemberItem {
    id: string;
    name: string;
    role: string;
    headline: string;
    description: string;
    initials: string;
    image?: string;
    accentFrom?: string;
    accentTo?: string;
}

interface TeamPlaylistProps {
    members: TeamMemberItem[];
    tagline: string;
    activeIdx?: number;
    onActiveIdxChange?: (index: number) => void;
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
                sizes="(max-width: 840px) 64vw, 840px"
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

function PlaylistCard({ member, showPlay }: { member: TeamMemberItem; showPlay: boolean }) {
    return (
        <div className="relative w-full max-w-[840px] aspect-[16/10] sm:aspect-[16/9] shrink-0 rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
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

function MemberSideDescription({ member }: { member: TeamMemberItem }) {
    return (
        <div className="flex flex-col justify-start max-w-xs sm:max-w-sm lg:max-w-md text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">
                {member.role}
            </p>
            <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                {member.description}
            </p>
        </div>
    );
}

export function TeamPlaylist({
    members,
    tagline,
    activeIdx: controlledIdx,
    onActiveIdxChange,
}: TeamPlaylistProps) {
    const [internalIdx, setInternalIdx] = useState(0);
    const [mounted, setMounted] = useState(false);

    const activeIdx = controlledIdx ?? internalIdx;
    const setActiveIdx = (next: number) => {
        if (onActiveIdxChange) {
            onActiveIdxChange(next);
        } else {
            setInternalIdx(next);
        }
    };

    const active = members[activeIdx];
    const hasMultiple = members.length > 1;

    useEffect(() => {
        setMounted(true);
    }, []);

    const goNext = () => {
        if (!hasMultiple) return;
        setActiveIdx((activeIdx + 1) % members.length);
    };

    const goPrev = () => {
        if (!hasMultiple) return;
        setActiveIdx((activeIdx - 1 + members.length) % members.length);
    };

    if (!members.length) return null;

    const displayMember = mounted ? active : members[0];

    return (
        <section className="w-full">
            {/* Card + side description */}
            <div className="pl-12 sm:pl-16 lg:pl-24 pr-4 sm:pr-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-[1cm] lg:gap-[1.5cm]">
                    <div className="w-full lg:w-[min(840px,64vw)] shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={displayMember.id}
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 24 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                <PlaylistCard member={displayMember} showPlay={mounted} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`desc-${displayMember.id}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            className="flex flex-1 min-h-0 py-4 lg:py-0 lg:pt-6"
                        >
                            <MemberSideDescription member={displayMember} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Tagline + navigation */}
            <div className="mt-8 sm:mt-10 pl-12 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-8">
                <motion.div
                    key={mounted ? active.id : 'static'}
                    initial={mounted ? { opacity: 0, y: 8 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-2xl"
                >
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
                        {mounted ? active.headline : members[0].headline}
                    </h3>
                    <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                        {tagline}
                    </p>
                </motion.div>

                {hasMultiple && (
                    <div
                        className={`flex items-center rounded-full bg-white/5 border border-white/10 p-1 shrink-0 self-start sm:self-end ${mounted ? '' : 'invisible'}`}
                        aria-hidden={!mounted}
                    >
                        <button
                            type="button"
                            suppressHydrationWarning
                            onClick={goPrev}
                            disabled={!mounted}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50"
                            aria-label="Previous team member"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            suppressHydrationWarning
                            onClick={goNext}
                            disabled={!mounted}
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50"
                            aria-label="Next team member"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Copy, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import React, { useRef, useEffect, useState, Fragment } from 'react';

interface HeroProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
}

export const Hero = ({ eyebrow, title, subtitle, ctaText, ctaLink }: HeroProps) => {
    const locale = useLocale();
    const badgeText = locale === 'es' ? 'Preventa' : 'Presale';
    const presaleDetailText = locale === 'es' ? 'Detalles' : 'Details';

    const bgVideoUrl = "https://firebasestorage.googleapis.com/v0/b/udreamms-platform-1.firebasestorage.app/o/New%20Video%20Luxor.mp4?alt=media&token=a5cd5a16-be9f-43df-bd1e-e702012fa88d";

    const contractAddress = '7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth';
    const [copied, setCopied] = useState(false);

    const handleCopyContract = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isMounted, setIsMounted] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);
    const bgVideoRef = useRef<HTMLVideoElement>(null);

    const isSectionInView = useInView(sectionRef, { amount: 0.1 });

    useEffect(() => {
        if (bgVideoRef.current) {
            if (isSectionInView) bgVideoRef.current.play().catch(() => { });
            else bgVideoRef.current.pause();
        }
    }, [isSectionInView]);

    useEffect(() => {
        setIsMounted(true);
        const targetDate = new Date('2026-11-01T12:00:00-06:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full flex flex-col md:min-h-[105vh] md:justify-end items-start overflow-hidden bg-black">
            {/* 1. Main Background Video Layer */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <video
                    ref={bgVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover grayscale-[0.2] brightness-75 scale-125 md:scale-115 -translate-y-14 md:-translate-y-20"
                    preload="metadata"
                    src={bgVideoUrl}
                />
                {/* Subtle fade transition to black */}
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent" />
            </div>

            {/* 2. Content Layer Container */}
            <div className="relative z-10 w-full px-6 pt-10 pb-24 md:pb-44 md:px-16 lg:px-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">

                {/* Original Text Layer */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-start text-left max-w-3xl"
                >
                    {/* Eyebrow - Even smaller */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[10px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-4 md:mb-3 font-sans"
                    >
                        {eyebrow}
                    </motion.span>

                    {/* Main Title - Scaled for impact on mobile and tablets */}
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium text-white mb-6 md:mb-5 tracking-tight leading-[1.05] font-sans whitespace-pre-line group-hover:scale-[1.01] transition-transform duration-700">
                        {title.split('Luxor').map((part, i, arr) => (
                            <Fragment key={i}>
                                {part}
                                {i !== arr.length - 1 && <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Luxor</span>}
                            </Fragment>
                        ))}
                    </h1>

                    {/* Subtitle - More compact */}
                    <p className="text-sm md:text-sm lg:text-[15px] text-white/80 mb-10 md:mb-8 max-w-lg leading-relaxed font-sans font-light">
                        {subtitle}
                    </p>

                    {/* CTA Section - Touch friendly buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        <Link
                            href={ctaLink}
                            suppressHydrationWarning
                            {...(ctaLink.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group relative px-8 py-4 md:px-7 md:py-2.5 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-medium text-sm md:text-[13px] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-2xl shadow-white/5"
                        >
                            <span className="relative z-10">{ctaText}</span>
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/donate"
                            suppressHydrationWarning
                            className="px-8 py-4 md:px-7 md:py-2.5 border border-white/20 hover:border-white/40 text-blue-400 rounded-full font-medium text-sm md:text-[13px] transition-all backdrop-blur-md flex items-center justify-center gap-2"
                        >
                            Support Luxor
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="w-full max-w-sm lg:max-w-md mt-10 lg:mt-0 flex flex-col items-center justify-center text-white p-2"
                >
                    {/* Contract Address */}
                    <div className="mb-4 flex flex-col items-center gap-1.5 z-20">
                        <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Contract Address</span>
                        <div className="flex items-center gap-2">
                            <span className="text-white/90 font-mono text-[10px] md:text-xs tracking-tight break-all">
                                {contractAddress}
                            </span>
                            <div className="flex items-center gap-1.5 pl-1.5 border-l border-white/15">
                                <button 
                                    onClick={handleCopyContract}
                                    type="button"
                                    title="Copiar dirección"
                                    className="p-0.5 text-white/50 hover:text-white transition-colors cursor-pointer"
                                >
                                    {copied ? (
                                        <CheckCircle2 size={14} className="text-green-400" />
                                    ) : (
                                        <Copy size={14} />
                                    )}
                                </button>
                                <a
                                    href="https://explorer.solana.com/address/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth/metadata"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Ver en Solana Explorer"
                                    className="p-0.5 text-white/50 hover:text-blue-400 transition-colors cursor-pointer"
                                >
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/presale"
                        className="group cursor-pointer flex flex-col items-center justify-center text-white"
                    >
                        {/* Card Status Indicator */}
                        <div className="mb-4 inline-flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
                            <span className="text-xs uppercase tracking-widest font-bold text-blue-400">{badgeText}</span>
                        </div>

                            {isMounted ? (
                                <div className="flex items-center gap-3 lg:gap-4 group-hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all">
                                    <div className="flex flex-col items-center min-w-[50px] lg:min-w-[60px]">
                                        <span suppressHydrationWarning className="text-3xl lg:text-5xl font-bold font-sans tracking-tighter drop-shadow-lg">{timeLeft.days}</span>
                                        <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/50 mt-1 font-semibold">Days</span>
                                    </div>
                                    <div className="text-xl lg:text-3xl mb-5 font-light text-white/30 animate-pulse">:</div>
                                    <div className="flex flex-col items-center min-w-[50px] lg:min-w-[60px]">
                                        <span suppressHydrationWarning className="text-3xl lg:text-5xl font-bold font-sans tracking-tighter drop-shadow-lg">{timeLeft.hours}</span>
                                        <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/50 mt-1 font-semibold">Hours</span>
                                    </div>
                                    <div className="text-xl lg:text-3xl mb-5 font-light text-white/30 animate-pulse">:</div>
                                    <div className="flex flex-col items-center min-w-[50px] lg:min-w-[60px]">
                                        <span suppressHydrationWarning className="text-3xl lg:text-5xl font-bold font-sans tracking-tighter drop-shadow-lg">{timeLeft.minutes}</span>
                                        <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/50 mt-1 font-semibold">Mins</span>
                                    </div>
                                    <div className="text-xl lg:text-3xl mb-5 font-light text-white/30 animate-pulse">:</div>
                                    <div className="flex flex-col items-center min-w-[50px] lg:min-w-[60px]">
                                        <span suppressHydrationWarning className="text-3xl lg:text-5xl font-bold font-sans tracking-tighter drop-shadow-lg">{timeLeft.seconds}</span>
                                        <span className="text-[8px] lg:text-[10px] uppercase tracking-widest text-white/50 mt-1 font-semibold">Secs</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-4 opacity-0">
                                    {/* Placeholder */}
                                    <div className="flex flex-col items-center min-w-[60px]">
                                        <span className="text-4xl lg:text-5xl font-bold font-sans tracking-tighter">0</span>
                                    </div>
                                </div>
                            )}

                            {/* Time Indicator */}
                            <div className="mt-3 mb-3 text-[8px] md:text-[9px] text-white/50 uppercase tracking-[0.2em] font-medium text-center">
                                Nov 1 — Dec 31, 2026
                            </div>

                            {/* Additional Info / CTA */}
                            <div className="flex flex-col items-center justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                                <div className="flex items-center text-[10px] md:text-[11px] uppercase tracking-wider drop-shadow-md">
                                    <span className="font-bold text-blue-400">$LXR/$USDC</span>
                                </div>
                                <span className="text-[10px] md:text-[11px] text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold">
                                    {presaleDetailText} <ArrowRight size={12} />
                                </span>
                            </div>
                    </Link>
                </motion.div>
            </div>

            {/* Subtle bottom scroll indicator (Original) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 right-10 z-30 hidden lg:block"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
};

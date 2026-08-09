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
    const presaleDetailText = locale === 'es' ? 'Ver detalles' : 'View details';

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
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center min-w-[64px]">
            <span suppressHydrationWarning className="text-5xl lg:text-6xl font-medium font-sans tracking-tight tabular-nums">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-medium">{label}</span>
        </div>
    );

    return (
        <section ref={sectionRef} className="relative w-full h-[100svh] flex flex-col justify-end overflow-hidden bg-black">

            {/* Background Video */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <video
                    ref={bgVideoRef}
                    autoPlay muted loop playsInline preload="metadata"
                    className="w-full h-full object-cover object-center brightness-50 -translate-y-16 md:-translate-y-24 lg:-translate-y-32"
                    src={bgVideoUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-6 pb-16 pt-32 md:pb-24 md:px-16 lg:px-24 flex flex-col lg:flex-row items-end justify-between gap-16 lg:gap-8 lg:pb-32">

                {/* LEFT: Identity Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-start text-left max-w-2xl"
                >
                    {eyebrow && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 mb-5 font-sans">
                            {eyebrow}
                        </span>
                    )}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-5 tracking-tight leading-[1.1] font-sans whitespace-pre-line">
                        {title.split('Luxor').map((part, i, arr) => (
                            <Fragment key={i}>
                                {part}
                                {i !== arr.length - 1 && (
                                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Luxor</span>
                                )}
                            </Fragment>
                        ))}
                    </h1>

                    <p className="text-base md:text-lg lg:text-[19px] text-white/60 mb-8 max-w-xl leading-relaxed font-sans font-light">
                        {subtitle}
                    </p>

                </motion.div>

                {/* RIGHT: Presale Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="w-full max-w-xs lg:max-w-sm shrink-0 lg:mb-12"
                >
                    <Link href="/presale" className="group block">
                        <div className="flex flex-col items-center gap-1">

                            {/* Badge — centered above countdown */}
                            <div className="flex items-center gap-2 justify-center mb-1">
                                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
                                <span className="text-xs uppercase tracking-widest font-bold text-blue-400">{badgeText}</span>
                                <span className="text-[10px] text-white/30 uppercase tracking-wider">· Nov – Dec 2026</span>
                            </div>

                            {/* Countdown — bigger, centered */}
                            {isMounted ? (
                                <div className="flex items-center justify-center gap-4">
                                    <CountdownUnit value={timeLeft.days} label="Days" />
                                    <span className="text-4xl lg:text-5xl text-white/20 font-light mb-5">:</span>
                                    <CountdownUnit value={timeLeft.hours} label="Hours" />
                                    <span className="text-4xl lg:text-5xl text-white/20 font-light mb-5">:</span>
                                    <CountdownUnit value={timeLeft.minutes} label="Mins" />
                                    <span className="text-4xl lg:text-5xl text-white/20 font-light mb-5">:</span>
                                    <CountdownUnit value={timeLeft.seconds} label="Secs" />
                                </div>
                            ) : (
                                <div className="h-14 flex items-center justify-center">
                                    <div className="w-32 h-10 bg-white/5 rounded animate-pulse" />
                                </div>
                            )}

                            {/* Price */}
                            <div className="flex items-center gap-1.5 mt-2">
                                <span className="text-white font-medium text-base font-sans">$0.05</span>
                                <span className="text-[10px] text-white/40 font-medium">USDC</span>
                            </div>

                            {/* Detalles CTA */}
                            <span className="flex items-center gap-1 text-xs text-blue-400 font-semibold mt-2 group-hover:gap-2 transition-all">
                                {presaleDetailText} <ArrowRight size={13} />
                            </span>

                        </div>
                    </Link>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center"
            >
                <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>

        </section>
    );
};

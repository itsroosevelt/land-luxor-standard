'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function TechnicalSheetSection() {
    const t = useTranslations('PrivateSale.technical_sheet');

    return (
        <section id="detalles" className="py-32 px-6 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full scale-90 md:scale-75">
                    <Image 
                        src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/contador.jpg?alt=media&token=c2afcd94-f871-4f72-aeab-9beec355e911"
                        alt="Luxor Counter Background"
                        fill
                        className="object-contain opacity-50"
                        priority
                    />
                </div>
                {/* Editorial Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10 w-full">
                {/* Centered Title and Subtitle */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-normal mb-6 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {t('title')}
                    </h2>
                    <p className="text-white/60 leading-relaxed font-light max-w-2xl mx-auto text-base md:text-lg">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    {/* 1. Cap Info (Hard Cap & Soft Cap) */}
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-24">
                        <div className="text-center">
                            <span className="block text-white/40 text-xs uppercase tracking-[0.2em] mb-2 font-normal">Hard Cap</span>
                            <span className="text-3xl md:text-4xl font-normal text-white">$2,000,000</span>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10 self-center"></div>
                        <div className="text-center">
                            <span className="block text-white/40 text-xs uppercase tracking-[0.2em] mb-2 font-normal">Soft Cap</span>
                            <span className="text-3xl md:text-4xl font-normal text-white/80">$500,000</span>
                        </div>
                    </div>

                    {/* 2. Layered Visual: Image + SVG Worms + 1% Text */}
                    <div className="relative mb-24 w-full max-w-lg flex justify-center h-[500px]">
                        <style>{`
                            @keyframes wormUp {
                                0% { offset-distance: 0%; opacity: 0; }
                                10% { opacity: 1; }
                                90% { opacity: 1; }
                                100% { offset-distance: 100%; opacity: 0; }
                            }
                            .energy-worm { 
                                animation: wormUp 3s linear infinite;
                                offset-rotate: auto;
                            }
                        `}</style>
                        
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            {/* The animated worms (SVG Overlay) */}
                            <svg viewBox="0 0 400 600" className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                <defs>
                                    <filter id="neonBlur">
                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Animated Energy Worms (Particles) flowing UP into the ring */}
                                <rect width="2" height="25" rx="1" fill="#d8b4fe" className="energy-worm" style={{ offsetPath: 'path( "M 158 600 V 400 Q 158 325 200 325" )', animationDelay: '0s' }} filter="url(#neonBlur)" />
                                <rect width="3" height="35" rx="1.5" fill="#93c5fd" className="energy-worm" style={{ offsetPath: 'path( "M 179 600 V 325" )', animationDelay: '1.5s' }} filter="url(#neonBlur)" />
                                <rect width="4" height="45" rx="2" fill="#fff" className="energy-worm" style={{ offsetPath: 'path( "M 200 600 V 325" )', animationDelay: '0.8s' }} filter="url(#neonBlur)" />
                                <rect width="3" height="30" rx="1.5" fill="#93c5fd" className="energy-worm" style={{ offsetPath: 'path( "M 221 600 V 325" )', animationDelay: '2.2s' }} filter="url(#neonBlur)" />
                                <rect width="2" height="25" rx="1" fill="#d8b4fe" className="energy-worm" style={{ offsetPath: 'path( "M 242 600 V 400 Q 242 325 200 325" )', animationDelay: '0.4s' }} filter="url(#neonBlur)" />
                            </svg>

                            {/* 1% Text Layered on top of everything */}
                            <div className="relative z-20 text-center pointer-events-none -mt-80">
                                <span className="text-[9rem] md:text-[11rem] font-light text-white tracking-tighter flex items-center justify-center drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                                    1<span className="text-5xl md:text-6xl text-white/70 ml-2">%</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Table of Details - BAJO EL CONTADOR */}
                    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-6 mt-12 mb-24">
                        <div className="flex items-center justify-between p-6 rounded-2xl bg-transparent border border-white/10 hover:border-white/30 transition-colors">
                            <span className="text-white/50 text-sm font-normal">{t('price_label')}</span>
                            <span className="text-blue-400 font-normal text-lg">$0.01 USDC</span>
                        </div>
                        <div className="flex items-center justify-between p-6 rounded-2xl bg-transparent border border-white/10 hover:border-white/30 transition-colors">
                            <span className="text-white/50 text-sm font-normal">{t('min_participation_label')}</span>
                            <span className="text-white font-normal">$500 USD</span>
                        </div>
                        <div className="flex items-center justify-between p-6 rounded-2xl bg-transparent border border-white/10 hover:border-white/30 transition-colors">
                            <span className="text-white/50 text-sm font-normal">{t('accepted_coins_label')}</span>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-normal">SOL</span>
                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-normal">USDC</span>
                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-normal">USDT</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-6 rounded-2xl bg-transparent border border-white/10 hover:border-white/30 transition-colors">
                            <span className="text-white/50 text-sm font-normal">{t('network_label')}</span>
                            <span className="text-white font-normal">Solana (SPL Token)</span>
                        </div>
                    </div>

                    {/* 4. Treasury (Treasure) */}
                    <div className="w-full max-w-3xl text-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-normal text-white mb-2">{t('treasury_title')}</h3>
                            <p className="text-white/50 font-light text-sm">{t('treasury_subtitle')}</p>
                        </div>

                        <div className="mb-10">
                            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-4">{t('spl_address_label')}</p>
                            <div className="flex items-center justify-center gap-3 group cursor-pointer" onClick={() => navigator.clipboard.writeText('FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg')}>
                                <p className="text-white font-mono text-sm md:text-lg break-all leading-relaxed group-hover:text-blue-400 transition-colors">
                                    FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg
                                </p>
                                <Copy size={18} className="text-white/20 group-hover:text-blue-400 transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-green-400/50" />
                                <p className="text-white/40 font-light text-xs">{t('multisig_note')}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-green-400/50" />
                                <p className="text-white/40 font-light text-xs">{t('verify_note')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ReferralSection() {
    const t = useTranslations('PrivateSale.referral');

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-normal mb-6 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {t('title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-16 mb-24">
                    {/* 1. Comunidad */}
                    <div className="text-center group">
                        <div className="flex items-center justify-center mb-8 mx-auto transition-transform duration-500 group-hover:scale-110">
                            <Users size={56} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]" />
                        </div>
                        <h4 className="text-xl font-normal text-white mb-4">{t('community.title')}</h4>
                        <div className="space-y-4">
                            <p className="text-white/60 font-light text-sm leading-relaxed max-w-[280px] mx-auto">
                                {t.rich('community.text', {
                                    span: (chunks) => <span className="font-medium text-blue-400">{chunks}</span>
                                })}
                            </p>
                            <p className="text-white/40 font-medium text-xs uppercase tracking-[0.2em]">
                                {t('community.no_limit')}
                            </p>
                        </div>
                    </div>

                    {/* 2. Comisiones */}
                    <div className="text-center group">
                        <div className="flex items-center justify-center mb-8 mx-auto transition-transform duration-500 group-hover:scale-110">
                            <TrendingUp size={56} strokeWidth={1.5} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]" />
                        </div>
                        <h4 className="text-xl font-normal text-white mb-4">{t('commissions.title')}</h4>
                        <div className="space-y-4">
                            <p className="text-white/60 font-light text-sm leading-relaxed max-w-[280px] mx-auto">
                                {t.rich('commissions.text', {
                                    span: (chunks) => <span className="text-lg font-medium text-blue-400">{chunks}</span>
                                })}
                            </p>
                            <p className="text-white/40 font-light text-[11px] italic leading-relaxed max-w-[240px] mx-auto">
                                {t('commissions.note')}
                            </p>
                        </div>
                    </div>

                    {/* 3. Telegram / Airdrop */}
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-8 mx-auto">
                            <a 
                                href="https://t.me/+G4yvWM535vE2MjIx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="transition-transform duration-500 group-hover:scale-110">
                                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">
                                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.18l-1.91 9.02c-.14.64-.52.8-.1.54l-2.91-2.15-1.41 1.36c-.16.16-.29.29-.6.29l.21-2.98 5.44-4.92c.24-.21-.05-.33-.37-.12L9.2 12.85l-2.89-.9c-.63-.2-.64-.63.13-.93l11.27-4.35c.52-.19.98.12.85.91z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <h4 className="text-xl font-normal text-white mb-4">{t('telegram.title')}</h4>
                        <div className="space-y-4">
                            <p className="text-white/60 font-light text-sm leading-relaxed max-w-[280px] mx-auto">
                                {t('telegram.text')}
                            </p>
                            <a 
                                href="https://t.me/+G4yvWM535vE2MjIx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block text-[10px] text-white uppercase tracking-widest font-medium hover:text-blue-300 transition-colors"
                            >
                                {t('telegram.cta')} →
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-white/30 font-light text-base md:text-lg italic">
                        {t('footer_note')}
                    </p>
                </div>
            </div>
        </section>
    );
}

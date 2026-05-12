'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function CommunicationSection() {
    const t = useTranslations('PrivateSale.communication');

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-normal mb-4 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {t('title')}
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto font-light text-sm">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-16 md:gap-24">
                    {/* X (Twitter) */}
                    <a href="https://x.com/luxor_lxr" target="_blank" rel="noopener noreferrer" className="group text-center">
                        <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">X / Twitter</span>
                    </a>

                    {/* Discord */}
                    <a href="https://discord.gg/pFgcmV45yn" target="_blank" rel="noopener noreferrer" className="group text-center">
                        <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2] opacity-90 group-hover:opacity-100 transition-opacity">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                        </div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Discord</span>
                    </a>

                    {/* Telegram */}
                    <a href="https://t.me/+G4yvWM535vE2MjIx" target="_blank" rel="noopener noreferrer" className="group text-center">
                        <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-[#229ED9] opacity-90 group-hover:opacity-100 transition-opacity">
                                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.18l-1.91 9.02c-.14.64-.52.8-.1.54l-2.91-2.15-1.41 1.36c-.16.16-.29.29-.6.29l.21-2.98 5.44-4.92c.24-.21-.05-.33-.37-.12L9.2 12.85l-2.89-.9c-.63-.2-.64-.63.13-.93l11.27-4.35c.52-.19.98.12.85.91z"/>
                            </svg>
                        </div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Telegram</span>
                    </a>

                    {/* YouTube */}
                    <a href="https://www.youtube.com/@luxor_lxr" target="_blank" rel="noopener noreferrer" className="group text-center">
                        <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF0000] opacity-90 group-hover:opacity-100 transition-opacity">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">YouTube</span>
                    </a>

                    {/* Gmail */}
                    <a href="mailto:services@byluxor.com" className="group text-center">
                        <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#EA4335] opacity-90 group-hover:opacity-100 transition-opacity">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">{t('email_support')}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

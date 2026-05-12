'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function GovernanceDocsSection() {
    const t = useTranslations('PrivateSale');

    return (
        <section className="py-24 md:py-32 px-6 bg-black">
            <div className="max-w-5xl mx-auto space-y-24">
                {/* Governance Section */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-5xl font-normal mb-10 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] tracking-tight">
                        {t('governance.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                            {t('governance.text1')}
                        </p>
                        <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                            {t('governance.text2')}
                        </p>
                        <div className="pt-6">
                            <a 
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=services@byluxor.com&su=${encodeURIComponent('Participation Request - $LXR Private Sale')}&body=${encodeURIComponent(
                                    'Dear Luxor Team,\n\n' +
                                    'I would like to participate in the $LXR private sale. Please find below the required information to initiate the approval process and secure my position prior to the official launch:\n\n' +
                                    'Participation Amount: [Enter amount and currency, e.g., 5000 USDC / 50 SOL]\n' +
                                    'Country of Residence: [Enter your country]\n' +
                                    'ID Document Number (DNI / License / Passport): [Enter your ID number]\n' +
                                    'Wallet Address (Solana): [Paste your wallet address where you will receive the tokens]\n\n' +
                                    'Attached to this email, please find a photo of my official identification for the identity verification process.\n\n' +
                                    'I understand that, upon approval, the process will continue with a minimum test transaction to my wallet before proceeding with the deposit to the project\'s multisig account. I look forward to receiving further instructions and the Streamflow contract details within the next 48 hours.\n\n' +
                                    'Additionally, if you have any questions or would like to learn more about the project, feel free to ask here and we will address all your concerns.\n\n' +
                                    'Best regards,\n' +
                                    '[Invester\'s Name]'
                                )}`}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block px-16 py-2 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] text-white hover:scale-105 rounded-full font-medium transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] text-sm"
                            >
                                {t('governance.cta_participate')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Documentation Section */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-5xl font-normal mb-10 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] tracking-tight">
                        {t('technical.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <p className="text-sm md:text-base text-white/60 font-light leading-relaxed">
                            {t('technical.text')}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a 
                                href="https://github.com/admluxorsys/economy-triple-token/blob/main/Whitepaper.md" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[11px] uppercase tracking-wider font-medium"
                            >
                                {t('technical.whitepaper')}
                            </a>
                            <Link href="/coming-soon" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[11px] uppercase tracking-wider font-medium">
                                {t('technical.pitchdeck')}
                            </Link>
                            <Link href="/coming-soon" className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/30 cursor-not-allowed text-[11px] uppercase tracking-wider font-medium">
                                {t('technical.audits')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

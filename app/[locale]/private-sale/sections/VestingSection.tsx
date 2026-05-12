'use client';

import React from 'react';
import { Rocket, TrendingUp, Shield, Users, Wallet, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function VestingSection() {
    const t = useTranslations('PrivateSale.vesting');

    const plans = [
        {
            id: "agility",
            icon: <Rocket className="w-8 h-8 text-blue-400" />
        },
        {
            id: "growth",
            icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
            recommended: true
        },
        {
            id: "foundational",
            icon: <Shield className="w-8 h-8 text-blue-400" />
        }
    ];

    return (
        <section className="py-32 px-6 bg-black relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-6xl font-normal mb-6 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] tracking-tight">
                        {t('title')}
                    </h2>
                    <p className="text-white/40 font-light text-lg max-w-2xl mx-auto italic">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-center text-center ${
                            plan.recommended 
                                ? 'bg-blue-600/5 border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.1)]' 
                                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                        }`}>
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-lg">
                                        {t('plans.growth.recommended')}
                                    </span>
                                </div>
                            )}
                            
                            <div className="mb-8 p-4 bg-black rounded-3xl border border-white/5 shadow-inner">
                                {plan.icon}
                            </div>

                            <h3 className="text-2xl font-normal text-white mb-2">{t(`plans.${plan.id}.name`)}</h3>
                            <span className="text-blue-400 font-mono text-sm mb-6">{t(`plans.${plan.id}.duration`)}</span>
                            
                            <p className="text-white/50 text-sm font-light leading-relaxed mb-8 h-12">
                                {t(`plans.${plan.id}.benefit`)}
                            </p>

                            <div className="w-full pt-8 border-t border-white/5 space-y-4 mt-auto">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[10px] uppercase tracking-widest text-white/30">{t('unlock_label')}</span>
                                    <span className="text-white font-medium">{t(`plans.${plan.id}.unlock`)}</span>
                                </div>
                                <div className="text-[11px] text-white/20 italic pt-2">
                                    {t('access_prefix')}: {t(`plans.${plan.id}.access`)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Golden Rules / Features */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Users className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-xl text-white font-normal mb-3">{t('rules.leadership.title')}</h4>
                                <p className="text-white/50 text-sm leading-relaxed font-light">
                                    {t.rich('rules.leadership.text', {
                                        span: (chunks) => <span className="text-blue-400 font-medium">{chunks}</span>
                                    })}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Wallet className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-xl text-white font-normal mb-3">{t('rules.segmentation.title')}</h4>
                                <p className="text-white/50 text-sm leading-relaxed font-light">
                                    {t.rich('rules.segmentation.text', {
                                        white: (chunks) => <span className="text-white">{chunks}</span>,
                                        blue: (chunks) => <span className="text-blue-400">{chunks}</span>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-blue-500/5 transition-transform duration-700 group-hover:scale-150">
                            <Activity size={120} />
                        </div>
                        <h4 className="text-xl text-white font-normal mb-4 flex items-center gap-3">
                            <CheckCircle2 className="text-blue-500" />
                            {t('rules.transparency.title')}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed font-light mb-6">
                            {t('rules.transparency.text')}
                        </p>
                        <ul className="space-y-3">
                            {t.raw('rules.transparency.features').map((item: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-2 text-xs text-white/40">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-32 text-center">
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
                        {t('cta_participate')}
                    </a>
                </div>
            </div>
        </section>
    );
}

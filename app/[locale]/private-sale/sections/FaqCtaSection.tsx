'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, ClipboardCheck, ShieldCheck, FileCode, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function FaqCtaSection() {
    const t = useTranslations('PrivateSale');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleParticipate = () => {
        const subject = encodeURIComponent('Participation Request - $LXR Private Sale');
        const body = encodeURIComponent(
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
        );
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=services@byluxor.com&su=${subject}&body=${body}`, '_blank');
    };

    return (
        <section id="aplicar" className="py-32 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
                
                {/* Instructions Section */}
                <div className="mb-48">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-normal mb-8 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block tracking-tight drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            {t('instructions.title')}
                        </h2>
                        <p className="text-white/60 max-w-3xl mx-auto font-light text-lg leading-relaxed">
                            {t('instructions.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Step 1, 2, 3 */}
                        <div className="space-y-16">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-blue-500 font-mono text-sm border border-blue-500/30 px-3 py-1 rounded-full">{t('instructions.steps.0.step')}</span>
                                    <h3 className="text-xl text-white font-normal">{t('instructions.steps.0.title')}</h3>
                                </div>
                                <p className="text-white/50 font-light text-sm leading-relaxed">
                                    {t.rich('instructions.steps.0.desc', {
                                        button: (chunks) => <span className="text-blue-400">"{chunks}"</span>
                                    })}
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-blue-500 font-mono text-sm border border-blue-500/30 px-3 py-1 rounded-full">{t('instructions.steps.1.step')}</span>
                                    <h3 className="text-xl text-white font-normal">{t('instructions.steps.1.title')}</h3>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-white/50 font-light text-sm leading-relaxed">{t('instructions.steps.1.desc')}</p>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {t.raw('instructions.steps.1.fields').map((item: string, i: number) => (
                                            <li key={i} className="flex items-center gap-2 text-[13px] text-white/40">
                                                <div className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-blue-500 font-mono text-sm border border-blue-500/30 px-3 py-1 rounded-full">{t('instructions.steps.2.step')}</span>
                                    <h3 className="text-xl text-white font-normal">{t('instructions.steps.2.title')}</h3>
                                </div>
                                <p className="text-white/50 font-light text-sm leading-relaxed">
                                    {t.rich('instructions.steps.2.desc', {
                                        hours: (chunks) => <span className="text-white">{chunks}</span>
                                    })}
                                </p>
                            </div>
                        </div>

                        {/* Step 4 & 5 */}
                        <div className="space-y-16">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-blue-500 font-mono text-sm border border-blue-500/30 px-3 py-1 rounded-full">{t('instructions.steps.3.step')}</span>
                                    <h3 className="text-xl text-white font-normal">{t('instructions.steps.3.title')}</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-white/50 font-light text-sm leading-relaxed">
                                        {t.rich('instructions.steps.3.desc', {
                                            test: (chunks) => <span className="text-blue-400">{chunks}</span>
                                        })}
                                    </p>
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                        <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Billetera de Tesorería</p>
                                        <p className="text-[11px] font-mono text-blue-400 break-all">FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-blue-500 font-mono text-sm border border-blue-500/30 px-3 py-1 rounded-full">{t('instructions.steps.4.step')}</span>
                                    <h3 className="text-xl text-white font-normal">{t('instructions.steps.4.title')}</h3>
                                </div>
                                <p className="text-white/50 font-light text-sm leading-relaxed">
                                    {t.rich('instructions.steps.4.desc', {
                                        streamflow: (chunks) => <span className="text-white">{chunks}</span>
                                    })}
                                </p>
                            </div>

                            <div className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
                                <h4 className="text-sm font-medium text-white mb-2">{t('instructions.details.title')}</h4>
                                <ul className="space-y-2">
                                    <li className="text-[12px] text-white/50 font-light flex gap-2">
                                        <span className="text-blue-400">•</span> {t('instructions.details.validity')}
                                    </li>
                                    <li className="text-[12px] text-white/50 font-light flex gap-2">
                                        <span className="text-blue-400">•</span> {t('instructions.details.launch')}
                                    </li>
                                    <li className="text-[12px] text-white/50 font-light flex gap-2">
                                        <span className="text-blue-400">•</span> {t('instructions.details.support')}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24 text-center space-y-12">
                        <p className="text-white/40 italic font-light text-lg">
                            "{t('instructions.quote')}"
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button 
                                onClick={handleParticipate}
                                suppressHydrationWarning
                                className="w-full sm:w-auto px-16 py-2 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] text-white rounded-full font-medium transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:scale-105 text-sm"
                            >
                                {t('description.cta_participate')}
                            </button>
                            <a 
                                href="https://github.com/admluxorsys/economy-triple-token/blob/main/Whitepaper.md"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-16 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-normal transition-all hover:scale-105 text-sm flex items-center justify-center"
                            >
                                {t('instructions.cta_details')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="pt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-normal mb-4 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                            {t('faq.title')}
                        </h2>
                        <p className="text-white/50 font-light text-sm">{t('faq.subtitle')}</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {t.raw('faq.items').map((faq: any, idx: number) => (
                            <div key={idx} className="border-b border-white/10 overflow-hidden transition-colors">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    suppressHydrationWarning
                                    className="w-full text-left py-6 flex items-center justify-between focus:outline-none bg-transparent"
                                >
                                    <span className="font-normal text-lg pr-8">{faq.q}</span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-white/40 transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180 text-blue-400' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="pb-6 text-white/60 text-sm leading-relaxed mt-2 font-light">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeroDescriptionSection() {
    const t = useTranslations('PrivateSale');

    return (
        <section className="bg-black py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight mb-8 leading-tight text-white">
                        {t('hero.title')} <br />
                        <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] font-medium">$LXR</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        {t('description.text')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
                            className="w-full sm:w-auto px-16 py-2 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] text-white hover:scale-105 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.4)] text-sm"
                        >
                            {t('description.cta_participate')}
                            <ArrowRight size={18} />
                        </a>
                        <a href="#detalles" className="w-full sm:w-auto px-16 py-2 bg-black hover:bg-white/5 border border-white/20 text-white rounded-full font-normal transition-all flex items-center justify-center text-sm">
                            {t('description.cta_whitepaper')}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

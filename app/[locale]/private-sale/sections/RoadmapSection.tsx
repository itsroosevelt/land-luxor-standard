'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Rocket, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function RoadmapSection() {
    const t = useTranslations('PrivateSale.roadmap');
    
    const icons = [
        <ShieldCheck className="w-6 h-6" key="shield" />,
        <Globe className="w-6 h-6" key="globe" />,
        <Rocket className="w-6 h-6" key="rocket" />
    ];

    const roadmapItems = t.raw('items');

    return (
        <section className="py-32 px-6 relative bg-black overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-normal mb-6 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)] tracking-tight"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 max-w-2xl mx-auto font-light text-lg italic"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent" />

                    <div className="space-y-24">
                        {roadmapItems.map((item: any, idx: number) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                                    idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-blue-500 z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    {idx === 0 && (
                                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content Panel */}
                                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                                    idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                                }`}>
                                    <div className={`p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden ${
                                        idx === 0 ? 'shadow-[0_0_40px_rgba(37,99,235,0.05)]' : ''
                                    }`}>
                                        {/* Icon Floating Background */}
                                        <div className={`absolute top-0 ${idx % 2 === 0 ? 'right-0' : 'left-0'} p-8 text-blue-500/10 transition-transform duration-700 group-hover:scale-150`}>
                                            {icons[idx]}
                                        </div>

                                        <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                            <span className="text-blue-500 font-mono text-sm tracking-wider">{item.year}</span>
                                            {idx === 0 && (
                                                <span className="px-3 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-widest font-medium border border-blue-500/20">
                                                    {t('status_active')}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-normal text-white mb-2">{item.title}</h3>
                                        <p className="text-blue-400/80 text-sm font-light mb-6 tracking-wide italic">{item.date}</p>
                                        
                                        <p className="text-white/50 text-sm leading-relaxed font-light mb-8">
                                            {item.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                                            {item.details.map((detail: string, dIdx: number) => (
                                                <div key={dIdx} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-white/40 font-light">
                                                    <CheckCircle2 size={10} className="text-blue-500/50" />
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for desktop side alignment */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function PhilosophySection() {
    const t = useTranslations('HomePage');

    const items = [
        { desc: t('philosophy.items.0.desc') },
        { desc: t('philosophy.items.1.desc') },
        { desc: t('philosophy.items.2.desc') },
        { desc: t('philosophy.items.3.desc') },
        { desc: t('philosophy.items.4.desc') },
        { desc: t('philosophy.items.5.desc') },
        { desc: t('philosophy.items.6.desc') },
        { desc: t('philosophy.items.7.desc') },
    ];

    return (
        <section className="w-full flex flex-col lg:flex-row-reverse bg-black">
            {/* Right side text (since flex-row-reverse, this renders on right on lg screens) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 lg:py-20 md:px-16 lg:px-24 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4 block font-sans">
                        Luxor Ecosystem
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-[1.1] font-sans text-white">
                        {t('philosophy.title')}
                    </h2>
                    
                    <div className="flex flex-col gap-6 max-w-xl">
                        <p className="text-base leading-relaxed text-zinc-300 font-sans">
                            {t('philosophy.subtitle')}
                        </p>

                        <p className="text-base leading-relaxed text-zinc-300 font-sans font-medium">
                            {t('philosophy.intro')}
                        </p>

                        <ul className="flex flex-col gap-2.5 pl-2">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-[8px] w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                    <p className="text-sm leading-relaxed text-zinc-400 font-sans">{item.desc}</p>
                                </li>
                            ))}
                        </ul>

                        <p className="text-base leading-relaxed text-white font-sans font-medium">
                            {t('philosophy.outro')}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Left side image */}
            <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto flex items-stretch">
                <Image 
                    src="/images/coins-pile.jpg" 
                    alt="Luxor Philosophy" 
                    fill 
                    className="object-cover" 
                />
            </div>
        </section>
    );
}

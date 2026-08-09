'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function InnovationSection() {
    const t = useTranslations('HomePage');


    return (
        <section className="w-full flex flex-col lg:flex-row bg-black">
            {/* Left side text */}
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
                        {t('innovation.title')}
                    </h2>
                    
                    <div className="flex flex-col gap-6 max-w-xl">
                        <p className="text-base leading-relaxed text-zinc-300 font-sans">
                            {t('innovation.p1')}
                        </p>
                        <p className="text-base leading-relaxed text-zinc-300 font-sans">
                            {t('innovation.p2')}
                        </p>
                        <p className="text-base leading-relaxed text-zinc-300 font-sans">
                            {t('innovation.p3')}
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Right side image */}
            <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto flex items-stretch">
                <Image 
                    src="/images/coin-new.jpg" 
                    alt="Luxor Innovation" 
                    fill 
                    className="object-cover" 
                />
            </div>
        </section>
    );
}

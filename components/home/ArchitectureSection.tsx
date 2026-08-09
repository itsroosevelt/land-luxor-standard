'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { PingPongVideo } from './PingPongVideo';

export function ArchitectureSection() {
    const t = useTranslations('HomePage');
    
    const items = [
        { title: t('architecture.items.0.title'), desc: t('architecture.items.0.desc') },
        { title: t('architecture.items.1.title'), desc: t('architecture.items.1.desc') },
        { title: t('architecture.items.2.title'), desc: t('architecture.items.2.desc') },
    ];

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
                        {t('architecture.title')}
                    </h2>
                    
                    <div className="flex flex-col gap-6 max-w-xl">
                        <p className="text-base leading-relaxed text-zinc-300 font-sans">
                            {t('architecture.subtitle')}
                        </p>

                        <p className="text-base leading-relaxed text-zinc-300 font-sans font-medium">
                            {t('architecture.intro')}
                        </p>

                        <div className="flex flex-col gap-6">
                            {items.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-1.5">
                                    <h3 className="font-semibold text-base text-white font-sans tracking-tight">{item.title}</h3>
                                    <p className="text-base leading-relaxed text-zinc-400 font-sans">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right side media */}
            <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto flex items-stretch overflow-hidden">
                <PingPongVideo 
                    src="https://firebasestorage.googleapis.com/v0/b/udreamms-platform-1.firebasestorage.app/o/Untitled.mp4?alt=media&token=15be5543-6d82-416f-9337-c64985e77632"
                    className="absolute inset-0 w-full h-full"
                    videoClassName="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}

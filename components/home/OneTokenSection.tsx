'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function OneTokenSection() {
    const t = useTranslations('HomePage');

    return (
        <section className="w-full bg-black py-16 flex items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide font-sans leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                        {t('slogan')}
                    </span>
                </h2>
            </motion.div>
        </section>
    );
}

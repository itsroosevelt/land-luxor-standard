'use client';

import React from 'react';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';

export function InfrastructureSection() {
    const t = useTranslations('PrivateSale.infrastructure');

    return (
        <section className="pt-32 md:pt-48 pb-24 px-6 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-normal mb-32 md:mb-56 text-white leading-tight text-center max-w-4xl mx-auto">
                    <span className="bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {t.rich('title', {
                            br: () => <br className="hidden md:block" />
                        })}
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {/* Item 1 */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 group cursor-pointer border-b md:border-none border-white/10 pb-8 md:pb-0">
                        <div className="flex-1 order-2 sm:order-1 pr-0 sm:pr-4">
                            <h3 className="text-2xl font-normal text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                                {t('items.0.title')}
                            </h3>
                            <p className="text-white/60 font-light text-sm leading-relaxed text-justify">
                                {t('items.0.desc')}
                            </p>
                        </div>
                        <div className="w-full sm:w-32 lg:w-40 aspect-[2/1] sm:aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 order-1 sm:order-2 relative group-hover:border-white/20 transition-colors">
                            <NextImage 
                                src="/images/coin-new.jpg"
                                alt={t('items.0.title')}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 group cursor-pointer border-b md:border-none border-white/10 pb-8 md:pb-0">
                        <div className="flex-1 order-2 sm:order-1 pr-0 sm:pr-4">
                            <h3 className="text-2xl font-normal text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                                {t('items.1.title')}
                            </h3>
                            <p className="text-white/60 font-light text-sm leading-relaxed text-justify">
                                {t('items.1.desc')}
                            </p>
                        </div>
                        <div className="w-full sm:w-32 lg:w-40 aspect-[2/1] sm:aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 order-1 sm:order-2 relative group-hover:border-white/20 transition-colors">
                            <video 
                                src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/Pasarela.mp4?alt=media&token=e15950f0-1241-4ae3-969a-18f9cddccd6e"
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 group cursor-pointer pb-8 md:pb-0">
                        <div className="flex-1 order-2 sm:order-1 pr-0 sm:pr-4">
                            <h3 className="text-2xl font-normal text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                                {t('items.2.title')}
                            </h3>
                            <div className="text-white/60 font-light text-sm leading-relaxed space-y-4 text-justify">
                                {t.raw('items.2.points').map((point: string, idx: number) => (
                                    <p key={idx}>{point}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full sm:w-32 lg:w-40 aspect-[2/1] sm:aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 order-1 sm:order-2 relative group-hover:border-white/20 transition-colors">
                            <NextImage 
                                src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/numeros.gif?alt=media&token=ab5353ff-febd-4c63-b1aa-d341eaf4608a"
                                alt={t('items.2.title')}
                                fill
                                unoptimized
                                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col sm:flex-row items-start gap-6 group cursor-pointer pb-8 md:pb-0">
                        <div className="flex-1 order-2 sm:order-1 pr-0 sm:pr-4">
                            <h3 className="text-2xl font-normal text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                                {t('items.3.title')}
                            </h3>
                            <p className="text-white/60 font-light text-sm leading-relaxed text-justify">
                                {t('items.3.desc')}
                            </p>
                        </div>
                        <div className="w-full sm:w-32 lg:w-40 aspect-[2/1] sm:aspect-square rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 order-1 sm:order-2 relative group-hover:border-white/20 transition-colors">
                            <NextImage 
                                src="https://firebasestorage.googleapis.com/v0/b/landluxor.firebasestorage.app/o/emoticon-roosevelt.gif?alt=media&token=1b875b25-2904-44c8-b668-53b00b92cf51"
                                alt={t('items.3.title')}
                                fill
                                unoptimized
                                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

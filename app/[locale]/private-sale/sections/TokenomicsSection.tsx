'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export function TokenomicsSection() {
    const t = useTranslations('PrivateSale.tokenomics');
    const v = useTranslations('LuxorPage.vaults');

    return (
        <section className="py-12 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-normal mb-4 bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {t('title')}
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-light text-sm md:text-base">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="space-y-1">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5">
                        <div className="col-span-5">Category / Description</div>
                        <div className="col-span-4 text-right">Wallet Address</div>
                        <div className="col-span-2 text-right">$LXR Tokens</div>
                        <div className="col-span-1 text-right">%</div>
                    </div>

                    {/* Items */}
                    {[
                        { key: 'reserve', addr: 'CZN6WP6rpDQ2NdURc9txtTJJh2uYBa3E6K4iZTWqbegt', tokens: '810,000,000', pct: '40%', color: 'bg-blue-500', textColor: 'text-blue-400' },
                        { key: 'investors', addr: 'BQEPJzJNpaUhxZiZYuqJG64oHaJykLoxMQGBfERVJCqc', tokens: '405,000,000', pct: '20%', color: 'bg-indigo-500', textColor: 'text-indigo-400' },
                        { key: 'foundation', addr: 'FR6mPMN9NegBYkMGsZymuNEXxYQjesQDNsetVTFRh5JG', tokens: '202,500,000', pct: '10%', color: 'bg-purple-500', textColor: 'text-purple-400' },
                        { key: 'ops_marketing', addr: 'HcYv3HVXi3Qd3B494QUhf7odX6JvABZwao1r7kMLDHXf', tokens: '202,500,000', pct: '10%', color: 'bg-green-500', textColor: 'text-green-400' },
                        { key: 'founder_lock', addr: '8YtDVK2qC7V8nM1GFqXnic4sANA5FoYBj5dtLePs3zpi', tokens: '182,250,000', pct: '9%', color: 'bg-cyan-500', textColor: 'text-cyan-400' },
                        { key: 'meteora', addr: 'FEARFtN9VueEFVDCahtoWGu1A8Xdsmr2et3iWqAVo6hg', tokens: '101,250,000', pct: '5%', color: 'bg-pink-500', textColor: 'text-pink-400' },
                        { key: 'airdrops', addr: 'CziGTVvL8ZSph4xYsxoox52x1aDEX4UxT7HC2Y2TZCVs', tokens: '101,250,000', pct: '5%', color: 'bg-orange-500', textColor: 'text-orange-400' },
                        { key: 'founder_ops', addr: 'AcurPgkabibbSNPXCtaVZQZcQcAGptkoMzLBbdMzq76d', tokens: '20,250,000', pct: '1%', color: 'bg-rose-500', textColor: 'text-rose-400' },
                    ].map((item, index) => (
                        <div key={index} className="group transition-all duration-300 hover:bg-white/[0.02]">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 border-b border-white/5 last:border-0">
                                <div className="col-span-5 flex items-center gap-4">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                    <div>
                                        <h3 className="text-sm font-normal text-white">{v(item.key)}</h3>
                                        <p className="text-white/40 font-light text-[11px] mt-0.5">{v(`${item.key}_desc`)}</p>
                                    </div>
                                </div>
                                <div className="col-span-4 hidden md:block">
                                    <p className="text-white/20 font-mono text-[10px] truncate max-w-[200px] ml-auto text-right hover:text-white/40 transition-colors">
                                        {item.addr}
                                    </p>
                                </div>
                                <div className="col-span-2 text-right">
                                    <p className={`text-sm font-normal ${item.textColor}`}>{item.tokens}</p>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-white text-sm font-normal">{item.pct}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

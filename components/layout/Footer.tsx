'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { Globe, Heart } from 'lucide-react';
import LanguageSwitcher from '../features/LanguageSwitcher';
import { getSocialLinks } from '@/lib/social-links';

export default function Footer() {
    const t = useTranslations('Navbar');
    const tf = useTranslations('Footer');
    const tc = useTranslations('Common');

    const socialLinks = getSocialLinks(t('docs'));

    type FooterLink = { name: string; href: string; target?: string };

    const footerSections: (
        | { title: string; links: FooterLink[] }
        | {
              title: string;
              type: 'assets';
              assets: FooterLink[];
              ecosystemSubtitle: string;
              ecosystemLinks: FooterLink[];
          }
    )[] = [
        {
            title: tf('col_project_title'),
            links: [
                { name: t('team'), href: '/team' },
                { name: t('roadmap'), href: '/roadmap' },
                { name: "Whitepaper (Docs)", href: 'https://github.com/admluxorsys/luxor/blob/main/Whitepaper.md', target: '_blank' },
                { name: "Press & Media", href: '#' },
                { name: "Education", href: '/education' },
                { name: "Our Partners", href: '#' },
            ]
        },
        {
            title: tf('col_assets_title'),
            type: 'assets',
            assets: [
                { name: tf('asset_lxr'), href: '/luxor' },
                { name: tf('asset_xls'), href: '/excelsior' },
                { name: tf('asset_usdx'), href: '/stablecoin' },
            ],
            ecosystemSubtitle: tf('col_ecosystem_subtitle'),
            ecosystemLinks: [
                { name: tf('eco_luxor_pay'), href: '/luxor-pay' },
                { name: tf('eco_royalty'), href: '/coming-soon' },
                { name: tf('eco_glasses'), href: '/intelligent-glasses' },
                { name: tf('eco_rai'), href: 'https://www.byroosevelt.com/', target: '_blank' },
            ],
        },
        {
            title: t('tokenomics'),
            links: [
                { name: "Total Supply", href: '#' },
                { name: "Circulating Supply", href: '#' },
                { name: "Network Contract Address", href: 'https://solscan.io/token/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth', target: '_blank' },
                { name: "Public Sale / IDO", href: '#' },
                { name: "Liquidity Pool", href: '#' },
                { name: "TGE (Token Generation Event)", href: '#' },
                { name: "Transaction Fees", href: '#' },
                { name: "Buy-back & Burn", href: '#' },
            ]
        },
        {
            title: t('utility'),
            links: [
                { name: "Staking & Rewards", href: '/coming-soon' },
                { name: "AI Premium Access", href: '/coming-soon' },
                { name: "Hardware Discounts", href: '/coming-soon' },
                { name: "Governance (DAO)", href: '/coming-soon' },
                { name: "Cashback for Usage", href: '/coming-soon' },
                { name: "Suggestions", href: 'mailto:services@byluxor.com' },
            ]
        },
        {
            title: "Security & Legal",
            links: [
                { name: "Technical Audit", href: '#' },
                { name: "Security Certificates", href: '#' },
                { name: "Verified Contract", href: 'https://solscan.io/token/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth', target: '_blank' },
                { name: "Bug Bounty Program", href: '#' },
                { name: "Transparency of Funds", href: '#' },
                { name: "Privacy Policy", href: '/coming-soon' },
                { name: "Terms of Use", href: '/coming-soon' },
                { name: "Disclaimer", href: '/coming-soon' },
                { name: "AML / KYC Policy", href: '/coming-soon' },
            ]
        },
        {
            title: "On-Chain Links",
            links: [
                { name: "Solscan (Explorer)", href: 'https://solscan.io/token/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth', target: '_blank' },
                { name: "DexScreener", href: 'https://dexscreener.com/solana/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth', target: '_blank' },
                { name: "Raydium (Swap)", href: 'https://raydium.io/swap/?inputMint=sol&outputMint=7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth', target: '_blank' },
                { name: "Phantom Wallet", href: 'https://phantom.app/', target: '_blank' },
                { name: "Dial.to (Blinks)", href: 'https://dial.to/?action=solana-action:https://jup.ag/swap/SOL-7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth', target: '_blank' },
                { name: "Jupiter", href: 'https://jup.ag/', target: '_blank' },
                { name: "Meteora", href: 'https://www.meteora.ag/', target: '_blank' },
                { name: "Events", href: '/coming-soon' },
                { name: "Blog", href: '/coming-soon' },
            ]
        },
        {
            title: "Documentation",
            links: [
                { name: "Whitepaper", href: 'https://github.com/admluxorsys/luxor/blob/main/Whitepaper.md', target: '_blank' },
                { name: "API & SDK", href: '/coming-soon' },
                { name: "Integration Guides", href: '/coming-soon' },
                { name: "Legal Files", href: '#' },
                { name: "Github Repository", href: 'https://github.com/admluxorsys/luxor', target: '_blank' },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "Technical Support", href: 'mailto:services@byluxor.com' },
                { name: "Help Center (FAQ)", href: '/coming-soon' },
                { name: "Careers", href: '/careers' },
                { name: "Commercial Contact", href: 'mailto:services@byluxor.com' },
                { name: "Report an Error", href: 'mailto:services@byluxor.com' },
                { name: 'services@byluxor.com', href: 'mailto:services@byluxor.com' },
                { name: '+13859779375', href: 'tel:+13859779375' },
                { name: '170 S W Temple St, Salt Lake City, UT 84101', href: 'https://maps.google.com/?q=170+S+W+Temple+St,+Salt+Lake+City,+UT+84101', target: '_blank' },
            ]
        }
    ];

    return (
        <footer className="bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

                {/* 1. Header Row - Follow Us & Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 pb-16 border-b border-white/5">
                    {/* Left side: Socials */}
                    <div className="flex items-center gap-8 mb-2 lg:mb-0">
                        <span className="text-white/30 font-sans text-[10px] tracking-[0.2em] uppercase font-bold">{tf('followUs')}</span>
                        <div className="flex items-center gap-6">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/40 hover:text-white transition-all transform hover:scale-110"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Newsletter Section */}
                    <div className="flex flex-col gap-5 w-full max-w-[440px]">
                        <div className="space-y-1">
                            <h3 className="text-white text-lg font-sans font-medium tracking-tight">{tf('newsletter_title')}</h3>
                            <p className="text-white/40 text-xs leading-relaxed">{tf('newsletter_desc')}</p>
                        </div>
                        <div className="flex gap-2 w-full">
                            <input
                                suppressHydrationWarning
                                type="email"
                                placeholder={tf('newsletter_placeholder')}
                                className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-xs focus:outline-none focus:border-white/20 flex-grow transition-colors placeholder:text-white/20"
                            />
                            <button 
                                suppressHydrationWarning
                                className="bg-white text-black rounded-full px-7 py-2.5 text-xs font-bold hover:bg-white/90 active:scale-95 transition-all shrink-0">
                                {tf('newsletter_cta')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. Main content area: Slogan (Left) + Grid (Right) */}
                <div className="flex flex-col lg:flex-row gap-x-12 gap-y-20 mb-32">
                    {/* Left Side: Slogan */}
                    <div className="lg:w-1/4">
                        <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight leading-tight sticky top-24 text-white">
                            Making <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Luxor</span> <br />
                            helpful for <br />
                            everyone
                        </h2>
                    </div>

                    {/* Right Side: Columns in a Grid */}
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
                            {footerSections.map((section, idx) => (
                                <div key={idx} className="flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-white text-lg font-sans font-medium mb-3">{section.title}</h3>
                                    </div>
                                    {'links' in section ? (
                                        <ul className="flex flex-col gap-4">
                                            {section.links.map((link, lIdx) => {
                                                const isHighlight =
                                                    link.name === tf('eco_rai') ||
                                                    link.name === 'Roosevelt Intelligence (AI)' ||
                                                    link.name === tf('link_autonomous');
                                                return (
                                                    <li key={lIdx}>
                                                        <Link
                                                            href={link.href}
                                                            target={link.target}
                                                            className={`${isHighlight
                                                                ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold'
                                                                : 'text-white/60 hover:text-white'
                                                                } text-sm font-sans transition-colors flex items-center gap-2 group decoration-transparent`}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        <>
                                            <ul className="flex flex-col gap-4">
                                                {section.assets.map((link, lIdx) => (
                                                    <li key={`asset-${lIdx}`}>
                                                        <Link
                                                            href={link.href}
                                                            target={link.target}
                                                            className="text-white/60 hover:text-white text-sm font-sans transition-colors"
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="pt-2">
                                                <h4 className="text-white/40 text-xs font-sans font-medium uppercase tracking-wider mb-4">
                                                    {section.ecosystemSubtitle}
                                                </h4>
                                                <ul className="flex flex-col gap-4">
                                                    {section.ecosystemLinks.map((link, lIdx) => {
                                                        const isHighlight =
                                                            link.name === tf('eco_rai') ||
                                                            link.name === 'Roosevelt Intelligence (AI)' ||
                                                            link.name === tf('link_autonomous');
                                                        return (
                                                            <li key={`eco-${lIdx}`}>
                                                                <Link
                                                                    href={link.href}
                                                                    target={link.target}
                                                                    className={`${isHighlight
                                                                        ? 'bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold'
                                                                        : 'text-white/60 hover:text-white'
                                                                        } text-sm font-sans transition-colors`}
                                                                >
                                                                    {link.name}
                                                                </Link>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Accepted In Ecosystem Section */}
                        <div className="mt-28 pt-16 border-t border-white/5">
                            <h4 className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold mb-10">
                                {tf('accepted_in')}
                            </h4>
                            <div className="flex flex-wrap items-center gap-x-16 gap-y-10">
                                <span className="text-white/20 text-2xl font-black tracking-tighter hover:text-white transition-colors cursor-default select-none">PHANTOM</span>
                                <span className="text-white/20 text-2xl font-black tracking-tighter hover:text-white transition-colors cursor-default select-none">SOLANA</span>
                                <span className="text-white/20 text-2xl font-black tracking-tighter hover:text-white transition-colors cursor-default select-none">JUPITER</span>
                                <span className="text-white/20 text-2xl font-black tracking-tighter hover:text-white transition-colors cursor-default select-none">SQUADS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Bottom Row */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 group cursor-default">
                        <img
                            src="/assets/icons/esfera.png"
                            alt="Luxor Logo"
                            className="w-8 h-8 object-contain brightness-125 filter group-hover:rotate-12 transition-transform duration-500"
                        />
                        <span className="text-lg font-sans font-medium tracking-tighter">{tc('luxor_economy')}</span>
                    </div>

                    {/* Secondary Navigation */}
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-sans text-white/40">
                        <Link href="/about" className="hover:text-white transition-colors">{tf('about')}</Link>
                        <Link href="/products" className="hover:text-white transition-colors">{t('ecosystem')}</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">{tf('privacy')}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{tf('terms')}</Link>
                        <span className="md:ml-4 flex items-center gap-1">
                            © 2026 Luxor {tf('copyright')} <Heart className="w-3 h-3 text-red-500 fill-current" />
                        </span>
                    </div>

                    <LanguageSwitcher />
                </div>
            </div>
        </footer>
    );
}

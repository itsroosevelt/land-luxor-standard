'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import {
    Send,
    Github,
    Globe,
    FileText,
    Layers,
    Search,
    Heart
} from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Navbar');
    const tf = useTranslations('Footer');
    const tc = useTranslations('Common');

    const socialLinks = [
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            href: "https://x.com/luxor_lxr",
            name: "X"
        },
        { icon: <Send size={18} />, href: "https://t.me/+HqmOhqYjNlJlYjBh", name: "Telegram" },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            href: "https://chat.whatsapp.com/IiqB6T1YzPG0orAzjfindG",
            name: "WhatsApp"
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            href: "https://www.instagram.com/luxor_lxr/",
            name: "Instagram"
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
            ),
            href: "https://www.tiktok.com/@luxor_lxr",
            name: "TikTok"
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: "https://www.linkedin.com/company/luxor-the-intelligence-of-value-dao/",
            name: "LinkedIn"
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            href: "https://www.facebook.com/profile.php?id=61589337775869",
            name: "Facebook"
        },
        {
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
            href: "https://www.youtube.com/@luxor_lxr",
            name: "YouTube"
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.295 1.196-1.995a.076.076 0 0 0-.041-.105 13.11 13.11 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.291a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.420 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
            ),
            href: "https://discord.gg/pFgcmV45yn",
            name: "Discord"
        },
        { icon: <Github size={20} />, href: "https://github.com/admluxorsys/luxor", name: "GitHub" },
        { icon: <FileText size={18} />, href: "https://github.com/admluxorsys/luxor/blob/main/Whitepaper.md", name: t('docs') },
        { icon: <Layers size={18} />, href: "https://phantom.app/tokens/solana/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth", name: "Phantom Token" },
        { icon: <Search size={18} />, href: "https://solscan.io/token/7Qm6qUCXGZfGBYYFzq2kTbwTDah5r3d9DcPJHRT8Wdth", name: "Solscan" },
    ];

    const footerSections = [
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
            title: t('ecosystem'),
            links: [
                { name: tf('link_integra'), href: '/luxor-pay' },
                { name: "Roosevelt Intelligence (AI)", href: 'https://www.byroosevelt.com/', target: '_blank' },
                { name: "Intelligent Glasses", href: '/intelligent-glasses' },
                { name: "Excelsior ($XLS)", href: '/excelsior' },
                { name: "Lux Origin ($LUX)", href: '/lux-origin' },
                { name: "Stablecoin ($USDX)", href: '/stablecoin' },
            ]
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
            title: "Customer Support",
            links: [
                { name: "Technical Support", href: 'mailto:services@byluxor.com' },
                { name: "Help Center (FAQ)", href: '/coming-soon' },
                { name: "Careers / Vacancies", href: '/coming-soon' },
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
                                    <ul className="flex flex-col gap-4">
                                        {section.links.map((link, lIdx) => {
                                            const isHighlight = link.name === 'Roosevelt Intelligence (AI)' || link.name === 'Roosevelt AI' || link.name === tf('link_autonomous');
                                            return (
                                                <li key={lIdx}>
                                                    <Link
                                                        href={link.href}
                                                        target={(link as any).target}
                                                        className={`${isHighlight
                                                            ? "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold"
                                                            : "text-white/60 hover:text-white"
                                                            } text-sm font-sans transition-colors flex items-center gap-2 group decoration-transparent`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
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

                    {/* Language/Location Hint */}
                    <div className="flex items-center gap-2 text-xs font-sans text-white/40">
                        <Globe size={14} />
                        <span>{
                            (() => {
                                const locale = useLocale();
                                const labels: Record<string, string> = {
                                    en: 'English (US)',
                                    es: 'Español (Latinoamérica)',
                                    fr: 'Français',
                                    pt: 'Português',
                                    de: 'Deutsch',
                                    zh: '中文',
                                    ja: '日本語',
                                    ru: 'Русский'
                                };
                                return labels[locale] || 'English (US)';
                            })()
                        }</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

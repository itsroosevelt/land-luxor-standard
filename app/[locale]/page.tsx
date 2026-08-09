import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { BlueParticles } from '@/components/home/BlueParticles';
import { IconMarquee } from '@/components/home/IconMarquee';
import { InnovationSection } from '@/components/home/InnovationSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { ArchitectureSection } from '@/components/home/ArchitectureSection';

import BracketsSectionClient from '@/components/home/BracketsSectionClient';

// Heavy/interactive sections loaded only when needed
const JoinSection = dynamic(
  () => import('@/components/home/JoinSection').then(m => ({ default: m.JoinSection }))
);
const ShowcaseSection = dynamic(
  () => import('@/components/home/ShowcaseSection').then(m => ({ default: m.ShowcaseSection }))
);
const PillarsSection = dynamic(
  () => import('@/components/home/PillarsSection').then(m => ({ default: m.PillarsSection }))
);
const GiantsSection = dynamic(
  () => import('@/components/home/GiantsSection').then(m => ({ default: m.GiantsSection }))
);
const CTASection = dynamic(
  () => import('@/components/home/CTASection').then(m => ({ default: m.CTASection }))
);
const ReviewsSection = dynamic(
  () => import('@/components/home/ReviewsSection').then(m => ({ default: m.ReviewsSection }))
);

export default async function HomePage() {
  const t = await getTranslations('HomePage');

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "By Luxor",
    "url": "https://byluxor.com",
    "logo": "https://byluxor.com/logo.png",
    "sameAs": [
      "https://x.com/byluxor",
      "https://github.com/byluxor"
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Hero
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        ctaText={t('cta_main')}
        ctaLink="/luxor"
      />

      <BlueParticles />

      <IconMarquee />

      {/* CTA Buttons — moved from Hero & Navbar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-10 px-6 bg-black">
        <Link
          href="/luxor"
          className="group relative px-8 py-4 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-2xl shadow-white/5"
        >
          <span className="relative z-10">{(await getTranslations('HomePage'))('cta_main')}</span>
          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
        
        {/* Private Sale Button moved from Navbar */}
        <Link
            href="/private-sale"
            className="flex items-center bg-white/5 border border-white/10 rounded-full h-14 hover:bg-white/10 hover:border-white/20 transition-all group overflow-hidden"
        >
            <div className="flex items-center gap-3 px-6 h-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-white/40 font-medium tracking-widest uppercase">LXR</span>
                <span className="text-sm text-white font-sans font-medium">$0.01 USDC</span>
            </div>
            <div className="bg-blue-800 group-hover:bg-blue-900 text-white px-8 h-full flex items-center justify-center text-sm font-sans font-medium border-l border-white/10 transition-colors">
                Private Sale
            </div>
        </Link>

        <Link
          href="/donate"
          className="px-8 py-4 border border-white/20 hover:border-white/40 text-blue-400 rounded-full font-medium text-sm transition-all backdrop-blur-md flex items-center justify-center gap-2 h-14"
        >
          Support Luxor
        </Link>
      </div>

      <InnovationSection />
      <PhilosophySection />
      <ArchitectureSection />

      <BracketsSectionClient />

      <JoinSection />

      <ShowcaseSection />

      <PillarsSection />

      <GiantsSection />

      <CTASection />

      <ReviewsSection />
    </div>
  );
}

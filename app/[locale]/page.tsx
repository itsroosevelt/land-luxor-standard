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
import { OneTokenSection } from '@/components/home/OneTokenSection';
import { FloatingJoinButton } from '@/components/home/FloatingJoinButton';

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

      {/* Dedicated CTA Section */}
      <section className="relative w-full flex flex-col justify-center py-32 md:py-48 px-6 bg-transparent z-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/luxor"
            className="group px-8 h-12 border border-white/20 hover:border-white/40 text-white rounded-full font-medium text-base transition-all duration-300 flex items-center justify-center"
          >
            <span>{(await getTranslations('HomePage'))('cta_main')}</span>
          </Link>
          
          <Link
              href="/private-sale"
              className="flex items-center justify-center px-8 h-12 bg-white hover:bg-gray-100 rounded-full transition-all text-base text-black font-bold gap-3 shadow-xl shadow-white/10"
          >
              <span>$0.01 USDC</span>
              <span>JOIN NOW</span>
          </Link>

          <Link
            href="/donate"
            className="px-8 h-12 border border-white/20 hover:border-white/40 text-blue-400 rounded-full font-medium text-base transition-all flex items-center justify-center"
          >
            Donate
          </Link>
        </div>
      </section>

      <InnovationSection />
      
      {/* Spacer Container */}
      <div className="w-full h-16 md:h-32 bg-black"></div>
      
      <PhilosophySection />
      <FloatingJoinButton />

      {/* Spacer Container */}
      <div className="w-full h-16 md:h-32 bg-black"></div>

      <ArchitectureSection />
      <OneTokenSection />
      
      <BracketsSectionClient />
      <FloatingJoinButton />

      <JoinSection />
      <ShowcaseSection />
      <FloatingJoinButton />

      <PillarsSection />
      <GiantsSection />
      <FloatingJoinButton />

      <CTASection />
      <ReviewsSection />
    </div>
  );
}

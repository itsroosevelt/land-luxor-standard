'use client';

import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { HeroDescriptionSection } from './sections/HeroDescriptionSection';
import { InfrastructureSection } from './sections/InfrastructureSection';
import { TechnicalSheetSection } from './sections/TechnicalSheetSection';
import { TokenomicsSection } from './sections/TokenomicsSection';
import { VestingSection } from './sections/VestingSection';
import { ReferralSection } from './sections/ReferralSection';
import { CommunicationSection } from './sections/CommunicationSection';
import { RoadmapSection } from './sections/RoadmapSection';
import { GovernanceDocsSection } from './sections/GovernanceDocsSection';
import { FaqCtaSection } from './sections/FaqCtaSection';

export default function PrivateSalePage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-sans pb-24">
            <HeroSection />
            <HeroDescriptionSection />
            <InfrastructureSection />
            <TokenomicsSection />
            <GovernanceDocsSection />
            <TechnicalSheetSection />
            <VestingSection />
            <RoadmapSection />
            <ReferralSection />
            <FaqCtaSection />
            <CommunicationSection />
        </main>
    );
}


import React from 'react';
import AboutHero from '@/components/marketing/about/Abouthero';
import MissionSection from '@/components/marketing/about/MissionSection';
import ValuesSection from '@/components/marketing/about/ValuesSection';
import TeamSection from '@/components/marketing/about/TeamSection';
import FinalCTA from '@/components/marketing/about/FinalCTA';

export default function AboutPage() {
  return (
    <>
      
      <main>
        <AboutHero />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <FinalCTA />
      </main>

    </>
  );
}
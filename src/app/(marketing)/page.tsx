'use client'

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import HowItWorks from "@/components/ui/HowItWorks";
import Footer from "@/components/ui/Footer";
import Coverage from "@/components/ui/Coverage";
import CTA from "@/components/ui/CTA"

export default function MarketingPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <Hero/>
      <Services/>
      <HowItWorks/>
      <Coverage/>
      <CTA/>
    </div>
  );
}
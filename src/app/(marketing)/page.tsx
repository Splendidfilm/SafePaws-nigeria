'use client'

// import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import HowItWorks from "@/components/marketing/HowItWorks";
// import Footer from "@/components/marketing/Footer";
import Coverage from "@/components/marketing/Coverage";
import CTA from "@/components/marketing/CTA"

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
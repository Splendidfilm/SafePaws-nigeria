'use client'

// import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import HowItWorks from "@/components/marketing/HowItWorks";
// import Footer from "@/components/marketing/Footer";
import Coverage from "@/components/marketing/Coverage";
import CTA from "@/components/marketing/CTA"
import GetStarted from "@/components/marketing/GetStarted";
import Ecosystem from "@/components/marketing/EcosystemSection";
import Testimonials from "@/components/marketing/Testimonials";

export default function MarketingPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans w-full ">
      <Hero/>
      <GetStarted/>
      <Services/>
      <Ecosystem/>
      <HowItWorks/>
      <Testimonials/>
      <Coverage/>
      <CTA/>
    </div>
  );
}
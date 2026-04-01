'use client'
// import "./globals.css";
// import Image from "next/image";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import HowItWorks from "@/components/marketing/HowItWorks";
import Footer from "@/components/marketing/Footer";
import Coverage from "@/components/marketing/Coverage";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
    <Navbar/>
    <Hero/>
    <Services/>
    <HowItWorks/>
    <Coverage/>
    {/* <Footer/> */}
    </div>
  );
}

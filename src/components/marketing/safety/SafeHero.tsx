// src/components/marketing/safety/SafetyHero.tsx
import Image from "next/image";


export default function SafetyHero() {
  return (
    <section className="relative h-105 flex items-center justify-center overflow-hidden w-full ">
      <div className="absolute inset-0 bg-linear-to-r from-[#17CFAD]/40 to-[#17CFAD]/30 z-10" />
      
      <Image 
        src="/images/Hero.png" 
        alt="Pet handler with golden retriever"
        fill
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          SafePaws Nigeria Safety Standards
        </h1>
        <p className="text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto">
          Our uncompromising commitment to the security and well-being of your companion during transit.
        </p>
      </div>
    </section>
  );
}
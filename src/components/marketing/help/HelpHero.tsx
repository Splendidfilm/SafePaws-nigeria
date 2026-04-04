// src/components/marketing/help/HelpHero.tsx

import Image from "next/image";

export default function HelpHero() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[#17cfade1]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10  ">
        <Image
          src="/images/helpcenter_hero.png" 
          alt="Happy pet in car"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          How can we help you and your pet today?
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto group">
          <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">
            search
          </span>
          <input 
            type="text" 
            placeholder="Search for articles, tracking, or safety protocols..." 
            className="w-full pl-16 pr-6 py-5 rounded-2xl border-none shadow-xl focus:ring-4 focus:ring-white/50 text-lg bg-white text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Popular Searches */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="text-white/80 text-sm mt-1">Popular:</span>
          <a href="#" className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-white transition-colors">
            Booking a flight
          </a>
          <a href="#" className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-white transition-colors">
            Safety standards
          </a>
          <a href="#" className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-white transition-colors">
            Refund policy
          </a>
        </div>
      </div>
    </section>
  );
}
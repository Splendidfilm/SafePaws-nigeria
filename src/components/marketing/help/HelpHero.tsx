// src/components/marketing/help/HelpHero.tsx

import Image from "next/image";

export default function HelpHero() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-[#0d9e85] via-[#0f7fa8] to-[#0a5f8a]">
      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-8 right-20 w-28 h-28 rounded-full bg-white/[0.04] pointer-events-none" />

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image
          src="/images/helpcenter_hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-5">
          <span className="material-symbols-outlined text-[14px] text-white">headset_mic</span>
          <span className="text-[11px] font-semibold text-white/95 uppercase tracking-widest">Help Center</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.15)]">
          How can we help you<br className="hidden md:block" /> and your pet today?
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-[560px] mx-auto mb-5">
          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#0d9e85] text-xl pointer-events-none">
            search
          </span>
          <input
            type="text"
            placeholder="Search articles, tracking, safety protocols…"
            className="w-full pl-14 pr-28 py-[18px] rounded-[14px] border-2 border-transparent focus:border-[#0d9e85]/40 shadow-[0_8px_40px_rgba(0,0,0,0.15)] focus:ring-4 focus:ring-white/30 text-[15px] bg-white text-zinc-900 placeholder:text-[#9ab8b3] outline-none transition-all"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0d9e85] hover:bg-[#0b8a74] text-white text-[13px] font-semibold px-4 py-2.5 rounded-[10px] flex items-center gap-1 transition-colors">
            Search
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span className="text-[11px] font-semibold text-white/60 uppercase tracking-widest">Popular:</span>
          {["Booking a flight", "Safety standards", "Refund policy", "Track my pet"].map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-[13px] font-medium bg-white/12 hover:bg-white/22 border border-white/20 hover:border-white/35 px-3.5 py-1.5 rounded-full text-white/95 transition-all"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
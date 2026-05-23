// src/components/marketing/safety/SafetyHero.tsx
import Image from "next/image";

export default function SafetyHero() {
  const stats = [
    { value: "100%", label: "Vet-verified" },
    { value: "24/7", label: "Live tracking" },
    { value: "0", label: "Incidents" },
  ];

  return (
    <section className="relative h-[520px] md:h-[580px] flex items-center justify-center overflow-hidden w-full">
      {/* Background image */}
      <Image
        src="/images/Hero.png"
        alt="Pet handler with golden retriever"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark gradient overlay — left-heavy so text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e28]/90 via-[#0d4a3a]/65 to-[#0f5c48]/40 z-10" />

      {/* Radial teal glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(23,207,173,0.12) 0%, transparent 55%), radial-gradient(circle at 80% 20%, rgba(23,207,173,0.07) 0%, transparent 45%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#17cfad]/15 border border-[#17cfad]/35 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#17cfad] shadow-[0_0_0_3px_rgba(23,207,173,0.25)] flex-shrink-0" />
          <span className="text-[11px] font-semibold text-[#17cfad] uppercase tracking-widest">
            SafePaws Nigeria
          </span>
        </div>

        <h1 className="text-4xl md:text-[44px] font-extrabold text-white mb-5 tracking-tight leading-[1.15] [text-shadow:0_2px_30px_rgba(0,0,0,0.3)]">
          Our <span className="text-[#17cfad]">Safety Standards</span>
          <br />
          for Every Journey
        </h1>

        <p className="text-base md:text-lg text-white/75 font-normal leading-relaxed max-w-lg mx-auto mb-8">
          An uncompromising commitment to the security and well-being of your
          companion during transit — from pickup to destination.
        </p>

        {/* Stats bar */}
        <div className="flex divide-x divide-white/10 border border-white/10 rounded-[14px] overflow-hidden bg-white/5 backdrop-blur-sm max-w-md mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex-1 py-3.5 px-2 text-center">
              <div className="text-xl font-bold text-[#17cfad] leading-none mb-1">
                {value}
              </div>
              <div className="text-[11px] font-medium text-white/50 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
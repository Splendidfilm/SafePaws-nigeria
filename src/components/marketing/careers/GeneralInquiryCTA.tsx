// src/components/marketing/careers/GeneralInquiryCTA.tsx
export default function GeneralInquiryCTA() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-[#17CFAD] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
          <span className="material-symbols-outlined text-[180px] text-black">pets</span>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don&apos;t see a fit?
          </h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            We&apos;re always looking for exceptional talent to join our pack. 
            Send us your resume and tell us how you can help SafePaws grow.
          </p>

          <button className="bg-white text-[#17CFAD] px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all active:scale-95">
            Send General Inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
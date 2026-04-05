// src/components/marketing/safety/SafetyCTA.tsx
export default function SafetyCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <div className="bg-[#17CFAD] rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden">
        
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-20 -mb-20" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready for a worry-free journey?
          </h2>
          
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Download our comprehensive 12-page Safety Whitepaper or get a personalized quote for your pet&apos;s travel today.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-[#17CFAD] px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform active:scale-95">
              Get a Quote
            </button>
            
            <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              Download PDF Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
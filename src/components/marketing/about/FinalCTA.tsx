// src/components/marketing/about/FinalCTA.tsx

import Button from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 border-b border-b-zinc-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#17CFAD] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-white rounded-full" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
            Ready to move with peace of mind?
          </h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto relative z-10">
            Join thousands of Nigerian pet owners who trust SafePaws for long-distance and local relocation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
           <Button
           variant="about"
            size="lg"
           >Book a Trip Now</Button>
           <Button
           variant='aboutOutline'
           size='lg'
           >Contact Sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
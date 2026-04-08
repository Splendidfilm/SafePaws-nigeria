// src/components/marketing/about/MissionSection.tsx
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-24 bg-[#F1F5F3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing a sanctuary on wheels for NigeriaZ&apos;s beloved companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {/* Safe & Reliable - Large Card */}
          <div className="md:col-span-2 bg-[#17CFAD] p-10 rounded-3xl flex flex-col justify-end relative overflow-hidden group">
            <span className="material-symbols-outlined text-white text-9xl cursor-default absolute top-6 right-6 transition-transform  ">
shield_with_heart
</span>
            <h3 className="text-3xl font-black text-white mb-3 relative z-10">Safe & Reliable</h3>
            <p className="text-white/80 max-w-md relative z-10">
              Every vehicle is climate-controlled and GPS-tracked, ensuring your pet is never out of sight or out of comfort.
            </p>
          </div>

          {/* Vetted Professionalism */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#D1F5EF] rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#17CFAD]">verified</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vetted Professionalism</h3>
            <p className="text-gray-600 text-sm">Our drivers undergo rigorous background checks and pet-first-aid certification.</p>
          </div>

          {/* Real-time Updates */}
          <div className="bg-gray-900 p-10 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
            <p className="text-white/70 text-sm">Photos and location pings sent to your phone every hour of the journey.</p>
          </div>

          {/* Image Card */}
          <div className="md:col-span-2 rounded-3xl overflow-hidden relative group">
            <Image 
              src="/images/mission_image.png" 
              alt="Safe Transport"
              fill
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-10">
              <p className="text-white font-medium">Standardizing comfort across every kilometer of Nigerian roads.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
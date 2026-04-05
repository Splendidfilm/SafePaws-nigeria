// src/components/marketing/safety/CoreProtocols.tsx



export default function CoreProtocols() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Climate Control - Large Card */}
        <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100 relative overflow-hidden group flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#17CFAD] text-4xl">ac_unit</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Precision Climate Control</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Nigerian heat demands expert management. Our transit units maintain a consistent 22°C-24°C, monitored in real-time to prevent heat stress.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white border border-[#17CFAD]/20 rounded-full text-xs font-bold text-[#17CFAD]">REAL-TIME TELEMETRY</span>
            <span className="px-4 py-2 bg-white border border-[#17CFAD]/20 rounded-full text-xs font-bold text-[#17CFAD]">AUXILIARY POWER</span>
          </div>

          <span className="material-symbols-outlined absolute -right-16 -bottom-16 text-[220px] text-[#17CFAD]/5 group-hover:scale-110 transition-transform">thermostat</span>
        </div>

        {/* Handler Training */}
        <div className="bg-[#D1F5EF] rounded-3xl p-10 border border-[#17CFAD]/10">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-[#17CFAD] text-4xl">school</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certified Handlers</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Every SafePaws agent undergoes 200+ hours of behavioral training and canine first-aid certification.
          </p>
          <ul className="space-y-4 text-gray-700 text-sm">
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#17CFAD]">check_circle</span> IPATA Certified</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#17CFAD]">check_circle</span> Fear-Free Handling</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#17CFAD]">check_circle</span> Crisis Management</li>
          </ul>
        </div>

        {/* Pre-Travel Prep */}
        <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-100">
          <h3 className="text-xl font-bold text-[#17CFAD] uppercase tracking-widest mb-8">Pre-Travel Prep Guide</h3>
          
          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="w-8 h-8 bg-[#17CFAD] text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">Hydration Strategy</h4>
                <p className="text-gray-600 text-sm mt-1">Increase water intake 48 hours prior. Avoid solid food 6 hours before departure to prevent motion sickness.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-8 h-8 bg-[#17CFAD] text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Familiarization</h4>
                <p className="text-gray-600 text-sm mt-1">Introduce the travel crate at home with favorite toys and blankets to create a &apossafe zone&apos; association.</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-8 h-8 bg-[#17CFAD] text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Exercise Burn</h4>
                <p className="text-gray-600 text-sm mt-1">A long walk or vigorous play session before pickup helps ensure your pet rests during the journey.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-5 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
            <p className="text-red-600 text-sm font-medium flex items-start gap-2">
              <span className="material-symbols-outlined">warning</span>
              NEVER sedate your pet for travel unless explicitly ordered by a SafePaws veterinary partner.
            </p>
          </div>
        </div>

        {/* Documentation & Emergency */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Required Health Documents</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="font-medium">Rabies Vaccination (valid 12 months)</span>
                <span className="material-symbols-outlined text-[#17CFAD]">verified</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="font-medium">General Fitness Certificate</span>
                <span className="material-symbols-outlined text-[#17CFAD]">verified</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <span className="font-medium">State Veterinary Endorsement</span>
                <span className="material-symbols-outlined text-[#17CFAD]">verified</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4">Emergency Protocol</h3>
            <p className="text-white/70 mb-8">
              Our &apos;Red Alert&apos; system guarantees immediate veterinary intervention within 30 minutes anywhere in Nigeria.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">emergency_share</span>
                <span>24/7 Veterinary Hotline</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#17CFAD]">location_on</span>
                <span>GPS-Linked Emergency Dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
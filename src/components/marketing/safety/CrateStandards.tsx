// src/components/marketing/safety/CrateStandards.tsx
import Image from "next/image";

export default function CrateStandards() {
  return (
    <section className="bg-[#F8FAF9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative h-96">
            <Image 
              src="/images/crate.png" 
              alt="SafeCrate system"
              fill
              className="rounded-3xl shadow-2xl border-8 border-white w-full"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <span className="text-[#17CFAD] font-bold tracking-widest uppercase text-sm mb-4 block">
              Hardware Standards
            </span>
            
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              The SafeCrate™ System
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We follow IATA Live Animals Regulations (LAR) strictly. If your crate doesn&apos;t meet these specs, we provide rental units to ensure total safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl mt-1">grid_view</span>
                <div>
                  <h4 className="font-bold text-gray-900">Ventilation</h4>
                  <p className="text-gray-600 text-sm mt-1">Minimum 4-side ventilation for optimal airflow.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl mt-1">lock</span>
                <div>
                  <h4 className="font-bold text-gray-900">Security</h4>
                  <p className="text-gray-600 text-sm mt-1">Metal bolts and spring-loaded door locks only.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl mt-1">aspect_ratio</span>
                <div>
                  <h4 className="font-bold text-gray-900">Size Ratio</h4>
                  <p className="text-gray-600 text-sm mt-1">Must allow pet to stand, turn, and lie down naturally.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl mt-1">restaurant</span>
                <div>
                  <h4 className="font-bold text-gray-900">Provisioning</h4>
                  <p className="text-gray-600 text-sm mt-1">Two fixed bowls accessible from outside the door.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
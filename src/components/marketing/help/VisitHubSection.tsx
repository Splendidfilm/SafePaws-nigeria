// src/components/marketing/help/VisitHubSection.tsx
import Image from "next/image";

export default function VisitHubSection() {
  return (
    <section className="w-full mx-auto px-6 py-20">
      <div className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Content */}
        <div className="p-10 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Visit our Support Hub</h3>
          <p className="text-gray-600 mb-8">
            For physical document drop-offs or in-person consultations, visit our regional headquarters in Lagos.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#17CFAD] text-2xl mt-1">location_on</span>
              <div>
                <p className="font-medium text-gray-900">12 Victoria Island Expressway</p>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-[#17CFAD] text-2xl mt-1">call</span>
              <div>
                <p className="font-medium text-gray-900">+234 (0) 800-PET-MOVE</p>
                <p className="text-gray-600">Toll-free support line</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Map / Image Area */}
        <div className="md:w-1/2 min-h-80 md:min-h-100 relative bg-gray-200 overflow-hidden">
          <Image 
            src="/images/bottom_image_Help.png" 
            alt="Lagos Support Hub Map"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-[#17CFAD]/10 mix-blend-multiply" />

          {/* Location Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-14 h-14 bg-white text-[#17CFAD] rounded-full flex items-center justify-center shadow-2xl ring-8 ring-white/50">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
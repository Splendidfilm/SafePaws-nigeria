import React from 'react';
import Button from "../ui/button";
// If you're still using Material Symbols, make sure the font is loaded in your layout

export default function Coverage() {
  return (
    <div className="w-full bg-[#F6F8F8] py-16" id="coverage">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Covering Key Nigerian Hubs
            </h2>
            
            <p className="text-[#5F8881] text-base md:text-lg max-w-lg">
              SafePaws Nigeria currently operates dedicated routes between major economic centers. 
              We are expanding to more cities soon.
            </p>

            {/* City List */}
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:border-[#17CFAD]/30 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-[#D1F5EF] rounded-xl">
                  <span className="material-symbols-outlined text-[#17CFAD] text-3xl">location_city</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Lagos Metropolis</p>
                  <p className="text-xs text-[#5F8881]">Main Hub (Ikeja, Lekki, VI)</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:border-[#17CFAD]/30 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-[#D1F5EF] rounded-xl">
                  <span className="material-symbols-outlined text-[#17CFAD] text-3xl">location_on</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Abuja (FCT)</p>
                  <p className="text-xs text-[#5F8881]">Daily Interstate Connections</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:border-[#17CFAD]/30 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-[#D1F5EF] rounded-xl">
                  <span className="material-symbols-outlined text-[#17CFAD] text-3xl">directions_boat</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Port Harcourt</p>
                  <p className="text-xs text-[#5F8881]">Weekly Scheduled Trips</p>
                </div>
              </div>
            </div>

            <Button type="Check My Location" className="mt-6" />
          </div>

          {/* Right Map Section */}
          <div className="flex-1 w-full md:w-1/2">
            <div className="relative w-full aspect-square bg-white rounded-3xl shadow-xl overflow-hidden">
              
              {/* Map Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&auto=format&fit=crop")`
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/90" />

              {/* Map Pins with Animation */}
              <div className="absolute bottom-[35%] left-[28%] flex flex-col items-center">
                <div className="animate-bounce">
                  <span className="material-symbols-outlined text-[#17CFAD] text-5xl drop-shadow-md">location_on</span>
                </div>
                <div className="mt-1 bg-white px-3 py-1 rounded-lg shadow text-xs font-bold text-[#17CFAD] whitespace-nowrap">
                  Lagos
                </div>
              </div>

              <div className="absolute top-[38%] right-[32%] flex flex-col items-center" style={{ animationDelay: '300ms' }}>
                <div className="animate-bounce">
                  <span className="material-symbols-outlined text-[#17CFAD] text-5xl drop-shadow-md">location_on</span>
                </div>
                <div className="mt-1 bg-white px-3 py-1 rounded-lg shadow text-xs font-bold text-[#17CFAD] whitespace-nowrap">
                  Abuja
                </div>
              </div>

              {/* Optional third pin */}
              <div className="absolute top-[65%] left-[55%] flex flex-col items-center" style={{ animationDelay: '600ms' }}>
                <div className="animate-bounce">
                  <span className="material-symbols-outlined text-[#17CFAD] text-4xl drop-shadow-md">location_on</span>
                </div>
                <div className="mt-1 bg-white px-3 py-1 rounded-lg shadow text-xs font-bold text-[#17CFAD]">
                  PH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
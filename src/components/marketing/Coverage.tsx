import Button from "../ui/button";

export default function Coverage() {
  return (
    <div className="w-full bg-[] py-16" id="coverage">
      <div className="px-4 md:px-10 lg:px-40  mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 flex-1">
            <h2 className="text-[--color-text-main] text-3xl font-bold leading-tight">
              Covering Key Nigerian Hubs
            </h2>
            <p className="text-[#5F8881] text-base">
              SafePaws Nigeria currently operates dedicated routes between major economic centers. 
              We are expanding to more cities soon.
            </p>

            {/* City List */}
            <ul className="flex flex-col gap-3 mt-2">
              <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <span className="material-symbols-outlined text-[#17CFAD]">location_city</span>
                <div>
                  <span className="block text-[#17CFAD] font-bold">Lagos Metropolis</span>
                  <span className="text-xs text-[#5F8881]">Main Hub (Ikeja, Lekki, VI)</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <span className="material-symbols-outlined text-[#17CFAD]">temple_buddhist</span>
                <div>
                  <span className="block text-[#17CFAD] font-bold">Abuja (FCT)</span>
                  <span className="text-xs text-[#5F8881]">Daily Interstate Connections</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <span className="material-symbols-outlined text-[#17CFAD]">directions_boat</span>
                <div>
                  <span className="block text-[#17CFAD] font-bold">Port Harcourt</span>
                  <span className="text-xs text-[#5F8881]">Weekly Scheduled Trips</span>
                </div>
              </li>
            </ul>

        <Button type="Check My Location" />
          </div>

          {/* Right Map */}
          <div className="flex md:w-1/2 w-full">
            <div className="relative w-full aspect-square  bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 bg-cover bg-center opacity-80 w-full h-full" 
                   style={{backgroundImage: 'url("https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&auto=format")'}} 
                //    loading='eagar'
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />

              {/* Map Pins */}
              <div className="absolute bottom-1/4 left-1/4 flex flex-col items-center animate-bounce">
                <span className="material-symbols-outlined text-[#17CFAD] text-4xl drop-shadow-md">location_on</span>
                <span className="bg-white text-xs font-bold px-2 py-1 rounded shadow text-[#17CFAD]">Lagos</span>
              </div>
              
              <div className="absolute top-1/3 left-1/2 flex flex-col items-center animate-bounce" style={{animationDelay: '200ms'}}>
                <span className="material-symbols-outlined text-[#17CFAD] text-4xl drop-shadow-md">location_on</span>
                <span className="bg-white text-xs font-bold px-2 py-1 rounded shadow text-[#17CFAD]">Abuja</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
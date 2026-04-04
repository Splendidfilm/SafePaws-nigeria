// src/components/marketing/press/LatestNews.tsx

// import  Image  from "next/image";

import Image  from "next/image";

export default function LatestNews() {
  return (
    <section id="latest-news" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <p className="text-gray-600 mt-2">External media coverage and editorial features</p>
          </div>
          <button className="text-[#17CFAD] font-bold flex items-center gap-2 hover:gap-3 transition-all group">
            View All Coverage
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Featured Article */}
          <div className="md:col-span-8 relative rounded-3xl overflow-hidden group h-130">
            <Image 
              src="/images/Safe.png" 
              alt="SafePaws in the news"
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="bg-white/90 text-[#17CFAD] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                TechFocus Nigeria
              </span>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                How SafePaws is Revolutionizing Regional Pet Relocation
              </h3>
              <p className="text-white/80 max-w-xl mb-6">
                An in-depth look at our climate-controlled fleet and proprietary tracking technology.
              </p>
              <a href="#" className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Read Full Article <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Side Articles */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Article 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all flex-1 flex flex-col justify-between">
              <div>
                <span className="text-gray-500 text-sm">BusinessDay • 2 days ago</span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 leading-snug">
                  SafePaws Announces Strategic Expansion to West African Hubs
                </h3>
                <p className="text-gray-600 mt-4 text-sm">
                  New logistics routes established connecting Lagos to Accra and Abidjan.
                </p>
              </div>
              <a href="#" className="mt-6 text-[#17CFAD] font-bold flex items-center gap-2 text-sm">
                Read More <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>

            {/* Article 2 */}
            <div className="bg-[#D1F5EF]/30 p-8 rounded-3xl border border-[#17CFAD]/20 hover:shadow-xl transition-all flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[#17CFAD] font-semibold text-sm">Daily Trust • Oct 12, 2024</span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 leading-snug">
                  The Rising Demand for Professional Pet Sitters and Movers in Nigeria
                </h3>
              </div>
              <a href="#" className="mt-6 text-[#17CFAD] font-bold flex items-center gap-2 text-sm">
                Read More <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>
          </div>

          {/* Bottom Wide Article */}
          <div className="md:col-span-12 bg-gray-900 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 rounded-2xl overflow-hiddenwe shrink-0">
            {/* <Image
                src={'/images/Dog_image_GR.png'}
                alt="Dog with SafePaws branding"
                fill
                className="w-full h-full object-cover rounded-2xl"
                priority
                /> */}
            </div>
            <div className="flex-1">
              <span className="text-[#17CFAD] text-sm font-medium">Vanguard News • Oct 05, 2024</span>
              <h3 className="text-2xl font-bold text-white mt-3 leading-tight">
                SafePaws Hits 10,000 Safe Deliveries Milestone in 2024
              </h3>
              <p className="text-gray-400 mt-4">
                Celebrating three years of excellence and the community that trusts us with their furry family members.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
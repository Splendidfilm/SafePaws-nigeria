// src/components/marketing/press/PressReleases.tsx
export default function PressReleases() {
  return (
    <section className="py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-12">
          Official Press Releases
        </h2>

        <div className="space-y-6">
          {/* Release 1 */}
          <div className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#17CFAD] transition-all flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-col items-center justify-center bg-gray-100 w-20 h-20 rounded-2xl border border-gray-200 group-hover:bg-[#D1F5EF] group-hover:border-[#17CFAD] transition-all">
                <span className="text-xs font-bold text-gray-500">NOV</span>
                <span className="text-3xl font-black text-gray-900">15</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#17CFAD] transition-colors">
                  SafePaws Nigeria Partners with Major Airlines for &apos;Air-Paws&apos; Priority Service
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  LAGOS, NIGERIA — SafePaws today announced a landmark partnership to streamline pet air travel procedures...
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex gap-3">
              <button className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined">download</span> PDF
              </button>
              <button className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>

          {/* Release 2 */}
          <div className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-[#17CFAD] transition-all flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-col items-center justify-center bg-gray-100 w-20 h-20 rounded-2xl border border-gray-200 group-hover:bg-[#D1F5EF] group-hover:border-[#17CFAD] transition-all">
                <span className="text-xs font-bold text-gray-500">OCT</span>
                <span className="text-3xl font-black text-gray-900">28</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#17CFAD] transition-colors">
                  New &apos;Safety First&apos; Protocol Certification Program for Independent Handlers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  ABUJA, NIGERIA — Elevating industry standards through rigorous safety and hygiene certifications for all partners...
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex gap-3">
              <button className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined">download</span> PDF
              </button>
              <button className="px-5 py-2.5 text-sm font-medium border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
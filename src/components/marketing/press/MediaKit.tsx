// src/components/marketing/press/MediaKit.tsx
export default function MediaKit() {
  return (
    <section id="media-kit" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          {/* Decorative background icon */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <span className="material-symbols-outlined text-[180px] text-white">folder_zip</span>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Media Kit & Brand Assets
            </h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Download our official logo package, brand guidelines, and high-resolution photography for use in editorial coverage and partnership materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Package */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
              <div className="w-12 h-12 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl">palette</span>
              </div>
              <h4 className="text-white text-xl font-bold mb-3">Logo Package</h4>
              <p className="text-gray-400 text-sm mb-8">EPS, PNG, and SVG formats in all primary brand variations.</p>
              <button className="w-full py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-[#D1F5EF] hover:text-[#17CFAD] transition-all flex items-center justify-center gap-2">
                Download ZIP <span className="material-symbols-outlined">download</span>
              </button>
            </div>

            {/* High-Res Photos */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
              <div className="w-12 h-12 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl">photo_library</span>
              </div>
              <h4 className="text-white text-xl font-bold mb-3">High-Res Photos</h4>
              <p className="text-gray-400 text-sm mb-8">Professional imagery of our vehicles, facilities, and team.</p>
              <button className="w-full py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-[#D1F5EF] hover:text-[#17CFAD] transition-all flex items-center justify-center gap-2">
                Download ZIP <span className="material-symbols-outlined">download</span>
              </button>
            </div>

            {/* Executive Bios */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
              <div className="w-12 h-12 bg-[#D1F5EF] rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#17CFAD] text-3xl">description</span>
              </div>
              <h4 className="text-white text-xl font-bold mb-3">Executive Bios</h4>
              <p className="text-gray-400 text-sm mb-8">Professional headshots and biographies of our leadership team.</p>
              <button className="w-full py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-[#D1F5EF] hover:text-[#17CFAD] transition-all flex items-center justify-center gap-2">
                Download ZIP <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
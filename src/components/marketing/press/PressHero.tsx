// src/components/marketing/press/PressHero.tsx
export default function PressHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#F8FAF9]  bg-cover bg-center w-full ">
      <div className="absolute inset-0 bg-linear-to-br from-[#17CFAD]/10 to-transparent" />

      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#D1F5EF]/10 rounded-l-full blur-3xl" />

      <div className="  w-full h-full mx-auto px-6 relative z-10 ">
        <div className="max-w-2xl  ">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 mb-6 leading-tight">
            SafePaws in the News
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            The latest updates, press releases, and media resources from Nigeria&apos;s leader in professional pet relocation and safe animal transit.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
            className="bg-[#17CFAD] text-white px-8 py-4 rounded-2xl font-bold ex items-center gap-2 hover:shadow-lg transition-all" >
                <a 
              href="#latest-news" 
            >
              Latest Coverage
              <span className="material-symbols-outlined text-sm  items-center justify-center flex ">arrow_downward</span>
            </a>
            </button>
            <button 
            className="bg-white border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all " >
             <a 
              href="#media-kit" 
              
            >
              Media Kit
            </a>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
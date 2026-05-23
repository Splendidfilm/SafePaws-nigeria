// src/components/marketing/press/PressReleases.tsx

import { title } from "process";

const Info =[
  {title:"SafePaws Nigeria Partners with Major Airlines for 'Air-Paws ' Priority Service", 
  subText:'LAGOS, NIGERIA — SafePaws today announced a landmark partnership to streamline pet air travel procedures...',},
  {title:" New 'Safety First' Protocol Certification Program for Independent Handlers", subText:" ABUJA, NIGERIA — Elevating industry standards through rigorous safety and hygiene certifications for all partners..."}
]

export default function PressReleases() {
  return (
    <section className="py-20 bg-[#F8FAF9] dark:bg-[#11211e] ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight mb-12 dark:text-zinc-50 ">
          Official Press Releases
        </h2>

        <div className="space-y-6">
          {Info.map((info, index)=>(
             <div
             key={index}
             className="group bg-white p-8 rounded-3xl border border-zinc-100 hover:border-[#17CFAD] transition-all flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-col items-center justify-center bg-zinc-100 w-20 h-20 rounded-2xl border border-zinc-200 group-hover:bg-[#D1F5EF] group-hover:border-[#17CFAD] transition-all">
                <span className="text-xs font-bold text-zinc-500">NOV</span>
                <span className="text-3xl font-black text-zinc-900">15</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#17CFAD] transition-colors">
                  {info.title}
                </h3>
                <p className="text-zinc-600 text-sm mt-2">
                  {info.subText}
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex gap-3">
              <button className="px-5 py-2.5 text-sm font-medium border border-zinc-200 rounded-xl flex items-center gap-2 hover:bg-zinc-50 transition-colors dark:bg-zinc-900 dark:hover:bg-zinc-800 ">
                <span className="material-symbols-outlined">download</span> PDF
              </button>
              <button className="px-5 py-2.5 text-sm font-medium border border-zinc-200 rounded-xl flex items-center gap-2 hover:bg-zinc-50 transition-colors dark:bg-zinc-900 dark:hover:bg-zinc-800 ">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
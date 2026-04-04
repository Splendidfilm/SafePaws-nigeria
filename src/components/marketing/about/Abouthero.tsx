// src/components/marketing/about/AboutHero.tsx
// 'use client'
import Image from "next/image";
export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <span className="text-[#17CFAD] font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight mb-6">
            Founded by <span className="text-[#17CFAD]">Pet Lovers</span>, Built for Safety.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
            SafePaws Nigeria began with a simple observation: pets aren&apos;t just luggage—they are family. 
            Born in Lagos, we set out to redefine regional pet transport with a &apos;   safety first&apos; mindset.
          </p>

          <div className="flex gap-8">
            <div className="border-r-2 border-gray-300 pr-5" >
              <span className="text-4xl font-black text-[#17CFAD]  ">5k+</span>
              <p className="text-sm text-gray-500 ">Happy Pets</p>
            </div>
            <div className="border-r-2 border-gray-300 pr-5">
              <span className="text-4xl font-black text-[#17CFAD]">36</span>
              <p className="text-sm text-gray-500">States Covered</p>
            </div>
            <div>
              <span className="text-4xl font-black text-[#17CFAD]">100%</span>
              <p className="text-sm text-gray-500">Safety Record</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D1F5EF]/30 rounded-full blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 w-full h-125">
            <Image 
              src={'/images/about_hero.png'}
              alt="Founders with pet"
              fill
              className="w-full h-125 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
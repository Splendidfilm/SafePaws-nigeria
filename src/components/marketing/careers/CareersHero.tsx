// src/components/marketing/careers/CareersHero.tsx
'use client'
import { motion } from "framer-motion";

import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full" >
          <span className="inline-block py-1 px-4 rounded-full bg-[#D1F5EF] text-[#007A6B] text-sm font-bold tracking-wider mb-6">
            CAREERS
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-8">
            Join Our <span className="text-[#17CFAD]">Pack</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed mb-10">
            We&apos;re building the future of pet logistics in Nigeria. Help us create a world where every pet journey is safe, comfortable, and full of love.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#open-roles" 
              className="bg-[#17CFAD] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#12A88F] transition-all"
            >
              View Openings
            </a>
            <a 
              href="#culture" 
              className="border-2 border-gray-300 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all"
            >
              Our Culture
            </a>
          </div>
        </div>

        <motion.div 
        initial={{ opacity: 0, x: 50,  }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1, ease: "easeInOut",}}
        className="relative h-full w-full ">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform object-cover rotate-3 transition-transform duration-500 h-full w-full">
            <Image 
              src="/images/Careers_hero.png"  
              fill
              alt="Team with dog"
              priority
              className="w-full h-125 object-cover rounded-3xl "

            />
          </div>

          {/* Pet-Friendly Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-[#D1F5EF] p-3 rounded-full">
                <span className="material-symbols-outlined text-[#17CFAD]">pets</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">100% Pet Friendly</p>
                <p className="text-xs text-gray-500">Office dogs are our VPs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
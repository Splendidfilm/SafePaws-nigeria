'use client'
import React from 'react';
import Button from "../ui/button";
import Image from 'next/image';
import { motion } from 'framer-motion';
// If you're still using Material Symbols, make sure the font is loaded in your layout

const cityList =[
  {city:'Lagos Metropolis ', desc:'Main Hub (Ikej, Lekki, VI)', icon:'location_city'  },
   {city:'Abuja (FCT) ', desc:'Dail Interstate Connections', icon:'location_on' }, 
   {city:'Lagos Metropolis ', desc:'weekly Schduled Trips', icon:'directions_boat'  },
]

export default function Coverage() {
  return (
    <div className="w-full bg-[#F6F8F8] dark:bg-[#11211e] py-16" id="coverage">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight dark:text-zinc-50 ">
              Covering Key Nigerian Hubs
            </h2>
            
            <p className="text-[#5F8881] text-base md:text-lg max-w-lg dark:text-zinc-300">
              SafePaws Nigeria currently operates dedicated routes between major economic centers. 
              We are expanding to more cities soon.
            </p>

            {/* City List */}
            {cityList.map((item,index)=>(
               <motion.div 
               key={index}
             initial={{ opacity:0, x:-13 }}
             whileInView={{ opacity:2, x:0 }}
             viewport={{once: true}}
             transition={{ ease:'linear', duration:0.5, delay:0.5 }}
             className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:border-[#17CFAD]/30 transition-colors dark:bg-[#1a2e2b] dark:border-white/30 ">
                <div className="w-10 h-10 flex items-center justify-center bg-[#D1F5EF] rounded-xl">
                  <span className="material-symbols-outlined text-[#17CFAD] text-3xl">{item.icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-zinc-100 ">{item.city}</p>
                  <p className="text-xs text-[#5F8881] dark:text-zinc-300 ">{item.desc}</p>
                </div>

             
            </motion.div>
            ))}

            <Button className="mt-6" variant='primary' >Check My Location</Button>
          </div>

          {/* Right Map Section */}
          <div className="flex-1 w-full md:w-1/2">
            <div className="relative w-full aspect-square bg-white rounded-3xl shadow-xl overflow-hidden">
              
              {/* Map Background */}
              <Image
              src={'/images/map_marketing.png'}
              fill
              alt='map'
              className='absolute inset-0 bg-cover bg-center'
              priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/30 to-white/90 dark:via-[#11211e]/30 dark:to-[#11211e]/70 " />

              {/* Map Pins with Animation */}
              <div className="absolute bottom-[35%] left-[28%] flex flex-col items-center">
                <div className="animate-bounce">
                  <span className="material-symbols-outlined text-[#17CFAD] text-5xl drop-shadow-md">location_on</span>
                </div>
                <div className="mt-1 bg-white px-3 py-1 rounded-lg shadow text-xs font-bold text-[#17CFAD] whitespace-nowrap">
                  Lagos
                </div>
              </div>

              <div className="absolute top-[38%] right-[32%] flex flex-col items-center">
                <div className="animate-bounce">
                  <span className="material-symbols-outlined text-[#17CFAD] text-5xl drop-shadow-md shadow-white shadow-2xl">location_on</span>
                </div>
                <div className="mt-1 bg-white px-3 py-1 rounded-lg shadow text-xs font-bold text-[#17CFAD] whitespace-nowrap">
                  Abuja
                </div>
              </div>

              {/* Optional third pin */}
              <div className="absolute top-[65%] left-[55%] flex flex-col items-center">
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
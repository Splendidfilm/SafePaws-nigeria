// src/components/marketing/GetStarted.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import GetStartedCard from './GetStartedCard';
import { UserPlus, PawPrint, ShieldCheck } from 'lucide-react';
import { once } from 'events';

const cardDetails = [
  {
    icon: UserPlus,
    title: "Create an account",
    description: "Join our community in seconds with a simple signup process to access all features."
  },
  {
    icon: PawPrint,
    title: "Register your pet",
    description: "Add your furry friends' profiles including health records and specific travel needs."
  },
  {
    icon: ShieldCheck,
    title: "Track, report and protect",
    description: "Monitor journeys, access health reports, and keep your pets safe with our ecosystem."
  },
];

export default function GetStarted() {
  return (
    <section className="w-full bg-white py-16 dark:bg-bg ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-primary  font-semibold tracking-wider text-sm mb-2">
            Onboarding
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Get Started with SafePaws
          </h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-1 bg-primary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 gap place-items-center">
          {cardDetails.map((card, index) => (
          <>
            <GetStartedCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
             <motion.div
      initial={{ opacity:0, y: -5  }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{once: true}}
      transition={{ ease:'easeIn', duration:1.5, delay:0.5 }}
      className="md:hidden flex justify-center">
        <div className="flex flex-col items-center gap-1.5">
          <div
            className="w-px h-12 rounded-full"
            style={{
              background: "linear-gradient(to top, rgba(23,207,173,0.7), transparent)",
            }}
          />
        </div>
      </motion.div>
          </>
          ))}
        </div>

      </div>
    </section>
  );
}
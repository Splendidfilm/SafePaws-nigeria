// src/components/marketing/GetStarted.tsx
import React from 'react';
import { motion } from 'framer-motion';
import GetStartedCard from './GetStartedCard';
import { UserPlus, PawPrint, ShieldCheck } from 'lucide-react';

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
    <section className="w-full bg-white py-16 dark:bg-[#11211e] ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="uppercase text-[#17CFAD] font-semibold tracking-wider text-sm mb-2">
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
            className="h-1 bg-[#17CFAD] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {cardDetails.map((card, index) => (
            <GetStartedCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
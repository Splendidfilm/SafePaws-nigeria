// src/components/marketing/Ecosystem.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Stethoscope } from 'lucide-react';
import EcosystemCard from './EcosystemCard';

const ecosystemItems = [
  {
    icon: Search,
    title: "Lost & Found Pets",
    description: "A community-driven tool to help reunite lost pets with their owners. Post alerts and receive real-time notifications in your area.",
  },
  {
    icon: Heart,
    title: "Pet Adoption",
    description: "Browse and connect with pets looking for their forever homes. We partner with verified shelters to facilitate safe adoptions.",
  },
  {
    icon: Stethoscope,
    title: "Vet Services",
    description: "Access a network of trusted veterinarians for checkups and emergency care. Telehealth consultations and house calls available.",
  },
];

export default function Ecosystem() {
  return (
    <section className="w-full bg-white dark:bg-[#11211e] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        
        <div className="text-center mb-12">
          <h2 className="text-[#17CFAD] text-sm font-bold tracking-wider uppercase mb-2">
            Beyond Transport
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Our Ecosystem
          </h3>
          <p className="text-slate-600 dark:text-gray-400 max-w-150 mx-auto mt-4">
            Comprehensive pet care and community tools to support you and your companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystemItems.map((item,index) => (
           <EcosystemCard
           key={index}
           icon={item.icon}
           title={item.title}
           description={item.description}
           />
          ))}
        </div>
      </div>
    </section>
  );
}
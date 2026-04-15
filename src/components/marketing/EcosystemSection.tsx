// src/components/marketing/Ecosystem.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Stethoscope } from 'lucide-react';

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
          <p className="text-slate-600 dark:text-gray-400 max-w-[600px] mx-auto mt-4">
            Comprehensive pet care and community tools to support you and your companion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecosystemItems.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-[#f6f8f8] dark:bg-[#1a2e2b] border border-[#f0f4f4] dark:border-[#2a403d] 
                         rounded-3xl p-8 hover:border-[#17CFAD] hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#D1F5EF] dark:bg-[#17CFAD]/20 
                              rounded-2xl mb-6 group-hover:bg-[#17CFAD] transition-colors">
                <item.icon 
                  size={34} 
                  strokeWidth={2.25}
                  className="text-[#17CFAD] dark:text-[#5efbd7] group-hover:text-white transition-colors" 
                />
              </div>

              <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h4>

              <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                {item.description}
              </p>

              <a 
                href="#" 
                className="mt-auto text-[#17CFAD] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More 
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
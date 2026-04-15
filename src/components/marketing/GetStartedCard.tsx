// src/components/marketing/GetStartedCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type GetStartedProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  // number?: number;        // Optional: if you want to show 1, 2, 3
};

export default function GetStartedCard({
  icon: Icon,
  title,
  description,
  // number,
}: GetStartedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 w-full max-w-95 dark:bg-[#1a2e2b] dark:border-[#2a403d] group -hover:rotate-8 "
    >
      {/* Icon Circle with nice animation */}
      <motion.div
        initial={{ scale: 0.8, rotate: -12 }}
        whileInView={{ 
          scale: 1, 
          rotate: 0,
          backgroundColor: "#17CFAD" 
        }}
      
      
        transition={{
          duration: 0.7,
          ease: "backOut",
          backgroundColor: { duration: 0.4 }
        }}
        className="w-20 h-20 flex items-center justify-center rounded-2xl shadow-md mb-8 group-hover:rotaet-8 transition-all"
      >
        <Icon 
          size={36} 
          strokeWidth={2.5}
          className="text-white" 
        />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-slate-800 text-center mb-4 dark:text-gray-100 ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 text-base leading-relaxed text-center  dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}
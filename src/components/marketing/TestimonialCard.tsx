// src/components/marketing/TestimonialCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

type TestimonialCardProps = {
  quote: string;
  name: string;
  petInfo: string;
  avatarUrl: string;
};

export default function TestimonialCard({
  quote,
  name,
  petInfo,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#f6f8f8] border-2 dark:border-white/20 border-[#e5e7eb] rounded-3xl p-8 relative hover:shadow-xl transition-shadow dark:bg-[#11211e] "
    >
      {/* Quote Icon */}
  <div className="relative mb-10">
    <span className="material-symbols-outlined absolute -left-2 -top-4 text-[#17CFAD]/10 dark:text-white/30 text-8xl rotate-180">
      format_quote
    </span>

    <p className="text-slate-700 dark:text-gray-300 italic leading-relaxed text-[17px] pl-6">
      {quote}
    </p>

    <span className="material-symbols-outlined absolute -right-2 -bottom-6 text-[#17CFAD]/10 dark:text-white/30 text-8xl">
      format_quote
    </span>
  </div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div 
          className="w-14 h-14 rounded-full bg-cover border-2 border-[#17CFAD] shrink-0 dark:border-[#17CFAD]/80"
          style={{ backgroundImage: `url("${avatarUrl}")` }}
        />
        <div>
          <h4 className="font-semibold text-slate-800 dark:text-white">{name}</h4>
          <p className="text-sm text-slate-500 dark:text-gray-400">{petInfo}</p>
        </div>
      </div>
    </motion.div>
  );
}
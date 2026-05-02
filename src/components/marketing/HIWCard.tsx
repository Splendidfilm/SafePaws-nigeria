import React from 'react';
import { motion } from 'framer-motion';
// dark:hover:border-[#1a322e] 
function HIWCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full md:w-2/3 flex flex-col items-center md:items-start bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow dark:bg-[#162a26] dark:border-white/20 dark:border  "
    >
      {/* Number Circle - Auto play animation when in view */}
      <motion.div
        initial={{ 
          scale: 0.6, 
          rotate: -15,
          backgroundColor: '#D1F5EF' 
        }}
        whileInView={{ 
          scale: 1.1,      // This acts like the "hover" scale
          rotate: 10,
          backgroundColor: '#17CFAD'
        }}
        whileHover={{ 
          scale: 1.2, 
          rotate: 0 
        }}
        // viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "backOut",
          backgroundColor: { duration: 0.4, delay: 0.1 }
        }}
        className="w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold text-white shadow-lg mb-6 "
      >
        {number}
      </motion.div>

      <h2 className="text-2xl font-semibold text-slate-800 text-center md:text-left mb-3 dark:text-white ">
        {title}
      </h2>

      <p className="text-slate-600 text-base leading-relaxed text-center md:text-left dark:text-white/80">
        {description}
      </p>
    </motion.div>
  );
}

export default HIWCard;
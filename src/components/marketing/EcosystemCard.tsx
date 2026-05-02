'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

type EcosystemCardPrps ={
    icon: LucideIcon
    title: string
    description: string 
}

export default function EcosystemCard({icon:Icon, title, description}: EcosystemCardPrps) {
  return (
     <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-[#f6f8f8] dark:bg-[#1a2e2b] border border-[#f0f4f4] dark:border-[#2a403d] 
                         rounded-3xl p-8 hover:border-[#17CFAD] hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#D1F5EF] dark:bg-[#17CFAD]/20 
                              rounded-2xl mb-6 group-hover:bg-[#17CFAD] transition-colors">
                <Icon 
                  size={34} 
                  strokeWidth={2.25}
                  className="text-[#17CFAD] dark:text-[#5efbd7] group-hover:text-white transition-colors" 
                />
              </div>

              <h4 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                {title}
              </h4>

              <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed mb-6">
                {description}
              </p>

              <a 
                href="#" 
                className="mt-auto text-[#17CFAD] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More 
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </motion.div>
  )
}

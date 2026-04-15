// src/components/marketing/ServiceCard.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description 
}: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-white dark:bg-[#1a2e2b] shadow-lg rounded-3xl py-10 px-8 gap-6 
                    hover:shadow-2xl hover:-translate-y-1 border border-gray-100 dark:border-[#2a403d] 
                    transition-all duration-300 group w-full">
      
      {/* Icon Container */}
      <div className="bg-[#D1F5EF] dark:bg-[#17CFAD]/20 w-fit rounded-2xl p-4 
                      group-hover:bg-[#17CFAD] transition-colors">
        <Icon 
          size={42} 
          strokeWidth={2.25}
          className="text-[#17CFAD] dark:text-[#5efbd7] group-hover:text-white transition-colors" 
        />
      </div>

      <h3 className="text-slate-900 dark:text-white font-semibold text-2xl leading-tight">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-gray-400 text-[15.5px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
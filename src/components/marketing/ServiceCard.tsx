import React from 'react';
import { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col w-full max-w-sm bg-white shadow-xl rounded-3xl py-8 px-8 gap-6 hover:shadow-2xl transition-all duration-300">
      {/* Icon Container */}
      <div className="bg-[#D1F5EF] w-fit rounded-full p-4">
        <Icon 
          size={40} 
          className="text-[#17CFAD]" 
          strokeWidth={2.2}
        />
      </div>

      {/* Title */}
      <h2 className="text-slate-900 font-bold text-xl leading-tight">
        {title}
      </h2>

      {/* Description */}
      <p className="text-slate-600 text-[15.5px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
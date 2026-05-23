// src/components/marketing/terms/CancellationBox.tsx
'use client'
import React from 'react';
import { X } from 'lucide-react';

export default function CancellationBox() {
  return (
    <section id="cancellation" className="scroll-mt-24">
      <div className="p-8 bg-[#B70000]/10 border-l-4 border-[#B70000] rounded-r-2xl">
        <h2 className="text-xl md:text-2xl font-serif font-bold text-on-surface mb-6 flex items-center gap-3 text-zinc-800">
          {/* <span className="material-symbols-outlined dark:text-[#B70000] text-[#B70000] text-3xl">event_busy</span> */}
       <div className="flex items-center justify-center p-1">
         <X
        size={22}
        color='#B70000'
        />
       </div>
          Cancellation Policy
        </h2>

        <div className="space-y-4 text-sm leading-relaxed text-zinc-900 ">
          <p>
            Cancellations made <span className="font-bold text-on-surface">more than 48 hours</span> 
            before scheduled pickup are eligible for a full refund minus a 10% administrative fee.
          </p>
          
          <p>
            Cancellations made <span className="font-bold text-on-surface">within 24-48 hours</span> 
            of pickup will result in a 50% forfeiture of the total booking fee.
          </p>
          
          <p>
            Cancellations made <span className="font-bold text-on-surface">less than 24 hours</span> 
            before pickup are <span className="font-bold text-error">non-refundable</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
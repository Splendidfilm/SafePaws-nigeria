// src/components/marketing/terms/CancellationBox.tsx

import React from 'react';

export default function CancellationBox() {
  return (
    <section id="cancellation" className="scroll-mt-24">
      <div className="p-8 bg-[#B70000]/10 border-l-4 border-[#B70000] rounded-r-2xl">
        <h2 className="text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#B70000] text-3xl">event_busy</span>
          Cancellation Policy
        </h2>

        <div className="space-y-4 text-sm leading-relaxed">
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
// src/components/marketing/careers/OpenRolesSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion'; 

const roles = [
  {
    id: "pet-handler",
    title: "Pet Handler Specialist",
    location: "Lagos, Nigeria",
    type: "Full-time • Operations",
    badge: "New",
  },
  {
    id: "customer-success",
    title: "Customer Success Champion",
    location: "Abuja, Nigeria",
    type: "Hybrid",
  },
  {
    id: "logistics-coordinator",
    title: "Logistics Coordinator",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    id: "full-stack-engineer",
    title: "Full-Stack Engineer",
    location: "Remote",
    type: "Full-time • Engineering",
  },
];

export default function OpenRolesSection() {
  return (
    <section id="open-roles" className="py-24 bg-[#F8FAF9] dark:bg-[#11211e] ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className='flex w-full flex-col items-center justify-around space-y-7 ' >
            <h2 className="text-5xl font-serif font-bold dark:text-zinc-50 text-zinc-900 mb-3">Open Positions</h2>
            <div className="space-y-3 flex flex-col items-center justify-center w-max  ">
              <span className="italic text-2xl relative text-accent-yellow text-zinc-600 dark:text-zinc-300 mb-3" >Find your place in our family.</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ ease: 'backInOut', duration: 1, }}
                viewport={{ once: true }}
                className="h-[3px] bg-[#17CFAD] rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <div 
              key={role.id}
              className="group bg-white border border-zinc-100 hover:border-[#17CFAD] p-7 text-zinc-800 dark:text-zinc-50 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all dark:bg-[#1a2e2b] dark:border-[#2a403d]  "
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">{role.title}</h3>
                  {role.badge && (
                    <span className="px-3 py-1 text-xs font-bold bg-[#D1F5EF] text-[#17CFAD] rounded-full">
                      {role.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-zinc-600 dark:text-zinc-200 ">
                  <div>{role.location}</div>
                  <div>{role.type}</div>
                </div>
              </div>
              <Link href={`/careers/apply/${role.id}`}>
                <button className="bg-zinc-900 text-white px-8 py-3.5 rounded-2xl font-bold group-hover:bg-[#17CFAD] transition-colors active:scale-95 dark:bg-[#17CFAD]/90 dark:hover:bg-white dark:hover:text-zinc-800 ">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
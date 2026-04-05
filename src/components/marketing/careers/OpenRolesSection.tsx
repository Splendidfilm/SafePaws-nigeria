// src/components/marketing/careers/OpenRolesSection.tsx
'use client';

import Link from 'next/link';

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
    <section id="open-roles" className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Open Positions</h2>
            <p className="text-gray-600">Find your place in our growing family.</p>
          </div>
        </div>

        <div className="space-y-4">
          {roles.map((role) => (
            <div 
              key={role.id}
              className="group bg-white border border-gray-100 hover:border-[#17CFAD] p-7 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all"
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
                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <div>{role.location}</div>
                  <div>{role.type}</div>
                </div>
              </div>
              <Link href={`/careers/apply/${role.id}`}>
                <button className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-bold group-hover:bg-[#17CFAD] transition-colors active:scale-95">
                  Apply Now
                </button>
              </Link>3
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
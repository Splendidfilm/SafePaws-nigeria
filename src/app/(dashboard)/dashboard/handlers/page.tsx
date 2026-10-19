'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, Phone, CheckCircle2, Car } from 'lucide-react';
import { useSafePawsStore } from '@/lib/store';

export default function HandlersPage() {
  const { handlers } = useSafePawsStore();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
            <ShieldCheck size={14} />
            <span>Vetted Veterinary Escorts</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight mb-2 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Certified Pet Handlers
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-sub)' }}>
            Every SafePaws handler is background-checked, veterinary first-aid certified, and driving verified.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {handlers.map((h) => (
          <div
            key={h.id}
            className="rounded-2xl border p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-md"
                  style={{ background: 'var(--color-primary)' }}
                >
                  {h.initials}
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                    {h.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Star size={13} fill="currentColor" />
                    <span>{h.rating} ({h.tripsCount} trips)</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600">
                    ✓ Verified Driver &amp; Vet Tech
                  </span>
                </div>
              </div>

              <p className="text-xs font-medium leading-relaxed" style={{ color: 'var(--color-text-sub)' }}>
                {h.title}
              </p>

              <p className="text-[11px] text-zinc-500 line-clamp-3">
                {h.bio}
              </p>

              <div className="space-y-1.5 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Coverage Zones
                </p>
                <div className="flex flex-wrap gap-1">
                  {h.coverageZones.map((z, zi) => (
                    <span
                      key={zi}
                      className="text-[11px] px-2 py-0.5 rounded-md font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {z}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Vehicle Assigned
                </p>
                <p className="text-xs flex items-center gap-1.5 font-semibold text-zinc-700 dark:text-zinc-300">
                  <Car size={13} className="text-emerald-500 shrink-0" />
                  {h.vehicle}
                </p>
              </div>

              <div className="space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Accreditations
                </p>
                <div className="flex flex-wrap gap-1">
                  {h.certifications.map((c, ci) => (
                    <span
                      key={ci}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                        color: 'var(--color-text-sub)',
                      }}
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t mt-4" style={{ borderColor: 'var(--color-border)' }}>
              <Link
                href="/dashboard/booking"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-white shadow-sm flex items-center justify-center gap-1.5 transition-all hover:opacity-95"
                style={{ background: 'var(--color-primary)' }}
              >
                Request {h.name} for Ride
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

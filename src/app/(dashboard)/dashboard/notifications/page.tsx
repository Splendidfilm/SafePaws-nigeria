'use client';

import React from 'react';
import { Syringe, Car, Receipt } from 'lucide-react';

export default function NotificationsPage() {
  const notifications = [
    {
      title: 'Trip Started: Bruno is on his way',
      desc: 'Handler Chinedu O. has secured Bruno in safety crate #4 and departed Lekki Phase 1.',
      time: '15 mins ago',
      icon: Car,
      unread: true,
    },
    {
      title: "Booster Reminder: Luna's FVRCP",
      desc: 'Luna has a booster due in 3 days. Book transport directly to reserve a priority vet slot.',
      time: '2 hours ago',
      icon: Syringe,
      unread: true,
    },
    {
      title: 'Invoice Paid: Trip #SP-2024-00118',
      desc: '₦4,500 has been debited from your SafePaws Wallet balance.',
      time: '1 day ago',
      icon: Receipt,
      unread: false,
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex justify-between items-end">
        <div>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight mb-2 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Notifications
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-sub)' }}>
            Stay updated with real-time transit alerts, vet reminders, and payment receipts.
          </p>
        </div>
        <button className="text-xs font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((n, i) => {
          const Icon = n.icon;
          return (
            <div
              key={i}
              className="rounded-[--radius-md] border p-5 flex items-start gap-4 transition-colors"
              style={{
                background: n.unread ? 'var(--color-surface-raised)' : 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: n.unread
                    ? 'color-mix(in srgb, var(--color-primary) 15%, transparent)'
                    : 'var(--color-bg)',
                  color: 'var(--color-primary)',
                }}
              >
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                    {n.title}
                  </h3>
                  <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {n.time}
                  </span>
                </div>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-text-sub)' }}>
                  {n.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

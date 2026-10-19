'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Abina Phil-Oleniyi',
    email: 'abinaphilolaniyi@gmail.com',
    phone: '+234 801 234 5678',
    emergencyContact: '+234 803 123 4567',
    smsAlerts: true,
    whatsappAlerts: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h2
          className="text-3xl md:text-4xl font-black tracking-tight mb-2 leading-tight"
          style={{ color: 'var(--color-text)' }}
        >
          Account Settings
        </h2>
        <p className="text-lg" style={{ color: 'var(--color-text-sub)' }}>
          Manage your contact information, emergency veterinary numbers, and notifications.
        </p>
      </div>

      <form
        onSubmit={handleSave}
        className="rounded-[--radius-md] border p-6 md:p-8 space-y-6"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {saved && (
          <div
            className="p-4 rounded-xl flex items-center gap-3 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200"
          >
            <CheckCircle2 size={18} />
            Settings saved successfully!
          </div>
        )}

        <div className="space-y-4">
          <h3 className="font-bold text-base border-b pb-2" style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)' }}>
            Profile Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-sub)' }}>
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[--radius-sm] text-sm border outline-none"
                style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-sub)' }}>
                Email Address
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[--radius-sm] text-sm border outline-none"
                style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-sub)' }}>
                Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[--radius-sm] text-sm border outline-none"
                style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-sub)' }}>
                Emergency Contact
              </label>
              <input
                type="tel"
                value={profile.emergencyContact}
                onChange={(e) => setProfile({ ...profile, emergencyContact: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[--radius-sm] text-sm border outline-none"
                style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="font-bold text-base border-b pb-2" style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)' }}>
            Notification Preferences
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.whatsappAlerts}
                onChange={(e) => setProfile({ ...profile, whatsappAlerts: e.target.checked })}
                className="h-4 w-4 rounded"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                Receive live trip telemetry and driver location via WhatsApp
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.smsAlerts}
                onChange={(e) => setProfile({ ...profile, smsAlerts: e.target.checked })}
                className="h-4 w-4 rounded"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                Receive SMS fallback alerts on route progress
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-[--radius-sm] font-bold text-sm text-white shadow-sm"
          style={{ background: 'var(--color-primary)' }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

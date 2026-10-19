'use client';

import React from 'react';
import { Phone, Mail, MessageCircle, ShieldAlert } from 'lucide-react';

export default function SupportPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2
          className="text-3xl md:text-4xl font-black tracking-tight mb-2 leading-tight"
          style={{ color: 'var(--color-text)' }}
        >
          24/7 Pet Support & Dispatch
        </h2>
        <p className="text-lg" style={{ color: 'var(--color-text-sub)' }}>
          Immediate assistance for active transports, veterinary emergencies, or booking inquiries.
        </p>
      </div>

      {/* Emergency dispatch banner */}
      <div
        className="p-6 rounded-[--radius-md] border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{
          background: 'color-mix(in srgb, var(--color-error) 8%, var(--color-surface))',
          borderColor: 'color-mix(in srgb, var(--color-error) 25%, transparent)',
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: 'color-mix(in srgb, var(--color-error) 15%, transparent)',
              color: 'var(--color-error)',
            }}
          >
            <ShieldAlert size={24} />
          </div>
          <div>
            <h3 className="font-bold text-base" style={{ color: 'var(--color-error)' }}>
              Active Trip Emergency Hotline
            </h3>
            <p className="text-xs mt-1" style={{ color: 'var(--color-text-sub)' }}>
              Direct line to on-duty veterinarian dispatchers for pets currently in transit.
            </p>
          </div>
        </div>
        <a
          href="tel:+23480072337297"
          className="px-5 py-2.5 rounded-[--radius-sm] text-xs font-bold text-white shrink-0 shadow-sm"
          style={{ background: 'var(--color-error)' }}
        >
          Call Emergency Desk
        </a>
      </div>

      {/* Contact Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="p-6 rounded-[--radius-md] border space-y-3"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', color: 'var(--color-primary)' }}
          >
            <Phone size={20} />
          </div>
          <h4 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>Phone Support</h4>
          <p className="text-xs" style={{ color: 'var(--color-text-sub)' }}>
            Speak with our logistics support team for general inquiries.
          </p>
          <p className="text-sm font-bold pt-2" style={{ color: 'var(--color-primary)' }}>
            +234 1 800 7233
          </p>
        </div>

        <div
          className="p-6 rounded-[--radius-md] border space-y-3"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'color-mix(in srgb, #25D366 12%, transparent)', color: '#25D366' }}
          >
            <MessageCircle size={20} />
          </div>
          <h4 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>WhatsApp Support</h4>
          <p className="text-xs" style={{ color: 'var(--color-text-sub)' }}>
            Chat with our customer happiness representatives anytime.
          </p>
          <p className="text-sm font-bold pt-2 text-emerald-600">
            +234 803 555 0192
          </p>
        </div>

        <div
          className="p-6 rounded-[--radius-md] border space-y-3"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'color-mix(in srgb, #3b82f6 12%, transparent)', color: '#3b82f6' }}
          >
            <Mail size={20} />
          </div>
          <h4 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>Email Support</h4>
          <p className="text-xs" style={{ color: 'var(--color-text-sub)' }}>
            Send us trip feedback, receipts, or corporate inquiry questions.
          </p>
          <p className="text-sm font-bold pt-2 text-blue-600">
            support@safepaws.ng
          </p>
        </div>
      </div>
    </div>
  );
}

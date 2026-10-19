'use client';

import React from 'react';
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Plus,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function WalletPage() {
  const transactions = [
    {
      id: 'tx_1',
      title: 'Trip to Lekki Vet Clinic',
      ref: '#SP-2024-00123',
      date: 'Today, 2:15 PM',
      amount: '₦4,500',
      type: 'debit',
      status: 'Completed',
    },
    {
      id: 'tx_2',
      title: 'Wallet Top Up',
      ref: 'Paystack • Card ending 4022',
      date: 'Yesterday, 11:30 AM',
      amount: '+₦25,000',
      type: 'credit',
      status: 'Success',
    },
    {
      id: 'tx_3',
      title: 'Interstate Pet Relocation (Ibadan)',
      ref: '#SP-2024-00098',
      date: '12 Oct 2026',
      amount: '₦38,000',
      type: 'debit',
      status: 'Completed',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight mb-2 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            SafePaws Wallet
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-text-sub)' }}>
            Manage payments, ride credits, and automated checkout for pet trips.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-[--radius-sm] shadow-sm transition-colors text-white"
            style={{ background: 'var(--color-primary)' }}
          >
            <Plus size={16} />
            Top Up Balance
          </button>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className="p-6 rounded-[--radius-md] border"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-sub)' }}>
              Available Balance
            </span>
            <div
              className="p-2 rounded-lg"
              style={{ background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)' }}
            >
              <Wallet size={20} style={{ color: 'var(--color-primary)' }} />
            </div>
          </div>
          <div className="text-3xl font-black mb-1" style={{ color: 'var(--color-text)' }}>
            ₦20,500.00
          </div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Auto-debit active for upcoming bookings
          </p>
        </div>

        <div
          className="p-6 rounded-[--radius-md] border"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-sub)' }}>
              Saved Payment Method
            </span>
            <div
              className="p-2 rounded-lg"
              style={{ background: 'color-mix(in srgb, #3b82f6 12%, transparent)' }}
            >
              <CreditCard size={20} style={{ color: '#3b82f6' }} />
            </div>
          </div>
          <div className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>
            Mastercard •••• 4022
          </div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Expires 08/28 • Default card
          </p>
        </div>

        <div
          className="p-6 rounded-[--radius-md] border"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium" style={{ color: 'var(--color-text-sub)' }}>
              Protection Guarantee
            </span>
            <div
              className="p-2 rounded-lg"
              style={{ background: 'color-mix(in srgb, var(--color-success) 12%, transparent)' }}
            >
              <ShieldCheck size={20} style={{ color: 'var(--color-success)' }} />
            </div>
          </div>
          <div className="text-lg font-bold mb-1" style={{ color: 'var(--color-text)' }}>
            100% Transit Insured
          </div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Trip escrow releases only upon safe pet delivery
          </p>
        </div>
      </div>

      {/* Transaction History */}
      <div
        className="rounded-[--radius-md] border overflow-hidden"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div
          className="px-6 py-4 flex justify-between items-center border-b"
          style={{
            background: 'var(--color-surface-raised)',
            borderColor: 'var(--color-border)',
          }}
        >
          <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
            Recent Activity
          </h3>
          <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
            Last 30 days
          </span>
        </div>

        <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
          {transactions.map((tx) => (
            <div key={tx.id} className="p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background:
                      tx.type === 'credit'
                        ? 'color-mix(in srgb, var(--color-success) 12%, transparent)'
                        : 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                  }}
                >
                  {tx.type === 'credit' ? (
                    <ArrowDownLeft size={18} style={{ color: 'var(--color-success)' }} />
                  ) : (
                    <ArrowUpRight size={18} style={{ color: 'var(--color-primary)' }} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>
                    {tx.title}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                    {tx.ref} • {tx.date}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p
                  className="text-sm font-bold"
                  style={{
                    color: tx.type === 'credit' ? 'var(--color-success)' : 'var(--color-text)',
                  }}
                >
                  {tx.amount}
                </p>
                <div className="flex items-center gap-1 justify-end">
                  <CheckCircle2 size={12} style={{ color: 'var(--color-success)' }} />
                  <span className="text-xs" style={{ color: 'var(--color-text-sub)' }}>
                    {tx.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

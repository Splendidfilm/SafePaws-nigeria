'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  ChevronRight,
  Plus,
  Search,
  CheckCircle2,
  Calendar,
  Filter,
} from 'lucide-react';
import { useSafePawsStore } from '@/lib/store';

export default function BookingsListPage() {
  const { bookings } = useSafePawsStore();
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'IN_TRANSIT' | 'DELIVERED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBookings = bookings.filter((b) => {
    const matchesStatus = statusFilter === 'ALL' || b.status === statusFilter;
    const matchesSearch =
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.petName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.pickupAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.deliveryAddress.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
            <Calendar size={14} />
            <span>Transport Itinerary &amp; History</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
            My Bookings
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-sub)' }}>
            Track active journeys, review completed rides, and schedule repeat transports.
          </p>
        </div>
        <Link
          href="/dashboard/booking"
          className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl shadow-md transition-all hover:opacity-95 text-white"
          style={{ background: 'var(--color-primary)' }}
        >
          <Plus size={16} />
          New Booking
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div
        className="p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {(['ALL', 'IN_TRANSIT', 'DELIVERED'] as const).map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: statusFilter === st ? 'var(--color-primary)' : 'transparent',
                color: statusFilter === st ? '#FFFFFF' : 'var(--color-text-sub)',
              }}
            >
              {st === 'ALL' ? 'All Trips' : st === 'IN_TRANSIT' ? 'In Transit' : 'Completed'}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by ID, pet, or street..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg border text-xs outline-none"
            style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          />
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div
            className="p-12 text-center rounded-2xl border space-y-3"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>No matching bookings found</p>
            <p className="text-xs text-zinc-400">Try adjusting your filters or schedule a new transport.</p>
            <Link
              href="/dashboard/booking"
              className="inline-block px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm"
              style={{ background: 'var(--color-primary)' }}
            >
              Book a Transport
            </Link>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner"
                  style={{ background: 'var(--color-surface-raised)' }}
                >
                  {booking.petEmoji}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                      {booking.petName}
                    </h3>
                    <span
                      className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold ${
                        booking.status === 'IN_TRANSIT'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 animate-pulse'
                          : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
                      }`}
                    >
                      {booking.status === 'IN_TRANSIT' ? 'In Transit (Live)' : 'Completed'}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">#{booking.id}</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Handler: <span className="font-semibold text-zinc-600 dark:text-zinc-300">{booking.handlerName}</span> ({booking.handlerPhone}) • Van: {booking.vehiclePlate}
                  </p>
                  <div className="pt-2 text-xs flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-500">
                    <span className="flex items-center gap-1.5 truncate max-w-md">
                      <MapPin size={13} className="text-emerald-500 shrink-0" />
                      {booking.pickupAddress.split(',')[0]} → {booking.deliveryAddress.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-1 shrink-0 font-mono">
                      <Clock size={13} className="text-zinc-400" />
                      {booking.pickupDate} at {booking.pickupTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-left md:text-right">
                  <p className="font-black text-lg font-mono text-emerald-600">
                    ₦{booking.totalPrice.toLocaleString()}
                  </p>
                  <span className="text-[11px] text-zinc-400 font-medium">Paystack Paid</span>
                </div>

                <div className="flex items-center gap-2">
                  {booking.status === 'IN_TRANSIT' ? (
                    <Link
                      href="/dashboard/tracking"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm flex items-center gap-1"
                      style={{ background: 'var(--color-primary)' }}
                    >
                      Track Live
                      <ChevronRight size={14} />
                    </Link>
                  ) : (
                    <Link
                      href="/dashboard/booking"
                      className="px-4 py-2 rounded-xl text-xs font-semibold border hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                      Rebook
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

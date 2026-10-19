'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  Thermometer,
  ShieldCheck,
  Star,
  Clock,
  Car,
  AlertTriangle,
  Share2,
  Check,
  MapPin,
  Camera,
  Heart,
  ChevronRight,
  Maximize2,
  RefreshCw,
} from 'lucide-react';
import { useSafePawsStore } from '@/lib/store';

export default function TrackingPage() {
  const { bookings } = useSafePawsStore();
  const activeBooking = bookings.find((b) => b.status === 'IN_TRANSIT') || bookings[0];

  const [progress, setProgress] = useState(activeBooking?.progressPercentage || 68);
  const [vehicleTemp, setVehicleTemp] = useState(activeBooking?.cabinTempC || 22);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Simulated live telemetry movement
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return 98;
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const checkpoints = [
    { label: 'Booking Confirmed', time: '14:00', done: true },
    { label: 'Handler Assigned (Chinedu O.)', time: '14:15', done: true },
    { label: 'Pet Secured in Safety Crate', time: '14:28', done: true },
    { label: 'Departed Admiralty Way, Lekki', time: '14:32', done: true },
    { label: 'Lekki Toll Gate Checkpoint', time: '14:40', done: progress >= 50 },
    { label: 'Arrival at Destination Vet Clinic', time: '14:55', done: progress >= 95 },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Journey Live Tracking</span>
            <span>•</span>
            <span className="font-mono">{activeBooking?.id || 'SP-2024-00123'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
            Tracking {activeBooking?.petName || 'Bruno'}
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-sub)' }}>
            Real-time GPS telemetry, cabin environmental climate, and direct handler communications.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border shadow-sm transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          >
            {copiedLink ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
            {copiedLink ? 'Link Copied!' : 'Share Live Tracking'}
          </button>
          <button
            type="button"
            onClick={() => setShowEmergencyModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-sm bg-rose-600 hover:bg-rose-700 transition-colors"
          >
            <AlertTriangle size={14} />
            Emergency Dispatch
          </button>
        </div>
      </div>

      {/* Main 2-Column Split: Map & Telemetry on Left, Handler & Comfort on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Interactive Map Canvas + Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stylized SVG Map Container */}
          <div
            className="rounded-2xl border overflow-hidden shadow-sm flex flex-col"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div
              className="px-6 py-3.5 border-b flex justify-between items-center text-xs"
              style={{ background: 'var(--color-surface-raised)', borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
                  Lagos Metro Transit Corridor
                </span>
                <span className="text-zinc-400">•</span>
                <span className="text-emerald-600 font-semibold font-mono">GPS Active (10 Hz)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400 font-mono">Speed: 42 km/h</span>
                <button
                  type="button"
                  onClick={() => setProgress((p) => Math.min(95, p + 5))}
                  className="p-1 rounded text-zinc-400 hover:text-zinc-600"
                  title="Simulate Next Checkpoint"
                >
                  <RefreshCw size={13} />
                </button>
              </div>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative h-96 bg-zinc-950 overflow-hidden flex items-center justify-center p-4 select-none">
              {/* Background Grid */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(#17CFAD 1px, transparent 1px), radial-gradient(#17CFAD 1px, #090d0c 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Waterway / Lagoon graphic */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <path
                  d="M0,280 C150,260 250,310 400,290 C550,270 700,310 900,280 L900,400 L0,400 Z"
                  fill="#062725"
                />
                <text x="30" y="360" fill="#14534d" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  LAGOS LAGOON / FIVE COWRIES CREEK
                </text>
              </svg>

              {/* Transit Route SVG */}
              <svg className="w-full h-full max-w-2xl relative z-10" viewBox="0 0 600 300">
                {/* Full Route Path */}
                <path
                  d="M 60,180 C 180,180 220,120 320,120 C 420,120 460,70 540,70"
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Remaining dotted line */}
                <path
                  d="M 60,180 C 180,180 220,120 320,120 C 420,120 460,70 540,70"
                  fill="none"
                  stroke="#52525b"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                {/* Completed Route line */}
                <path
                  d="M 60,180 C 180,180 220,120 320,120 C 420,120 460,70 540,70"
                  fill="none"
                  stroke="#17CFAD"
                  strokeWidth="8"
                  strokeDasharray="600"
                  strokeDashoffset={600 - (600 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />

                {/* Pickup Marker (Green Pin P) */}
                <g transform="translate(60, 180)">
                  <circle r="14" fill="#10B981" />
                  <text textAnchor="middle" dy="4" fill="#FFFFFF" fontWeight="bold" fontSize="12">P</text>
                  <text textAnchor="middle" dy="30" fill="#a1a1aa" fontSize="10">Lekki Phase 1</text>
                </g>

                {/* Checkpoint Toll */}
                <g transform="translate(320, 120)">
                  <circle r="6" fill={progress >= 50 ? '#10B981' : '#3f3f46'} />
                  <text textAnchor="middle" dy="20" fill="#a1a1aa" fontSize="10">Lekki Toll Gate</text>
                </g>

                {/* Destination Marker (Red Pin D) */}
                <g transform="translate(540, 70)">
                  <circle r="14" fill="#EF4444" />
                  <text textAnchor="middle" dy="4" fill="#FFFFFF" fontWeight="bold" fontSize="12">D</text>
                  <text textAnchor="middle" dy="30" fill="#a1a1aa" fontSize="10">Vet Clinic</text>
                </g>

                {/* Animated Vehicle Indicator calculated based on progress */}
                {(() => {
                  const t = progress / 100;
                  // Approximate cubic bezier point
                  const p0 = { x: 60, y: 180 };
                  const p1 = { x: 180, y: 180 };
                  const p2 = { x: 420, y: 120 };
                  const p3 = { x: 540, y: 70 };
                  const cx = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
                  const cy = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;

                  return (
                    <g transform={`translate(${cx}, ${cy})`}>
                      <circle r="18" fill="rgba(23,207,173,0.25)" className="animate-ping" />
                      <circle r="14" fill="#0D1F1C" stroke="#17CFAD" strokeWidth="2.5" />
                      <text textAnchor="middle" dy="4" fill="#17CFAD" fontSize="10">🚐</text>
                    </g>
                  );
                })()}
              </svg>

              {/* Overlay HUD Stats */}
              <div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md rounded-xl p-3 border border-zinc-800 text-xs text-white space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-bold">Toyota Hiace Climate-Van</span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">Plate: {activeBooking?.vehiclePlate || 'KJA-482-AB'}</p>
                <p className="text-[11px] text-emerald-400 font-bold">{progress}% Route Completed</p>
              </div>

              <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-md rounded-xl p-3 border border-zinc-800 text-xs text-right">
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Estimated Arrival</span>
                <span className="text-lg font-black font-mono text-emerald-400">14:55 PM</span>
                <span className="text-[11px] text-zinc-400 block font-mono">~12 mins remaining</span>
              </div>
            </div>

            {/* Environmental & Cabin Status Readouts */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div className="p-4 rounded-xl border" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between text-xs font-semibold mb-1" style={{ color: 'var(--color-text-sub)' }}>
                  <span className="flex items-center gap-1.5">
                    <Thermometer size={14} className="text-emerald-500" />
                    Cabin Climate
                  </span>
                  <span className="text-emerald-600 font-bold">Optimal</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-black font-mono" style={{ color: 'var(--color-text)' }}>
                    {vehicleTemp}°C
                  </p>
                  <span className="text-xs text-zinc-400">Target: 21–23°C</span>
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">Dual-zone medical pet AC running</p>
              </div>

              <div className="p-4 rounded-xl border" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between text-xs font-semibold mb-1" style={{ color: 'var(--color-text-sub)' }}>
                  <span className="flex items-center gap-1.5">
                    <Heart size={14} className="text-rose-500" />
                    Passenger State
                  </span>
                  <span className="text-emerald-600 font-bold">Calm</span>
                </div>
                <p className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                  {activeBooking?.petStatus || 'Comfortable and resting'}
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">Monitored via rear cabin IR camera</p>
              </div>

              <div className="p-4 rounded-xl border" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between text-xs font-semibold mb-1" style={{ color: 'var(--color-text-sub)' }}>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-emerald-500" />
                    Next Landmark
                  </span>
                </div>
                <p className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                  {activeBooking?.currentCheckpoint || 'Lekki Toll Gate'}
                </p>
                <p className="text-[11px] text-zinc-500 mt-1">Transit speed ~42 km/h on clear lane</p>
              </div>
            </div>
          </div>

          {/* Journey Checkpoints Vertical Timeline */}
          <div
            className="rounded-2xl border p-6 space-y-4"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
              Transit Milestones
            </h3>
            <div className="space-y-4">
              {checkpoints.map((cp, idx) => (
                <div key={idx} className="flex items-start gap-3 relative">
                  {idx < checkpoints.length - 1 && (
                    <div
                      className={`absolute left-3.5 top-7 bottom-0 w-0.5 ${
                        cp.done ? 'bg-emerald-500' : 'bg-zinc-200 dark:bg-zinc-800'
                      }`}
                    />
                  )}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      cp.done
                        ? 'bg-emerald-500 text-white'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {cp.done ? <Check size={14} /> : <span className="text-xs">{idx + 1}</span>}
                  </div>
                  <div className="flex-1 flex justify-between items-center text-xs">
                    <div>
                      <p className={`font-semibold ${cp.done ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400'}`}>
                        {cp.label}
                      </p>
                    </div>
                    <span className="font-mono text-zinc-400">{cp.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Handler, Photo Gallery Check-in, Emergency */}
        <div className="space-y-6">
          {/* Handler Profile Card */}
          <div
            className="rounded-2xl border p-6 space-y-5"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Assigned Handler</span>
              <span className="text-xs font-semibold text-emerald-600">✓ On Active Trip</span>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0 shadow-md"
                style={{ background: 'var(--color-primary)' }}
              >
                CO
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                  {activeBooking?.handlerName || 'Chinedu O.'}
                </h4>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                  <Star size={12} fill="currentColor" />
                  <span>4.9 (184 safe trips)</span>
                </div>
                <p className="text-xs text-zinc-400">Senior Veterinary Responder</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border text-xs space-y-1.5" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="flex justify-between">
                <span className="text-zinc-400">Direct Phone:</span>
                <span className="font-mono font-semibold" style={{ color: 'var(--color-text)' }}>
                  {activeBooking?.handlerPhone || '+234 803 555 0192'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Vehicle:</span>
                <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
                  Toyota Hiace ({activeBooking?.vehiclePlate || 'KJA-482-AB'})
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${activeBooking?.handlerPhone || '+2348035550192'}`}
                className="py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 shadow-sm transition-opacity hover:opacity-90"
                style={{ background: 'var(--color-primary)' }}
              >
                <Phone size={14} />
                Call Handler
              </a>
              <a
                href="https://wa.me/2348035550192"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                <MessageSquare size={14} className="text-emerald-500" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Photo Updates from Journey Check-in */}
          <div
            className="rounded-2xl border p-6 space-y-4"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera size={16} className="text-emerald-600" />
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Trip Photos</h4>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono">14:35 Checkpoint</span>
            </div>

            <div
              onClick={() => setSelectedPhoto('/public/images/Dog_image_GR.png')}
              className="rounded-xl overflow-hidden border cursor-pointer relative group aspect-video bg-zinc-900 flex items-center justify-center"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="text-center p-4 text-xs text-zinc-400">
                <span className="text-4xl block mb-2">🐕</span>
                <p className="font-semibold text-white">Bruno Resting in Crate #4</p>
                <p className="text-[11px] text-zinc-400 mt-1">&quot;Max is comfortable and hydrated!&quot;</p>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                <Maximize2 size={16} /> View Photo
              </div>
            </div>
            <p className="text-[11px] text-zinc-400">Handlers snap certified photo check-ins at every pickup and mid-journey interval.</p>
          </div>
        </div>
      </div>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-md rounded-2xl p-6 shadow-2xl border space-y-5"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center gap-3 text-rose-600 pb-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <AlertTriangle size={24} />
              <h3 className="font-bold text-base">24/7 Emergency Dispatch Desk</h3>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-sub)' }}>
              For critical incidents or immediate medical intervention during transit, connect directly with on-call veterinarians at SafePaws Command Center.
            </p>

            <div className="p-4 rounded-xl border space-y-2 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-xs">
              <p className="font-bold text-rose-700 dark:text-rose-300">Toll-Free Emergency Hotline:</p>
              <p className="text-xl font-black font-mono text-rose-600">+234 800 7233 7297</p>
              <p className="text-[11px] text-rose-600/80">Active dispatch coordinates are relayed directly to nearest vet clinic.</p>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:+23480072337297"
                className="flex-1 py-3 rounded-xl font-bold text-xs text-white text-center bg-rose-600 hover:bg-rose-700 shadow-md"
              >
                Call Hotline Now
              </a>
              <button
                type="button"
                onClick={() => setShowEmergencyModal(false)}
                className="px-4 py-3 rounded-xl font-semibold text-xs border"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

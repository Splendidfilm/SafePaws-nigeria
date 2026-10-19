'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  PawPrint,
  ShieldCheck,
  FileText,
  Upload,
  ArrowRightLeft,
  Star,
  Lock,
  CreditCard,
  Building,
  Smartphone,
  Check,
} from 'lucide-react';
import { useSafePawsStore, Booking } from '@/lib/store';

const NIGERIAN_LOCATION_PRESETS = [
  '14 Admiralty Way, Lekki Phase 1, Lagos',
  'Lekki Vet Clinic, Admiralty Way, Lagos',
  'Ahmadu Bello Way, Victoria Island, Lagos',
  'SafePaws Hub & Clinic, Ikoyi, Lagos',
  'Isaac John Street, Ikeja GRA, Lagos',
  'Muritala Muhammed Int. Airport (MMIA), Ikeja',
  'Maitama District, Abuja (FCT)',
  'Bodija Housing Estate, Ibadan, Oyo State',
];

export default function BookingWizardPage() {
  const router = useRouter();
  const { pets, handlers, actions } = useSafePawsStore();

  const [step, setStep] = useState(1);
  const [showPaystackModal, setShowPaystackModal] = useState(false);
  const [paystackMethod, setPaystackMethod] = useState<'card' | 'transfer' | 'ussd'>('card');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [bookingSuccessId, setBookingSuccessId] = useState<string | null>(null);

  // Form State
  const [pickupAddress, setPickupAddress] = useState(NIGERIAN_LOCATION_PRESETS[0]);
  const [deliveryAddress, setDeliveryAddress] = useState(NIGERIAN_LOCATION_PRESETS[1]);
  const [distanceKm, setDistanceKm] = useState(12);
  const [pickupDate, setPickupDate] = useState('2026-10-20');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [serviceType, setServiceType] = useState<'standard' | 'same_day' | 'express'>('standard');

  const [selectedPetId, setSelectedPetId] = useState(pets[0]?.id || 'pet_1');

  const [needsMedication, setNeedsMedication] = useState(false);
  const [medicationDetails, setMedicationDetails] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [behavioralNotes, setBehavioralNotes] = useState('Calm in crates, enjoys gentle driving');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const [requestSpecificHandler, setRequestSpecificHandler] = useState(false);
  const [selectedHandlerId, setSelectedHandlerId] = useState(handlers[0]?.id || 'h_1');

  const [healthCertUploaded, setHealthCertUploaded] = useState(true);
  const [vaccineRecordUploaded, setVaccineRecordUploaded] = useState(true);

  // Derive selected pet and handler
  const currentPet = pets.find((p) => p.id === selectedPetId) || pets[0];
  const currentHandler = handlers.find((h) => h.id === selectedHandlerId) || handlers[0];

  // Price Calculation according to TRD §5.7 formula
  const basePrice = 5000;
  const distanceCharge = distanceKm * 50;
  const petSize = (currentPet?.size || 'MEDIUM').toLowerCase() as 'small' | 'medium' | 'large';
  const sizeMultiplier = petSize === 'large' ? 2000 : petSize === 'medium' ? 1000 : 0;
  const specialCareCharge = needsMedication || dietaryRequirements.length > 0 ? 750 : 0;
  const serviceMultiplierRate = serviceType === 'express' ? 0.5 : serviceType === 'same_day' ? 0.2 : 0;
  const subtotal = basePrice + distanceCharge + sizeMultiplier + specialCareCharge;
  const serviceMultiplierFee = Math.round(subtotal * serviceMultiplierRate);
  const totalPrice = subtotal + serviceMultiplierFee;

  const handleSwapLocations = () => {
    const temp = pickupAddress;
    setPickupAddress(deliveryAddress);
    setDeliveryAddress(temp);
  };

  const handleCompletePaymentAndBook = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      const newBookingId = `SP-2024-${Math.floor(10000 + Math.random() * 90000)}`;
      const newBooking: Booking = {
        id: newBookingId,
        userId: 'usr_default',
        petId: currentPet.id,
        petName: currentPet.name,
        petEmoji: currentPet.emoji,
        pickupAddress,
        deliveryAddress,
        pickupDate,
        pickupTime,
        distanceKm,
        serviceType,
        petSize,
        needsMedication,
        medicationDetails,
        dietaryNotes: dietaryRequirements,
        handlerId: requestSpecificHandler ? currentHandler.id : handlers[0].id,
        handlerName: requestSpecificHandler ? currentHandler.name : handlers[0].name,
        handlerPhone: requestSpecificHandler ? currentHandler.phone : handlers[0].phone,
        handlerRating: requestSpecificHandler ? currentHandler.rating : handlers[0].rating,
        vehiclePlate: requestSpecificHandler ? currentHandler.vehicle.split('(')[1]?.replace(')', '') || 'KJA-482-AB' : 'KJA-482-AB',
        basePrice,
        distanceCharge,
        sizeMultiplier,
        specialCareCharge,
        serviceMultiplierFee,
        totalPrice,
        status: 'IN_TRANSIT',
        paymentStatus: 'PAID',
        progressPercentage: 25,
        cabinTempC: 22,
        petStatus: 'Comfortable and resting',
        currentCheckpoint: 'Pickup completed; en route',
        eta: '25 min',
      };

      actions.addBooking(newBooking);
      setIsProcessingPayment(false);
      setShowPaystackModal(false);
      setBookingSuccessId(newBookingId);
    }, 1200);
  };

  if (bookingSuccessId) {
    return (
      <div
        className="max-w-2xl mx-auto p-8 rounded-2xl border text-center space-y-6"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div
          className="w-20 h-20 rounded-full mx-auto flex items-center justify-center"
          style={{ background: 'color-mix(in srgb, var(--color-success) 15%, transparent)' }}
        >
          <CheckCircle2 size={44} style={{ color: 'var(--color-success)' }} />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Booking Confirmed • Escrow Protected
          </span>
          <h2 className="text-3xl font-black" style={{ color: 'var(--color-text)' }}>
            Trip #{bookingSuccessId} Booked!
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: 'var(--color-text-sub)' }}>
            {currentPet?.name}&apos;s transport with handler {requestSpecificHandler ? currentHandler.name : 'Chinedu O.'} has been scheduled. Vehicle cabin climate is locked at 22°C.
          </p>
        </div>

        <div className="p-4 rounded-xl border text-left text-xs space-y-2" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
          <div className="flex justify-between">
            <span style={{ color: 'var(--color-text-muted)' }}>Pickup:</span>
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{pickupAddress}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: 'var(--color-text-muted)' }}>Destination:</span>
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{deliveryAddress}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: 'var(--color-text-muted)' }}>Total Paid (Paystack):</span>
            <span className="font-bold text-emerald-600 font-mono">₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <Link
            href="/dashboard/tracking"
            className="px-6 py-3 rounded-[--radius-sm] text-sm font-bold text-white shadow-md flex items-center justify-center gap-2"
            style={{ background: 'var(--color-primary)' }}
          >
            Track Trip Live
            <ChevronRight size={16} />
          </Link>
          <Link
            href="/dashboard/bookings"
            className="px-6 py-3 rounded-[--radius-sm] text-sm font-semibold border flex items-center justify-center"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          >
            View All Bookings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
          <span>Safe Transport Booking</span>
          <span>•</span>
          <span>Step {step} of 6</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
          {step === 1 && 'Step 1: Journey Details'}
          {step === 2 && 'Step 2: Select Your Pet'}
          {step === 3 && 'Step 3: Special Handling & Care'}
          {step === 4 && 'Step 4: Certified Handler Preference'}
          {step === 5 && 'Step 5: Document Verification'}
          {step === 6 && 'Step 6: Review & Paystack Checkout'}
        </h2>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-sub)' }}>
          {step === 1 && 'Specify pickup and delivery addresses across Nigeria, scheduled timing, and service speed.'}
          {step === 2 && 'Choose which registered pet is traveling today for appropriate safety crate allocation.'}
          {step === 3 && 'Ensure your pet receives required medication, dietary provisions, and soothing handling.'}
          {step === 4 && 'Choose your preferred certified veterinary handler or opt for auto-dispatch.'}
          {step === 5 && 'Ensure mandatory veterinary health clearances and rabies certifications are on file.'}
          {step === 6 && 'Review full Nigerian fare breakdown and complete secure Paystack authorization.'}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gray-200 dark:bg-zinc-800 -z-10" />
        {[1, 2, 3, 4, 5, 6].map((s) => (
          <div
            key={s}
            onClick={() => s < step && setStep(s)}
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all cursor-pointer ${
              s === step
                ? 'ring-4 ring-emerald-500/20 text-white'
                : s < step
                ? 'bg-emerald-500 text-white'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
            }`}
            style={{
              background: s === step ? 'var(--color-primary)' : s < step ? 'var(--color-success)' : undefined,
            }}
          >
            {s < step ? <Check size={16} /> : s}
          </div>
        ))}
      </div>

      {/* Step Content Container */}
      <div
        className="rounded-2xl border p-6 md:p-8"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {/* ── STEP 1: JOURNEY DETAILS ────────────────────────────────────────── */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Pickup Address
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600" />
                  <input
                    type="text"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    placeholder="Enter pickup street address..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>

              <div className="flex justify-center -my-2">
                <button
                  type="button"
                  onClick={handleSwapLocations}
                  className="p-2 rounded-full border shadow-sm transition-transform hover:rotate-180"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text-sub)' }}
                  title="Swap Pickup and Delivery"
                >
                  <ArrowRightLeft size={14} />
                </button>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Delivery Address
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-500" />
                  <input
                    type="text"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter delivery destination clinic or residence..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>

              {/* Nigerian Presets quick-select */}
              <div className="pt-1">
                <span className="text-[11px] font-semibold text-zinc-400 block mb-1.5">Common Nigerian Routes:</span>
                <div className="flex flex-wrap gap-1.5">
                  {NIGERIAN_LOCATION_PRESETS.slice(0, 4).map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setDeliveryAddress(p)}
                      className="text-xs px-2.5 py-1 rounded-lg border hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-sub)' }}
                    >
                      {p.split(',')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Distance Slider & Calculation */}
            <div className="p-4 rounded-xl border space-y-2" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-sub)' }}>
                  Estimated Distance
                </span>
                <span className="font-mono font-bold text-sm text-emerald-600">{distanceKm} km</span>
              </div>
              <input
                type="range"
                min="2"
                max="120"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Intra-city (2–25 km)</span>
                <span>Inter-state corridor (50–120 km)</span>
              </div>
            </div>

            {/* Schedule & Speed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Time Window (8:00 AM – 6:00 PM)
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>
            </div>

            {/* Service Tier selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: 'var(--color-text-sub)' }}>
                Service Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard', sub: '2–3 days window', fee: 'Base fare' },
                  { id: 'same_day', name: 'Same-Day (+20%)', sub: 'Dedicated priority slot', fee: '+₦' + Math.round(subtotal * 0.2).toLocaleString() },
                  { id: 'express', name: 'Express (<24h, +50%)', sub: 'Immediate dispatch', fee: '+₦' + Math.round(subtotal * 0.5).toLocaleString() },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setServiceType(tier.id as 'standard' | 'same_day' | 'express')}
                    className="p-3.5 rounded-xl border text-left transition-all"
                    style={{
                      borderColor: serviceType === tier.id ? 'var(--color-primary)' : 'var(--color-border)',
                      background: serviceType === tier.id ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-bg)',
                    }}
                  >
                    <p className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{tier.name}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{tier.sub}</p>
                    <p className="text-xs font-semibold text-emerald-600 mt-1">{tier.fee}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 2: SELECT PET ─────────────────────────────────────────────── */}
        {step === 2 && (
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Select Passenger Pet
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pets.map((pet) => {
                const isSelected = pet.id === selectedPetId;
                return (
                  <div
                    key={pet.id}
                    onClick={() => setSelectedPetId(pet.id)}
                    className="p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-4"
                    style={{
                      borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                      background: isSelected ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-bg)',
                      boxShadow: isSelected ? '0 0 0 2px var(--color-primary)' : 'none',
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                      style={{ background: pet.emojiBg }}
                    >
                      {pet.emoji}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                          {pet.name}
                        </h4>
                        <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                          {pet.size} ({pet.weight} kg)
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400">{pet.breed} • {pet.age} • {pet.gender}</p>
                      <p className="text-xs text-emerald-600 font-medium">✓ {pet.healthLabel}</p>
                      {pet.dietaryNotes && (
                        <p className="text-[11px] text-zinc-500 pt-1 line-clamp-1">Diet: {pet.dietaryNotes}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl border flex items-center justify-between" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="text-xs">
                <span className="font-semibold block" style={{ color: 'var(--color-text)' }}>Need to register another pet?</span>
                <span className="text-zinc-400">Add health certificates and microchips anytime</span>
              </div>
              <Link
                href="/dashboard/pets"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                + Register New Pet
              </Link>
            </div>
          </div>
        )}

        {/* ── STEP 3: SPECIAL REQUIREMENTS ───────────────────────────────────── */}
        {step === 3 && (
          <div className="space-y-6">
            {/* Medication Toggle */}
            <div
              className="p-5 rounded-2xl border space-y-4"
              style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                    Does {currentPet.name} require medication administration during transport?
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Certified handlers carry veterinary pill pouches and saline water dispensers. (+₦750 special care)
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={needsMedication}
                  onChange={(e) => setNeedsMedication(e.target.checked)}
                  className="w-5 h-5 accent-emerald-500 cursor-pointer"
                />
              </div>

              {needsMedication && (
                <div className="space-y-3 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider block mb-1 text-zinc-400">
                      Medication Dosage & Time Required
                    </label>
                    <input
                      type="text"
                      value={medicationDetails}
                      onChange={(e) => setMedicationDetails(e.target.value)}
                      placeholder="e.g. Amoxicillin 5mg with a treat at 2:00 PM"
                      className="w-full px-3 py-2 rounded-lg border text-xs outline-none"
                      style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Dietary & Behavioral notes */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Dietary / Hydration Preferences
                </label>
                <input
                  type="text"
                  value={dietaryRequirements}
                  onChange={(e) => setDietaryRequirements(e.target.value)}
                  placeholder="e.g. Fresh spring water only, no chicken-based snacks"
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Behavioral Notes (Pre-filled from Pet Profile)
                </label>
                <input
                  type="text"
                  value={behavioralNotes}
                  onChange={(e) => setBehavioralNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5" style={{ color: 'var(--color-text-sub)' }}>
                  Other Specific Instructions for Handler
                </label>
                <textarea
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Please ring front gate bell upon arrival; dog responds well to his yellow toy."
                  className="w-full p-3 rounded-xl border text-sm outline-none resize-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 4: HANDLER PREFERENCE ─────────────────────────────────────── */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-xl border" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div>
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  Request a Specific Certified Handler?
                </h4>
                <p className="text-xs text-zinc-400">
                  You can specify a preferred handler or let our dispatch system assign the nearest verified driver.
                </p>
              </div>
              <input
                type="checkbox"
                checked={requestSpecificHandler}
                onChange={(e) => setRequestSpecificHandler(e.target.checked)}
                className="w-5 h-5 accent-emerald-500 cursor-pointer"
              />
            </div>

            {requestSpecificHandler ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {handlers.map((h) => {
                  const isSelected = h.id === selectedHandlerId;
                  return (
                    <div
                      key={h.id}
                      onClick={() => setSelectedHandlerId(h.id)}
                      className="p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-3"
                      style={{
                        borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                        background: isSelected ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-bg)',
                        boxShadow: isSelected ? '0 0 0 2px var(--color-primary)' : 'none',
                      }}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs"
                            style={{ background: 'var(--color-primary)' }}
                          >
                            {h.initials}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{h.name}</h5>
                            <div className="flex items-center gap-1 text-[11px] text-amber-500 font-semibold">
                              <Star size={11} fill="currentColor" />
                              <span>{h.rating} ({h.tripsCount} trips)</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-2">{h.title}</p>
                      </div>

                      <div className="text-[11px] space-y-1 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                        <p className="text-zinc-500 font-medium">Van: {h.vehicle.split('(')[0]}</p>
                        <span className="text-emerald-600 font-bold">✓ {h.coverageZones[0]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 rounded-2xl border text-center space-y-2" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <ShieldCheck size={32} className="mx-auto text-emerald-500" />
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                  Auto-Dispatch Active
                </h4>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Our algorithm will automatically assign the highest-rated verified handler located within 5 km of your pickup location.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── STEP 5: DOCUMENT VERIFICATION ──────────────────────────────────── */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl border flex items-center gap-3 text-xs" style={{ background: 'color-mix(in srgb, var(--color-primary) 8%, transparent)', borderColor: 'var(--color-primary)' }}>
              <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
              <p style={{ color: 'var(--color-text)' }}>
                Nigerian veterinary animal transport regulations require valid rabies immunization and transit safety fitness records.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border space-y-3" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Veterinary Health Certificate</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Required
                  </span>
                </div>
                <p className="text-xs text-zinc-400">Signed transit wellness check from certified veterinarian.</p>
                <div className="p-4 rounded-xl border border-dashed text-center space-y-2" style={{ borderColor: 'var(--color-border)' }}>
                  <FileText size={24} className="mx-auto text-emerald-600" />
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
                    {healthCertUploaded ? 'Health_Certificate_Bruno_2026.pdf' : 'Drag or click to upload'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setHealthCertUploaded(!healthCertUploaded)}
                    className="text-xs text-emerald-600 hover:underline"
                  >
                    {healthCertUploaded ? 'Replace Document' : 'Browse File'}
                  </button>
                </div>
              </div>

              <div className="p-5 rounded-2xl border space-y-3" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Rabies & DHPP Vaccination Record</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Auto-linked
                  </span>
                </div>
                <p className="text-xs text-zinc-400">Imported from your SafePaws Pet Health Passport.</p>
                <div className="p-4 rounded-xl border border-dashed text-center space-y-2" style={{ borderColor: 'var(--color-border)' }}>
                  <CheckCircle2 size={24} className="mx-auto text-emerald-600" />
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
                    Verified on file (Valid through Aug 2027)
                  </p>
                  <span className="text-[11px] text-zinc-400">No action needed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 6: REVIEW & PAY ───────────────────────────────────────────── */}
        {step === 6 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Journey & Pet Summary */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl border space-y-3" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-400">Journey Summary</h4>
                  <div className="space-y-1.5 text-xs">
                    <p className="flex justify-between">
                      <span className="text-zinc-500">From:</span>
                      <span className="font-semibold text-right" style={{ color: 'var(--color-text)' }}>{pickupAddress}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-500">To:</span>
                      <span className="font-semibold text-right" style={{ color: 'var(--color-text)' }}>{deliveryAddress}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-500">Scheduled:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{pickupDate} at {pickupTime}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-zinc-500">Transit Distance:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{distanceKm} km ({serviceType.toUpperCase()})</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border flex items-center gap-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                  <div className="text-3xl p-2 rounded-xl" style={{ background: currentPet.emojiBg }}>
                    {currentPet.emoji}
                  </div>
                  <div className="text-xs">
                    <h5 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{currentPet.name}</h5>
                    <p className="text-zinc-400">{currentPet.breed} • {currentPet.size} size</p>
                    {needsMedication && (
                      <p className="text-emerald-600 font-semibold mt-0.5">Medication support requested</p>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl border flex items-center justify-between text-xs" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                  <div>
                    <span className="text-zinc-400 block">Handler Assigned:</span>
                    <span className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                      {requestSpecificHandler ? currentHandler.name : 'Auto-Dispatch Lead Handler'}
                    </span>
                  </div>
                  <ShieldCheck size={20} className="text-emerald-600" />
                </div>
              </div>

              {/* Nigerian Fare Formula Calculation Breakdown */}
              <div className="p-5 rounded-2xl border space-y-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <h4 className="font-bold text-xs uppercase tracking-wider text-zinc-400">
                  Fare Calculation (TRD §5.7 Formula)
                </h4>

                <div className="space-y-2 text-xs divide-y" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex justify-between pt-1">
                    <span className="text-zinc-500">Base Fare (Fixed):</span>
                    <span className="font-mono font-medium" style={{ color: 'var(--color-text)' }}>₦{basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-zinc-500">Distance ({distanceKm} km × ₦50/km):</span>
                    <span className="font-mono font-medium" style={{ color: 'var(--color-text)' }}>₦{distanceCharge.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-zinc-500">Pet Size Surcharge ({currentPet.size}):</span>
                    <span className="font-mono font-medium" style={{ color: 'var(--color-text)' }}>₦{sizeMultiplier.toLocaleString()}</span>
                  </div>
                  {specialCareCharge > 0 && (
                    <div className="flex justify-between pt-2">
                      <span className="text-zinc-500">Special Care / Meds Handling:</span>
                      <span className="font-mono font-medium text-emerald-600">+₦{specialCareCharge.toLocaleString()}</span>
                    </div>
                  )}
                  {serviceMultiplierFee > 0 && (
                    <div className="flex justify-between pt-2">
                      <span className="text-zinc-500">Speed Tier ({serviceType.toUpperCase()} +{(serviceMultiplierRate * 100)}%):</span>
                      <span className="font-mono font-medium text-amber-600">+₦{serviceMultiplierFee.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t flex justify-between items-baseline" style={{ borderColor: 'var(--color-border)' }}>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 block">Total Fare</span>
                    <span className="text-[11px] text-zinc-500">Paystack Escrow Protected</span>
                  </div>
                  <span className="text-2xl font-black font-mono text-emerald-600">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPaystackModal(true)}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg flex items-center justify-center gap-2 transition-all hover:opacity-95"
                  style={{ background: 'var(--color-primary)' }}
                >
                  <Lock size={16} />
                  Authorize & Pay with Paystack
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="flex justify-between items-center pt-8 border-t mt-8" style={{ borderColor: 'var(--color-border)' }}>
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              <ChevronLeft size={16} />
              Previous Step
            </button>
          ) : (
            <div />
          )}

          {step < 6 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-1.5 shadow-sm transition-all hover:opacity-95"
              style={{ background: 'var(--color-primary)' }}
            >
              Continue to Step {step + 1}
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Paystack Checkout Modal */}
      {showPaystackModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-md rounded-2xl p-6 shadow-2xl border space-y-5"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex justify-between items-center pb-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#0BA4DB] flex items-center justify-center text-white font-bold text-xs">
                  P
                </div>
                <span className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Paystack Secure Checkout</span>
              </div>
              <button
                type="button"
                onClick={() => setShowPaystackModal(false)}
                className="text-xs text-zinc-400 hover:text-zinc-600"
              >
                Cancel
              </button>
            </div>

            <div className="text-center space-y-1">
              <p className="text-xs text-zinc-400">Total amount due:</p>
              <p className="text-3xl font-black font-mono text-emerald-600">
                ₦{totalPrice.toLocaleString()}
              </p>
              <p className="text-xs text-zinc-500">SafePaws Escrow • Trip to {deliveryAddress.split(',')[0]}</p>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'card', label: 'Card', icon: CreditCard },
                { id: 'transfer', label: 'Transfer', icon: Building },
                { id: 'ussd', label: 'USSD', icon: Smartphone },
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaystackMethod(m.id as 'card' | 'transfer' | 'ussd')}
                    className="p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all text-xs font-semibold"
                    style={{
                      borderColor: paystackMethod === m.id ? '#0BA4DB' : 'var(--color-border)',
                      background: paystackMethod === m.id ? 'rgba(11, 164, 219, 0.1)' : 'var(--color-bg)',
                      color: paystackMethod === m.id ? '#0BA4DB' : 'var(--color-text)',
                    }}
                  >
                    <Icon size={16} />
                    {m.label}
                  </button>
                );
              })}
            </div>

            {paystackMethod === 'card' && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Card Number</label>
                  <input
                    type="text"
                    disabled
                    value="5399 •••• •••• 4022"
                    className="w-full p-2.5 rounded-lg border font-mono bg-zinc-50 dark:bg-zinc-800"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Expiry</label>
                    <input
                      type="text"
                      disabled
                      value="08 / 28"
                      className="w-full p-2.5 rounded-lg border font-mono bg-zinc-50 dark:bg-zinc-800"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-400 block mb-1">CVV</label>
                    <input
                      type="password"
                      disabled
                      value="•••"
                      className="w-full p-2.5 rounded-lg border font-mono bg-zinc-50 dark:bg-zinc-800"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {paystackMethod === 'transfer' && (
              <div className="p-4 rounded-xl border text-xs space-y-1.5 text-center bg-zinc-50 dark:bg-zinc-800" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-zinc-400">Pay to SafePaws Nigerian Dedicated Account:</span>
                <p className="font-bold text-sm text-emerald-600 font-mono">Titan Trust Bank • 0129482910</p>
                <p className="text-[11px] text-zinc-400">Account Name: SafePaws Transit Escrow Ltd</p>
              </div>
            )}

            {paystackMethod === 'ussd' && (
              <div className="p-4 rounded-xl border text-xs space-y-1.5 text-center bg-zinc-50 dark:bg-zinc-800" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-zinc-400">Dial on your registered Nigerian line:</span>
                <p className="font-bold text-sm text-emerald-600 font-mono">*737*50*11100#</p>
                <p className="text-[11px] text-zinc-400">GTBank, Access, Zenith, UBA supported</p>
              </div>
            )}

            <button
              type="button"
              disabled={isProcessingPayment}
              onClick={handleCompletePaymentAndBook}
              className="w-full py-3 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 bg-[#0BA4DB] hover:opacity-90 disabled:opacity-50"
            >
              {isProcessingPayment ? (
                <span>Confirming Paystack authorization...</span>
              ) : (
                <>
                  <CheckCircle2 size={16} />
                  Authorize ₦{totalPrice.toLocaleString()}
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

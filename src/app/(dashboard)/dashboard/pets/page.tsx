'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PawPrint,
  Plus,
  Heart,
  Syringe,
  FileText,
  ShieldCheck,
  ChevronRight,
  X,
  Check,
} from 'lucide-react';
import { useSafePawsStore, Pet } from '@/lib/store';

export default function MyPetsPage() {
  const { pets, vaccinations, actions } = useSafePawsStore();
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  // New Pet Form State
  const [name, setName] = useState('');
  const [species, setSpecies] = useState<'Dog' | 'Cat' | 'Bird' | 'Other'>('Dog');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('15');
  const [gender, setGender] = useState<'Male' | 'Female'>('Male');
  const [microchipNumber, setMicrochipNumber] = useState('');
  const [vetName, setVetName] = useState('Dr. Adeyemi');
  const [vetPhone, setVetPhone] = useState('+234 802 345 6789');
  const [dietaryNotes, setDietaryNotes] = useState('Twice daily standard ration');

  const handleCreatePet = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight) || 10;
    const size: 'SMALL' | 'MEDIUM' | 'LARGE' = w > 25 ? 'LARGE' : w >= 10 ? 'MEDIUM' : 'SMALL';
    const emoji = species === 'Dog' ? '🐕' : species === 'Cat' ? '🐈' : species === 'Bird' ? '🦜' : '🐾';
    const emojiBg = species === 'Dog' ? '#fef3c7' : species === 'Cat' ? '#e0f2fe' : '#f3e8ff';

    actions.addPet({
      name,
      species,
      breed: breed || `${species} Companion`,
      age: age || '1 yr',
      weight: w,
      size,
      emoji,
      emojiBg,
      gender,
      healthStatus: 'ok',
      healthLabel: 'Initial registration complete',
      veterinarianName: vetName,
      veterinarianPhone: vetPhone,
      dietaryNotes,
      microchipNumber: microchipNumber || `NG-${Math.floor(1000 + Math.random() * 9000)}-${name.slice(0, 2).toUpperCase()}`,
      isSpayedNeutered: true,
    });

    // Reset and close
    setName('');
    setBreed('');
    setAge('');
    setWeight('15');
    setModalStep(1);
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
            <PawPrint size={14} />
            <span>Pet Management &amp; Passports</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
            My Registered Pets
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-sub)' }}>
            Manage profiles, medical clearances, microchip IDs, and travel preferences.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all hover:opacity-95"
          style={{ background: 'var(--color-primary)' }}
        >
          <Plus size={16} />
          Register New Pet
        </button>
      </div>

      {/* Pet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pets.map((pet) => {
          const petVaccs = vaccinations.filter((v) => v.petId === pet.id);
          return (
            <div
              key={pet.id}
              className="rounded-2xl border p-6 space-y-5 shadow-sm transition-all hover:shadow-md"
              style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner shrink-0"
                    style={{ background: pet.emojiBg }}
                  >
                    {pet.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-xl" style={{ color: 'var(--color-text)' }}>
                        {pet.name}
                      </h3>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {pet.size}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      {pet.breed} • {pet.age} • {pet.weight} kg • {pet.gender}
                    </p>
                    <p className="text-[11px] font-mono text-zinc-500 pt-0.5">
                      Microchip: {pet.microchipNumber}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[11px] px-2.5 py-1 rounded-full font-bold ${
                    pet.healthStatus === 'ok'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                      : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  }`}
                >
                  {pet.healthStatus === 'ok' ? 'Fit to Travel' : 'Booster Due'}
                </span>
              </div>

              {/* Medical Summary Snippet */}
              <div
                className="p-3.5 rounded-xl border text-xs space-y-2"
                style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 font-medium">Veterinarian:</span>
                  <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
                    {pet.veterinarianName || 'Dr. Adeyemi'} ({pet.veterinarianPhone || 'Lekki'})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 font-medium">Vaccine Clearances:</span>
                  <span className="text-emerald-600 font-bold">
                    {petVaccs.length > 0 ? `${petVaccs.length} verified on file` : 'Registration pending'}
                  </span>
                </div>
                {pet.dietaryNotes && (
                  <div className="flex items-start justify-between pt-1 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <span className="text-zinc-400 font-medium shrink-0 mr-2">Diet &amp; Handling:</span>
                    <span className="text-right text-zinc-500 truncate">{pet.dietaryNotes}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href="/dashboard/booking"
                  className="flex-1 py-2.5 text-center rounded-xl text-xs font-bold text-white shadow-sm transition-all hover:opacity-95"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Book Transport for {pet.name}
                </Link>
                <Link
                  href="/dashboard/health"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                >
                  <Heart size={14} className="text-rose-500" />
                  Health Passport
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Multi-Step Add Pet Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-lg rounded-2xl p-6 shadow-2xl border space-y-5"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                  Register New Pet Passenger
                </h3>
                <p className="text-xs text-zinc-400">Step {modalStep} of 2</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setModalStep(1);
                }}
              >
                <X size={18} className="text-zinc-400" />
              </button>
            </div>

            <form onSubmit={handleCreatePet} className="space-y-4 text-xs">
              {modalStep === 1 ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Pet Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bella"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Species *</label>
                      <select
                        value={species}
                        onChange={(e) => setSpecies(e.target.value as 'Dog' | 'Cat' | 'Bird' | 'Other')}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Other">Other Small Pet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Breed</label>
                      <input
                        type="text"
                        placeholder="e.g. Boerboel, Husky, Persian"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Age</label>
                      <input
                        type="text"
                        placeholder="e.g. 2 yrs"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Weight in kg (for crate sizing)</label>
                      <input
                        type="number"
                        step="0.5"
                        required
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full p-2.5 rounded-lg border outline-none font-mono font-bold"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Gender</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!name}
                    onClick={() => setModalStep(2)}
                    className="w-full py-3 rounded-xl font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1 disabled:opacity-50"
                    style={{ background: 'var(--color-primary)' }}
                  >
                    Continue to Medical &amp; Diet
                    <ChevronRight size={14} />
                  </button>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Primary Veterinarian</label>
                      <input
                        type="text"
                        value={vetName}
                        onChange={(e) => setVetName(e.target.value)}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                    <div>
                      <label className="text-zinc-400 font-semibold block mb-1">Vet Phone Number</label>
                      <input
                        type="tel"
                        value={vetPhone}
                        onChange={(e) => setVetPhone(e.target.value)}
                        className="w-full p-2.5 rounded-lg border outline-none"
                        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-zinc-400 font-semibold block mb-1">Microchip ID (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. NG-8821-4401"
                      value={microchipNumber}
                      onChange={(e) => setMicrochipNumber(e.target.value)}
                      className="w-full p-2.5 rounded-lg border outline-none font-mono"
                      style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div>
                    <label className="text-zinc-400 font-semibold block mb-1">Dietary &amp; Travel Handling Preferences</label>
                    <textarea
                      rows={2}
                      value={dietaryNotes}
                      onChange={(e) => setDietaryNotes(e.target.value)}
                      placeholder="Special foods, hydration needs, likes/dislikes..."
                      className="w-full p-2.5 rounded-lg border outline-none resize-none"
                      style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setModalStep(1)}
                      className="px-4 py-2.5 rounded-xl font-semibold text-xs border"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 rounded-xl font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1"
                      style={{ background: 'var(--color-primary)' }}
                    >
                      <Check size={14} />
                      Complete Registration
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

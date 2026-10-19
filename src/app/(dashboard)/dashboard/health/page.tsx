'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  Syringe,
  Pill,
  Scale,
  Calendar,
  Clock,
  Plus,
  Check,
  CheckCircle2,
  AlertCircle,
  FileText,
  Utensils,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  X,
} from 'lucide-react';
import { useSafePawsStore } from '@/lib/store';

export default function PetHealthPassportPage() {
  const { pets, vaccinations, medications, weights, healthNotes, medicationLogs, actions } = useSafePawsStore();

  const [selectedPetId, setSelectedPetId] = useState(pets[0]?.id || 'pet_1');
  const [activeTab, setActiveTab] = useState<'overview' | 'vaccines' | 'medications' | 'feeding' | 'weight' | 'timeline'>('overview');

  // Modals state
  const [showAddVaccineModal, setShowAddVaccineModal] = useState(false);
  const [newVacName, setNewVacName] = useState('Bordetella Kennel Cough');
  const [newVacDate, setNewVacDate] = useState('2026-10-19');
  const [newVacDue, setNewVacDue] = useState('2027-10-19');
  const [newVacClinic, setNewVacClinic] = useState('Lekki Vet Clinic');

  const [showAddWeightModal, setShowAddWeightModal] = useState(false);
  const [newWeightVal, setNewWeightVal] = useState('28.2');

  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNoteType, setNewNoteType] = useState<'VET_VISIT' | 'VACCINATION' | 'ILLNESS' | 'GENERAL'>('VET_VISIT');
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  const currentPet = pets.find((p) => p.id === selectedPetId) || pets[0];
  const petVaccines = vaccinations.filter((v) => v.petId === selectedPetId);
  const petMedications = medications.filter((m) => m.petId === selectedPetId);
  const petWeights = weights.filter((w) => w.petId === selectedPetId);
  const petNotes = healthNotes.filter((n) => n.petId === selectedPetId);

  const handleAddVaccine = (e: React.FormEvent) => {
    e.preventDefault();
    actions.addVaccination({
      petId: selectedPetId,
      vaccineName: newVacName,
      dateAdministered: newVacDate,
      nextDueDate: newVacDue,
      veterinarianName: newVacClinic,
      status: 'valid',
    });
    setShowAddVaccineModal(false);
  };

  const handleAddWeight = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(newWeightVal);
    if (!isNaN(w)) {
      actions.addWeightRecord(selectedPetId, w, 'Oct 2026');
      actions.updatePet(selectedPetId, { weight: w });
    }
    setShowAddWeightModal(false);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    actions.addHealthNote({
      petId: selectedPetId,
      type: newNoteType,
      title: newNoteTitle || 'Veterinary Health Note',
      content: newNoteContent,
      date: '19 Oct 2026',
    });
    setNewNoteTitle('');
    setNewNoteContent('');
    setShowAddNoteModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">
            <HeartPulse size={14} />
            <span>Pet Health &amp; Immunization Passport</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: 'var(--color-text)' }}>
            Digital Medical Records
          </h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-sub)' }}>
            Immunization schedule, active prescription tracking, daily feeding, and weight diagnostics.
          </p>
        </div>

        {/* Pet Switcher Buttons */}
        <div className="flex items-center gap-2 p-1 rounded-xl border bg-zinc-100 dark:bg-zinc-900" style={{ borderColor: 'var(--color-border)' }}>
          {pets.map((p) => {
            const isSelected = p.id === selectedPetId;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPetId(p.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <span>{p.emoji}</span>
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
        {[
          { id: 'overview', label: 'Health Overview', icon: HeartPulse },
          { id: 'vaccines', label: `Vaccinations (${petVaccines.length})`, icon: Syringe },
          { id: 'medications', label: `Medications (${petMedications.length})`, icon: Pill },
          { id: 'feeding', label: 'Feeding Schedule', icon: Utensils },
          { id: 'weight', label: 'Weight Tracker', icon: Scale },
          { id: 'timeline', label: `History & Notes (${petNotes.length})`, icon: FileText },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as 'overview' | 'vaccines' | 'medications' | 'feeding' | 'weight' | 'timeline')}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap"
              style={{
                background: isActive ? 'var(--color-surface)' : 'transparent',
                border: isActive ? '1px solid var(--color-border)' : '1px solid transparent',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-sub)',
                boxShadow: isActive ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
              }}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ── TAB 1: HEALTH OVERVIEW ───────────────────────────────────────────── */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Main Pet Profile Header Card */}
          <div
            className="rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-inner shrink-0"
                style={{ background: currentPet.emojiBg }}
              >
                {currentPet.emoji}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black" style={{ color: 'var(--color-text)' }}>
                    {currentPet.name}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {currentPet.healthLabel}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {currentPet.breed} • {currentPet.gender} • {currentPet.age} • Microchip: {currentPet.microchipNumber}
                </p>
                <p className="text-xs text-zinc-500">
                  Primary Vet: {currentPet.veterinarianName} ({currentPet.veterinarianPhone})
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowAddWeightModal(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                <Scale size={14} />
                Log Weight
              </button>
              <button
                type="button"
                onClick={() => setShowAddNoteModal(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                <FileText size={14} />
                Add Note
              </button>
              <Link
                href="/dashboard/booking"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm flex items-center gap-1.5 transition-all hover:opacity-95"
                style={{ background: 'var(--color-primary)' }}
              >
                Book Vet Ride
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Quick Metrics KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border space-y-1" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Current Weight</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black font-mono" style={{ color: 'var(--color-text)' }}>
                  {currentPet.weight} kg
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center">
                  <TrendingUp size={12} className="mr-0.5" /> +0.2 kg
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">In optimal veterinary band</p>
            </div>

            <div className="p-5 rounded-2xl border space-y-1" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Vaccine Clearance</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black font-mono text-emerald-600">
                  {petVaccines.filter((v) => v.status === 'valid').length} / {petVaccines.length}
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">All travel clearances verified</p>
            </div>

            <div className="p-5 rounded-2xl border space-y-1" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Active Prescriptions</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black font-mono" style={{ color: 'var(--color-text)' }}>
                  {petMedications.length}
                </span>
                <span className="text-xs text-zinc-400">Medications</span>
              </div>
              <p className="text-[11px] text-zinc-500">Next dose at 8:00 PM</p>
            </div>

            <div className="p-5 rounded-2xl border space-y-1" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Last Vet Checkup</span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold font-mono" style={{ color: 'var(--color-text)' }}>
                  15 Aug 2026
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">Dr. Adeyemi • Routine pass</p>
            </div>
          </div>

          {/* Today's Medication & Feeding Checklists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medications Card */}
            <div className="rounded-2xl border p-6 space-y-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Today&apos;s Medication Doses</h4>
                <button
                  type="button"
                  onClick={() => setActiveTab('medications')}
                  className="text-xs text-emerald-600 hover:underline"
                >
                  View Details →
                </button>
              </div>

              {petMedications.length === 0 ? (
                <p className="text-xs text-zinc-400">No active medications scheduled for {currentPet.name}.</p>
              ) : (
                <div className="space-y-3">
                  {petMedications.map((m) => (
                    <div key={m.id} className="p-3.5 rounded-xl border flex items-center justify-between" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                      <div>
                        <p className="font-bold text-xs" style={{ color: 'var(--color-text)' }}>{m.medicationName}</p>
                        <p className="text-[11px] text-zinc-400">{m.dosage} • {m.frequency}</p>
                        <span className="text-[10px] text-emerald-600">Last given: {m.lastGivenAt || 'Pending'}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => actions.markMedicationGiven(m.id, currentPet.name)}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm flex items-center gap-1"
                        style={{ background: 'var(--color-primary)' }}
                      >
                        <Check size={12} />
                        Mark Given
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Feeding Schedule Card */}
            <div className="rounded-2xl border p-6 space-y-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Today&apos;s Feeding Routine</h4>
                <button
                  type="button"
                  onClick={() => setActiveTab('feeding')}
                  className="text-xs text-emerald-600 hover:underline"
                >
                  View Times →
                </button>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl border flex items-center justify-between" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      AM
                    </div>
                    <div>
                      <p className="font-bold text-xs" style={{ color: 'var(--color-text)' }}>Morning Meal (7:30 AM)</p>
                      <p className="text-[11px] text-zinc-400">{currentPet.dietaryNotes || 'Standard ration'}</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 size={14} /> Completed
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border flex items-center justify-between" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 flex items-center justify-center font-bold text-xs">
                      PM
                    </div>
                    <div>
                      <p className="font-bold text-xs" style={{ color: 'var(--color-text)' }}>Evening Meal (6:00 PM)</p>
                      <p className="text-[11px] text-zinc-400">{currentPet.dietaryNotes || 'Standard ration'}</p>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 font-medium">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: VACCINATIONS ──────────────────────────────────────────────── */}
      {activeTab === 'vaccines' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                Immunization Passport for {currentPet.name}
              </h3>
              <p className="text-xs text-zinc-400">
                Official vaccination records, batch numbers, and due dates verified by certified vets.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAddVaccineModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm"
              style={{ background: 'var(--color-primary)' }}
            >
              <Plus size={14} />
              Add Vaccine Record
            </button>
          </div>

          <div className="rounded-2xl border overflow-hidden" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <table className="w-full text-left text-xs">
              <thead className="border-b" style={{ background: 'var(--color-surface-raised)', borderColor: 'var(--color-border)' }}>
                <tr>
                  <th className="p-4 font-bold uppercase tracking-wider text-zinc-400">Vaccine Name</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-zinc-400">Administered</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-zinc-400">Next Due Date</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-zinc-400">Veterinarian / Clinic</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-zinc-400 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
                {petVaccines.map((v) => (
                  <tr key={v.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors">
                    <td className="p-4 font-bold" style={{ color: 'var(--color-text)' }}>
                      {v.vaccineName}
                    </td>
                    <td className="p-4 font-mono text-zinc-500">{v.dateAdministered}</td>
                    <td className="p-4 font-mono font-semibold" style={{ color: 'var(--color-text)' }}>
                      {v.nextDueDate}
                    </td>
                    <td className="p-4 text-zinc-400">{v.veterinarianName}</td>
                    <td className="p-4 text-right">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                          v.status === 'valid'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : v.status === 'due_soon'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        }`}
                      >
                        {v.status === 'valid' ? 'Valid' : v.status === 'due_soon' ? 'Due Soon' : 'Overdue'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── TAB 3: MEDICATIONS ──────────────────────────────────────────────── */}
      {activeTab === 'medications' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                Active Prescriptions &amp; Dose Tracking
              </h3>
              <p className="text-xs text-zinc-400">
                Log doses in real time; alerts notify handlers ahead of scheduled transit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {petMedications.map((m) => {
              const remainingPercent = Math.round((m.pillsRemaining / m.totalPills) * 100);
              return (
                <div
                  key={m.id}
                  className="rounded-2xl border p-6 space-y-4 shadow-sm"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                        {m.medicationName}
                      </h4>
                      <p className="text-xs text-zinc-400">{m.purpose}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-lg">
                      {m.dosage}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Pills Remaining:</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--color-text)' }}>
                        {m.pillsRemaining} of {m.totalPills} ({remainingPercent}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${remainingPercent}%`,
                          background: remainingPercent < 25 ? '#EF4444' : 'var(--color-primary)',
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border text-xs space-y-1" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Frequency:</span>
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{m.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Last Dose Given:</span>
                      <span className="font-semibold text-emerald-600">{m.lastGivenAt || 'None logged today'}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => actions.markMedicationGiven(m.id, currentPet.name)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1.5 transition-all hover:opacity-95"
                    style={{ background: 'var(--color-primary)' }}
                  >
                    <Check size={14} />
                    Mark Dose as Given Now
                  </button>
                </div>
              );
            })}
          </div>

          {/* Past Dose Logs */}
          <div className="rounded-2xl border p-6 space-y-3" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Recent Medication Dose History</h4>
            {medicationLogs.length === 0 ? (
              <p className="text-xs text-zinc-400">No dose logs registered yet. Click &apos;Mark Dose as Given Now&apos; above.</p>
            ) : (
              <div className="space-y-2">
                {medicationLogs.slice(0, 5).map((log) => (
                  <div key={log.id} className="p-3 rounded-xl border flex items-center justify-between text-xs" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{log.petName}</span>
                      <span className="text-zinc-400">• Administered by {log.givenBy}</span>
                    </div>
                    <span className="font-mono text-zinc-500">{log.givenAt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── TAB 4: FEEDING ──────────────────────────────────────────────────── */}
      {activeTab === 'feeding' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border space-y-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
              Daily Nutritional &amp; Hydration Schedule
            </h3>
            <p className="text-xs text-zinc-400">
              Handlers follow your exact portion guidelines during travel stops and long-distance transfers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl border space-y-2" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Morning Ration (7:30 AM)</h4>
                  <span className="text-xs text-emerald-600 font-bold">1.5 Cups</span>
                </div>
                <p className="text-xs text-zinc-500">{currentPet.dietaryNotes || 'Royal Canin Adult / grain-free kibble'}</p>
                <div className="pt-2 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <CheckCircle2 size={14} /> Recorded as Fed by Owner
                </div>
              </div>

              <div className="p-5 rounded-2xl border space-y-2" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>Evening Ration (6:00 PM)</h4>
                  <span className="text-xs text-emerald-600 font-bold">1.5 Cups</span>
                </div>
                <p className="text-xs text-zinc-500">{currentPet.dietaryNotes || 'Royal Canin Adult / grain-free kibble'}</p>
                <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-medium">
                  <Clock size={14} /> Scheduled for Evening Transit Stop
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 5: WEIGHT TRACKER ───────────────────────────────────────────── */}
      {activeTab === 'weight' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                Weight History &amp; Growth Analysis
              </h3>
              <p className="text-xs text-zinc-400">
                Track healthy mass for proper transit crate sizing and anesthesia dosage accuracy.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAddWeightModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm"
              style={{ background: 'var(--color-primary)' }}
            >
              <Plus size={14} />
              Add Weight Entry
            </button>
          </div>

          <div className="rounded-2xl border p-6 space-y-6" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            {/* Visual Bar Trend */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">6-Month Trend</span>
              <div className="h-44 flex items-end justify-between gap-4 pt-6 px-4 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                {petWeights.map((w, i) => {
                  const maxWeight = Math.max(...petWeights.map((x) => x.weight), 30);
                  const barHeight = Math.round((w.weight / maxWeight) * 100);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <span className="text-xs font-mono font-bold" style={{ color: 'var(--color-text)' }}>
                        {w.weight}kg
                      </span>
                      <div
                        className="w-full max-w-[48px] rounded-t-lg transition-all duration-500"
                        style={{ height: `${barHeight}%`, background: 'var(--color-primary)' }}
                      />
                      <span className="text-[11px] text-zinc-400 font-mono">{w.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 6: TIMELINE & NOTES ─────────────────────────────────────────── */}
      {activeTab === 'timeline' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                Health Event Journal
              </h3>
              <p className="text-xs text-zinc-400">
                Timeline of veterinary consults, booster shots, travel stress evaluations, and treatments.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAddNoteModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm"
              style={{ background: 'var(--color-primary)' }}
            >
              <Plus size={14} />
              Add Health Note
            </button>
          </div>

          <div className="space-y-4">
            {petNotes.map((note) => (
              <div
                key={note.id}
                className="rounded-2xl border p-5 flex items-start gap-4 transition-all"
                style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)', color: 'var(--color-primary)' }}
                >
                  <FileText size={18} />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{note.title}</h4>
                    <span className="font-mono text-xs text-zinc-400">{note.date}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Vaccine Modal */}
      {showAddVaccineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-2xl p-6 shadow-2xl border space-y-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>Add Vaccination Record</h3>
              <button type="button" onClick={() => setShowAddVaccineModal(false)}><X size={18} className="text-zinc-400" /></button>
            </div>
            <form onSubmit={handleAddVaccine} className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Vaccine Name</label>
                <input
                  type="text"
                  required
                  value={newVacName}
                  onChange={(e) => setNewVacName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border outline-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Date Given</label>
                  <input
                    type="date"
                    required
                    value={newVacDate}
                    onChange={(e) => setNewVacDate(e.target.value)}
                    className="w-full p-2.5 rounded-lg border outline-none"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
                <div>
                  <label className="text-zinc-400 font-semibold block mb-1">Next Due Date</label>
                  <input
                    type="date"
                    required
                    value={newVacDue}
                    onChange={(e) => setNewVacDue(e.target.value)}
                    className="w-full p-2.5 rounded-lg border outline-none"
                    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Administering Clinic / Vet</label>
                <input
                  type="text"
                  required
                  value={newVacClinic}
                  onChange={(e) => setNewVacClinic(e.target.value)}
                  className="w-full p-2.5 rounded-lg border outline-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs text-white mt-2 shadow-sm"
                style={{ background: 'var(--color-primary)' }}
              >
                Save Vaccine Entry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Weight Modal */}
      {showAddWeightModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-2xl p-6 shadow-2xl border space-y-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>Log Pet Weight</h3>
              <button type="button" onClick={() => setShowAddWeightModal(false)}><X size={18} className="text-zinc-400" /></button>
            </div>
            <form onSubmit={handleAddWeight} className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Weight in Kilograms (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  required
                  value={newWeightVal}
                  onChange={(e) => setNewWeightVal(e.target.value)}
                  className="w-full p-2.5 rounded-lg border outline-none font-mono text-base font-bold"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs text-white shadow-sm"
                style={{ background: 'var(--color-primary)' }}
              >
                Save Weight Record
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add Health Note Modal */}
      {showAddNoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md rounded-2xl p-6 shadow-2xl border space-y-4" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>Add Medical Note</h3>
              <button type="button" onClick={() => setShowAddNoteModal(false)}><X size={18} className="text-zinc-400" /></button>
            </div>
            <form onSubmit={handleAddNote} className="space-y-3 text-xs">
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Event Category</label>
                <select
                  value={newNoteType}
                  onChange={(e) => setNewNoteType(e.target.value as 'VET_VISIT' | 'VACCINATION' | 'ILLNESS' | 'GENERAL')}
                  className="w-full p-2.5 rounded-lg border outline-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                >
                  <option value="VET_VISIT">Veterinary Visit / Assessment</option>
                  <option value="VACCINATION">Vaccination Event</option>
                  <option value="ILLNESS">Illness / Symptom Observed</option>
                  <option value="GENERAL">General Care Note</option>
                </select>
              </div>
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Post-grooming physical check"
                  value={newNoteTitle}
                  onChange={(e) => setNewNoteTitle(e.target.value)}
                  className="w-full p-2.5 rounded-lg border outline-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>
              <div>
                <label className="text-zinc-400 font-semibold block mb-1">Clinical or Behavioral Notes</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Observations from vet, physical response, or special instructions..."
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  className="w-full p-2.5 rounded-lg border outline-none resize-none"
                  style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs text-white shadow-sm"
                style={{ background: 'var(--color-primary)' }}
              >
                Save Health Journal Entry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

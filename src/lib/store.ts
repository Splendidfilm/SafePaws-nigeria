// Central In-Memory & LocalStorage State Store for SafePaws Nigeria
'use client';

import { useState, useEffect } from 'react';

export interface Pet {
  id: string;
  name: string;
  species: 'Dog' | 'Cat' | 'Bird' | 'Other';
  breed: string;
  age: string;
  weight: number; // in kg
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  emoji: string;
  emojiBg: string;
  gender: 'Male' | 'Female';
  healthStatus: 'ok' | 'warning' | 'urgent';
  healthLabel: string;
  veterinarianName?: string;
  veterinarianPhone?: string;
  allergies?: string[];
  medicalConditions?: string[];
  isSpayedNeutered?: boolean;
  dietaryNotes?: string;
  microchipNumber?: string;
}

export interface Vaccination {
  id: string;
  petId: string;
  vaccineName: string;
  dateAdministered: string;
  nextDueDate: string;
  veterinarianName: string;
  status: 'valid' | 'due_soon' | 'overdue';
}

export interface Medication {
  id: string;
  petId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  purpose: string;
  startDate: string;
  endDate?: string;
  pillsRemaining: number;
  totalPills: number;
  times: string[]; // e.g. ["08:00 AM", "08:00 PM"]
  lastGivenAt?: string;
}

export interface MedicationLog {
  id: string;
  medicationId: string;
  petName: string;
  givenAt: string;
  givenBy: string;
  notes?: string;
}

export interface WeightRecord {
  id: string;
  petId: string;
  weight: number;
  date: string;
}

export interface HealthNote {
  id: string;
  petId: string;
  type: 'VET_VISIT' | 'VACCINATION' | 'ILLNESS' | 'MEDICATION_CHANGE' | 'GENERAL';
  title: string;
  content: string;
  date: string;
}

export interface Booking {
  id: string; // SP-2024-XXXXX
  userId: string;
  petId: string;
  petName: string;
  petEmoji: string;
  pickupAddress: string;
  deliveryAddress: string;
  pickupDate: string;
  pickupTime: string;
  distanceKm: number;
  serviceType: 'standard' | 'same_day' | 'express';
  petSize: 'small' | 'medium' | 'large';
  needsMedication: boolean;
  medicationDetails?: string;
  dietaryNotes?: string;
  handlerId: string;
  handlerName: string;
  handlerPhone: string;
  handlerRating: number;
  vehiclePlate: string;
  basePrice: number;
  distanceCharge: number;
  sizeMultiplier: number;
  specialCareCharge: number;
  serviceMultiplierFee: number;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED';
  paymentStatus: 'PENDING' | 'PAID';
  progressPercentage: number;
  cabinTempC: number;
  petStatus: string;
  currentCheckpoint: string;
  eta: string;
  photoUrls?: string[];
}

export interface Handler {
  id: string;
  name: string;
  initials: string;
  phone: string;
  title: string;
  rating: number;
  tripsCount: number;
  coverageZones: string[];
  certifications: string[];
  vehicle: string;
  available: boolean;
  bio: string;
}

// ─── Default Initial Mock Data ────────────────────────────────────────────────

export const INITIAL_PETS: Pet[] = [
  {
    id: 'pet_1',
    name: 'Bruno',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: '3 yrs',
    weight: 28,
    size: 'LARGE',
    emoji: '🐕',
    emojiBg: '#fef3c7',
    gender: 'Male',
    healthStatus: 'ok',
    healthLabel: 'Vaccinations up to date',
    veterinarianName: 'Dr. Adeyemi',
    veterinarianPhone: '+234 802 345 6789',
    allergies: ['Chicken meal'],
    medicalConditions: ['None'],
    isSpayedNeutered: true,
    dietaryNotes: 'High-protein kibble twice daily; prefers fresh water after walks.',
    microchipNumber: 'NG-9820-4102-BR',
  },
  {
    id: 'pet_2',
    name: 'Luna',
    species: 'Cat',
    breed: 'Siamese Cat',
    age: '2 yrs',
    weight: 4.2,
    size: 'SMALL',
    emoji: '🐈',
    emojiBg: '#e0f2fe',
    gender: 'Female',
    healthStatus: 'warning',
    healthLabel: 'Booster due in 3 days',
    veterinarianName: 'Dr. Ogechi Nwachukwu',
    veterinarianPhone: '+234 803 987 6543',
    allergies: ['None'],
    medicalConditions: ['Mild travel anxiety'],
    isSpayedNeutered: true,
    dietaryNotes: 'Grain-free wet food at 7:30 AM and 6:00 PM.',
    microchipNumber: 'NG-4102-9981-LN',
  },
];

export const INITIAL_HANDLERS: Handler[] = [
  {
    id: 'h_1',
    name: 'Chinedu O.',
    initials: 'CO',
    phone: '+234 803 555 0192',
    title: 'Senior Pet Handler & Veterinary First Responder',
    rating: 4.9,
    tripsCount: 184,
    coverageZones: ['Lekki', 'Ikoyi', 'Victoria Island'],
    certifications: ['Certified Animal First Aid', 'Safe Driver Certified', 'Canine CPR'],
    vehicle: 'Toyota Hiace Climate-Van (KJA-482-AB)',
    available: true,
    bio: 'Over 5 years of certified veterinary transport experience handling large breed dogs and sensitive animals across Lagos State.',
  },
  {
    id: 'h_2',
    name: 'Amara K.',
    initials: 'AK',
    phone: '+234 802 444 8812',
    title: 'Feline & Small Canine Specialist',
    rating: 5.0,
    tripsCount: 142,
    coverageZones: ['Ikeja', 'Maryland', 'Surulere'],
    certifications: ['Fear Free Certified Handler', 'Feline Behaviour Specialist'],
    vehicle: 'Honda Odyssey Air-Ride (AGL-910-BC)',
    available: true,
    bio: 'Specialized in soothing fearful pets and maintaining ambient cabin acoustics for low-stress city transports.',
  },
  {
    id: 'h_3',
    name: 'Tunde B.',
    initials: 'TB',
    phone: '+234 809 111 2345',
    title: 'Interstate Relocation Lead',
    rating: 4.9,
    tripsCount: 230,
    coverageZones: ['Lagos - Ibadan - Abuja Corridor'],
    certifications: ['Long Distance Pet Transit', 'Defensive Driving Gold', 'Emergency Vet Triage'],
    vehicle: 'Mercedes Sprinter Dual-AC Pet Cruiser (ABC-334-XY)',
    available: true,
    bio: 'Master certified for interstate pet travel across Western and Northern Nigeria with designated hydration stop protocols.',
  },
];

export const INITIAL_VACCINATIONS: Vaccination[] = [
  {
    id: 'v_1',
    petId: 'pet_1',
    vaccineName: 'Rabies (Annual Booster)',
    dateAdministered: '15 Aug 2026',
    nextDueDate: '15 Aug 2027',
    veterinarianName: 'Dr. Adeyemi (Victoria Island Pet Hospital)',
    status: 'valid',
  },
  {
    id: 'v_2',
    petId: 'pet_1',
    vaccineName: 'DHPP Canine 5-in-1',
    dateAdministered: '15 Aug 2026',
    nextDueDate: '15 Aug 2027',
    veterinarianName: 'Dr. Adeyemi',
    status: 'valid',
  },
  {
    id: 'v_3',
    petId: 'pet_2',
    vaccineName: 'FVRCP Tri-annual Booster',
    dateAdministered: '22 Oct 2023',
    nextDueDate: '22 Oct 2026',
    veterinarianName: 'Dr. Ogechi (Lekki Vet Clinic)',
    status: 'due_soon',
  },
];

export const INITIAL_MEDICATIONS: Medication[] = [
  {
    id: 'm_1',
    petId: 'pet_1',
    medicationName: 'Amoxicillin Antibiotic Oral Susp.',
    dosage: '5mg / 1 chewable tablet',
    frequency: 'Twice daily with meals',
    purpose: 'Skin abrasion treatment recovery',
    startDate: '14 Oct 2026',
    endDate: '24 Oct 2026',
    pillsRemaining: 6,
    totalPills: 20,
    times: ['08:00 AM', '08:00 PM'],
    lastGivenAt: 'Today, 8:00 AM',
  },
  {
    id: 'm_2',
    petId: 'pet_2',
    medicationName: 'Zylkene Calm Natural Supplement',
    dosage: '75mg capsule in food',
    frequency: 'Once daily before travel',
    purpose: 'Travel anxiety mitigation',
    startDate: '10 Oct 2026',
    pillsRemaining: 14,
    totalPills: 30,
    times: ['07:30 AM'],
    lastGivenAt: 'Today, 7:30 AM',
  },
];

export const INITIAL_WEIGHTS: WeightRecord[] = [
  { id: 'w_1', petId: 'pet_1', weight: 27.2, date: 'May 2026' },
  { id: 'w_2', petId: 'pet_1', weight: 27.5, date: 'Jul 2026' },
  { id: 'w_3', petId: 'pet_1', weight: 27.8, date: 'Aug 2026' },
  { id: 'w_4', petId: 'pet_1', weight: 28.0, date: 'Oct 2026' },
  { id: 'w_5', petId: 'pet_2', weight: 4.0, date: 'Jul 2026' },
  { id: 'w_6', petId: 'pet_2', weight: 4.1, date: 'Aug 2026' },
  { id: 'w_7', petId: 'pet_2', weight: 4.2, date: 'Oct 2026' },
];

export const INITIAL_HEALTH_NOTES: HealthNote[] = [
  {
    id: 'hn_1',
    petId: 'pet_1',
    type: 'VACCINATION',
    title: 'Annual Rabies & DHPP Booster',
    content: 'Full wellness check completed. Clear lungs, heart rate normal at 85 bpm, dental tartar minimal.',
    date: '15 Aug 2026',
  },
  {
    id: 'hn_2',
    petId: 'pet_2',
    type: 'VET_VISIT',
    title: 'Pre-Travel Routine Assessment',
    content: 'Examined ahead of grooming transit. Prescribed Zylkene for calm travel demeanor.',
    date: '10 Oct 2026',
  },
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'SP-2024-00123',
    userId: 'usr_default',
    petId: 'pet_1',
    petName: 'Bruno',
    petEmoji: '🐕',
    pickupAddress: '14 Admiralty Way, Lekki Phase 1, Lagos',
    deliveryAddress: 'Lekki Vet Clinic, Admiralty Way, Lagos',
    pickupDate: '2026-10-19',
    pickupTime: '14:30',
    distanceKm: 8,
    serviceType: 'standard',
    petSize: 'large',
    needsMedication: true,
    medicationDetails: 'Antibiotic 5mg due at 8:00 PM if trip extends',
    dietaryNotes: 'No treats before ride',
    handlerId: 'h_1',
    handlerName: 'Chinedu O.',
    handlerPhone: '+234 803 555 0192',
    handlerRating: 4.9,
    vehiclePlate: 'KJA-482-AB',
    basePrice: 5000,
    distanceCharge: 400,
    sizeMultiplier: 2000,
    specialCareCharge: 750,
    serviceMultiplierFee: 0,
    totalPrice: 8150,
    status: 'IN_TRANSIT',
    paymentStatus: 'PAID',
    progressPercentage: 68,
    cabinTempC: 22,
    petStatus: 'Comfortable and resting',
    currentCheckpoint: 'Lekki Phase 1 Roundabout',
    eta: '12 min',
    photoUrls: [
      '/public/images/Dog_image_GR.png',
    ],
  },
  {
    id: 'SP-2024-00118',
    userId: 'usr_default',
    petId: 'pet_2',
    petName: 'Luna',
    petEmoji: '🐈',
    pickupAddress: 'Ahmadu Bello Way, Victoria Island',
    deliveryAddress: 'SafePaws Care Hub, Ikoyi',
    pickupDate: '2026-10-18',
    pickupTime: '10:00',
    distanceKm: 12,
    serviceType: 'same_day',
    petSize: 'small',
    needsMedication: false,
    handlerId: 'h_2',
    handlerName: 'Amara K.',
    handlerPhone: '+234 802 444 8812',
    handlerRating: 5.0,
    vehiclePlate: 'AGL-910-BC',
    basePrice: 5000,
    distanceCharge: 600,
    sizeMultiplier: 0,
    specialCareCharge: 0,
    serviceMultiplierFee: 1120,
    totalPrice: 6720,
    status: 'DELIVERED',
    paymentStatus: 'PAID',
    progressPercentage: 100,
    cabinTempC: 21,
    petStatus: 'Safely delivered and handed to owner',
    currentCheckpoint: 'Trip Completed',
    eta: 'Delivered',
  },
];

// ─── Store State Management ───────────────────────────────────────────────────

const STORAGE_KEYS = {
  PETS: 'safepaws_pets_v2',
  BOOKINGS: 'safepaws_bookings_v2',
  MEDICATIONS: 'safepaws_medications_v2',
  VACCINATIONS: 'safepaws_vaccinations_v2',
  WEIGHTS: 'safepaws_weights_v2',
  HEALTH_NOTES: 'safepaws_healthnotes_v2',
  MED_LOGS: 'safepaws_medlogs_v2',
};

// Global memory cache
const memoryStore = {
  pets: INITIAL_PETS,
  bookings: INITIAL_BOOKINGS,
  medications: INITIAL_MEDICATIONS,
  vaccinations: INITIAL_VACCINATIONS,
  weights: INITIAL_WEIGHTS,
  healthNotes: INITIAL_HEALTH_NOTES,
  handlers: INITIAL_HANDLERS,
  medicationLogs: [] as MedicationLog[],
};

// Broadcast channel / subscriber list
type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

export function getStoreData() {
  if (typeof window !== 'undefined') {
    try {
      const p = localStorage.getItem(STORAGE_KEYS.PETS);
      if (p) memoryStore.pets = JSON.parse(p);
      const b = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      if (b) memoryStore.bookings = JSON.parse(b);
      const m = localStorage.getItem(STORAGE_KEYS.MEDICATIONS);
      if (m) memoryStore.medications = JSON.parse(m);
      const v = localStorage.getItem(STORAGE_KEYS.VACCINATIONS);
      if (v) memoryStore.vaccinations = JSON.parse(v);
      const w = localStorage.getItem(STORAGE_KEYS.WEIGHTS);
      if (w) memoryStore.weights = JSON.parse(w);
      const hn = localStorage.getItem(STORAGE_KEYS.HEALTH_NOTES);
      if (hn) memoryStore.healthNotes = JSON.parse(hn);
      const ml = localStorage.getItem(STORAGE_KEYS.MED_LOGS);
      if (ml) memoryStore.medicationLogs = JSON.parse(ml);
    } catch (e) {
      console.warn('Storage read failed, using memory store', e);
    }
  }
  return memoryStore;
}

function persistStore() {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEYS.PETS, JSON.stringify(memoryStore.pets));
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(memoryStore.bookings));
      localStorage.setItem(STORAGE_KEYS.MEDICATIONS, JSON.stringify(memoryStore.medications));
      localStorage.setItem(STORAGE_KEYS.VACCINATIONS, JSON.stringify(memoryStore.vaccinations));
      localStorage.setItem(STORAGE_KEYS.WEIGHTS, JSON.stringify(memoryStore.weights));
      localStorage.setItem(STORAGE_KEYS.HEALTH_NOTES, JSON.stringify(memoryStore.healthNotes));
      localStorage.setItem(STORAGE_KEYS.MED_LOGS, JSON.stringify(memoryStore.medicationLogs));
    } catch (e) {
      console.warn('Storage write failed', e);
    }
  }
  notify();
}

// ─── Actions ──────────────────────────────────────────────────────────────────

export const storeActions = {
  addBooking: (newBooking: Booking) => {
    memoryStore.bookings = [newBooking, ...memoryStore.bookings];
    persistStore();
  },

  updateBookingStatus: (bookingId: string, status: Booking['status'], progress: number) => {
    memoryStore.bookings = memoryStore.bookings.map((b) =>
      b.id === bookingId ? { ...b, status, progressPercentage: progress } : b
    );
    persistStore();
  },

  addPet: (pet: Omit<Pet, 'id'>) => {
    const id = `pet_${Date.now()}`;
    const created: Pet = { ...pet, id };
    memoryStore.pets = [...memoryStore.pets, created];
    persistStore();
    return created;
  },

  updatePet: (id: string, updates: Partial<Pet>) => {
    memoryStore.pets = memoryStore.pets.map((p) => (p.id === id ? { ...p, ...updates } : p));
    persistStore();
  },

  markMedicationGiven: (medId: string, petName: string) => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const log: MedicationLog = {
      id: `log_${Date.now()}`,
      medicationId: medId,
      petName,
      givenAt: `Today, ${now}`,
      givenBy: 'Abina (Owner)',
      notes: 'Administered on schedule',
    };
    memoryStore.medications = memoryStore.medications.map((m) =>
      m.id === medId
        ? {
            ...m,
            pillsRemaining: Math.max(0, m.pillsRemaining - 1),
            lastGivenAt: `Today, ${now}`,
          }
        : m
    );
    memoryStore.medicationLogs = [log, ...memoryStore.medicationLogs];
    persistStore();
  },

  addVaccination: (vac: Omit<Vaccination, 'id'>) => {
    const created: Vaccination = { ...vac, id: `v_${Date.now()}` };
    memoryStore.vaccinations = [...memoryStore.vaccinations, created];
    persistStore();
  },

  addWeightRecord: (petId: string, weight: number, date: string) => {
    const record: WeightRecord = { id: `w_${Date.now()}`, petId, weight, date };
    memoryStore.weights = [...memoryStore.weights, record];
    persistStore();
  },

  addHealthNote: (note: Omit<HealthNote, 'id'>) => {
    const created: HealthNote = { ...note, id: `hn_${Date.now()}` };
    memoryStore.healthNotes = [created, ...memoryStore.healthNotes];
    persistStore();
  },
};

// ─── React Hook ───────────────────────────────────────────────────────────────

export function useSafePawsStore() {
  const [, setTick] = useState(0);

  useEffect(() => {
    getStoreData();
    const handleUpdate = () => setTick((t) => t + 1);
    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return {
    ...memoryStore,
    actions: storeActions,
  };
}

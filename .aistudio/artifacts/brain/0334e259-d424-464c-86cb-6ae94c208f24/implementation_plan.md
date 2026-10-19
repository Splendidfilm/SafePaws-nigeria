# SafePaws Nigeria: End-to-End Pet Transport & Care Platform

A comprehensive, production-grade web application for safe, climate-controlled pet transportation and health management across Nigeria, fulfilling the complete TRD v2.0 specification.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following core product and architectural decisions were confirmed via interactive consultation:

- **Confirmed Decision 1 (Scope & Workflow Priority)**: Implement the **complete end-to-end user experience** across three cornerstone systems:
  1. The 6-step Nigerian pet transport booking system with automated distance and fare calculation.
  2. The interactive live transit tracking dashboard with simulated vehicle telemetry, route checkpoints, and cabin climate controls.
  3. The comprehensive pet health dashboard with digital vaccination passports, active medication dose checklists, and weight tracking.
- **Confirmed Decision 2 (Map & Route Visualizer)**: Implement an **interactive stylized SVG route simulator** displaying active Nigerian transport corridors (e.g., Lekki–Ikoyi–Victoria Island, Ikeja–Airport, and Lagos–Ibadan Expressway), live checkpoint progression, vehicle speed/heading, and cabin temperature telemetry.
- **Confirmed Decision 3 (Data Persistence)**: Implement a **unified in-memory client/server state store** seeded with realistic Nigerian pet profiles, bookings, handlers, veterinary records, and live status updates for seamless, deterministic testing without database setup friction.

---

## 1. Overview & Core Concept

### What It Does
SafePaws Nigeria provides pet owners with a safe, climate-controlled, and certified transportation service for domestic animals across Nigerian cities. It combines:
- **Instant Fare Estimation & Booking**: 6-step booking flow calculating real fares using the official Nigerian formula ($₦5,000 \text{ base} + ₦50/\text{km} + \text{pet size multiplier} + \text{special care charge} + \text{service tier}$).
- **Active Journey Tracking**: Live map visualizer, route checkpoint timeline, cabin environmental telemetry ($22^\circ\text{C}$ climate control), pet comfort state, and handler contact actions.
- **Digital Pet Health & Immunization Passport**: Vaccination schedule (Rabies, DHPP, FVRCP) with countdown alerts, medication administration checklists with daily dosage logs, and weight history.
- **Certified Handler Registry**: Verified veterinary assistants and drivers with ratings, coverage zones, and safety credentials.

### Target Audience & Persona
- **Primary**: Urban pet owners across Lagos, Abuja, Port Harcourt, and Ibadan who need dependable, humane transportation for veterinary visits, grooming, relocation, or airport transit.
- **Secondary**: Pet owners seeking an organized medical diary and automated health reminders for multi-pet households.

---

## 2. User Experience & Visual Design

### Key User Flows

```
[Marketing Landing Page]
         │
         ▼
[Authentication / Direct Dashboard Entry]
         │
         ├───────────────────────┬────────────────────────┬──────────────────────┐
         ▼                       ▼                        ▼                      ▼
  [6-Step Booking]       [Live Transit Track]      [Pet Health Passport]   [Handler Directory]
  1. Journey Details     • Interactive Map View    • Health Overview Card  • Certified Handlers
  2. Select Pet Card     • Live Progress Bar       • Vaccine Calendar/List • Badges & Zones
  3. Special Care / Meds • Vehicle Telemetry       • Today's Dose Checklist • Reviews & Trips
  4. Handler Preference  • Handler Direct Call     • Feeding Schedule      • Direct Booking CTA
  5. Document Upload     • Emergency Dispatch      • Weight History Chart
  6. Review & Paystack   • Photo Stream Check-in   • Add Health Note
```

### Visual Identity & Design System
- **Aesthetic Direction**: High-trust veterinary mobility service—crisp, utilitarian, reassuring, and premium.
- **Color Palette & Theme**:
  - Canvas: Pristine light neutral (`#F8FAF9`) and deep nocturnal card surfaces (`#07100F` / `#0F1F1C`).
  - Primary Brand: Energetic Mint Jade (`#17CFAD` / hover `#13B899`), text contrast `#0D1F1C`.
  - Structural Surfaces: Crisp white cards (`#FFFFFF`) with subtle hairline dividers (`border-[#D4E2DE]`).
  - Semantics: Green (`#10B981`) for completed/nominal, Amber (`#F59E0B`) for due soon/warning, Crimson (`#DC3545`) for overdue/emergency hotline.
- **Typography & Formatting Hierarchy**:
  - Primary Sans: `Inter` / `Plus Jakarta Sans` for UI labels and layout.
  - Display / Headings: `Noto Sans` / `Outfit` for confident section titles.
  - Tabular Numerals: `font-mono tabular-nums` for coordinates, ETAs, timestamps, weights, and Nigerian Naira (`₦`) amounts.
- **Anti-Slop Restraint & Zero-Pill Discipline**:
  - No decorative pulsing dots or fake compiler status banners.
  - Metadata rendered as quiet unboxed text separated by typographic middots (`·`).
  - Buttons styled with structured padding (`py-2.5 px-4`), clear micro-interactions, and accessible contrast.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale & Alternatives Considered |
|---|---|---|
| **Fare Calculation** | Client-side reactive pricing engine matching TRD §5.7 formula | Immediate visual feedback as user toggles distance, pet size, medication needs, and service tiers (Standard, Same-Day +20%, Express +50%). |
| **Tracking Engine** | Interactive route SVG visualizer with live simulated step advancement | Zero external API key dependencies while providing fluid animation, checkpoint markers, and real-time cabin sensor readouts. |
| **State Management** | Centralized in-memory Reactive Store (`lib/store.ts`) | Allows adding new pets, completing bookings, logging vaccine doses, and seeing immediate cross-page reflection across all dashboard tabs without external DB downtime. |
| **Paystack Integration** | Interactive checkout modal with card, USSD, and bank transfer simulations | Allows users to test the complete booking lifecycle and invoice generation seamlessly. |

---

## 4. Technical Architecture & Data Strategy

### System Component Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SafePaws Web Application                        │
├────────────────────────────────┬───────────────────────────────────────┤
│         Marketing Tier         │            Dashboard Tier             │
│  • Hero & Trust Indicators     │  • Overview Stats & Quick Actions     │
│  • Interactive Coverage Map    │  • 6-Step Booking Wizard              │
│  • Public Fare Calculator      │  • Active Trip Live Tracker & Map     │
│  • Services & Safety Standards │  • Pet Health Passport & Dose Check   │
│  • Press, About & Help Hub     │  • Handlers Directory & Reviews       │
│                                │  • Wallet & Paystack Checkout Modal   │
├────────────────────────────────┴───────────────────────────────────────┤
│                          Application State                             │
│  • In-Memory Central Store: Pets, Bookings, Health Logs, Handlers      │
│  • Local Storage Sync for Session Persistence                          │
│  • Telemetry Simulation Loop: Coordinates, Temperature (22°C), ETA     │
└────────────────────────────────────────────────────────────────────────┘
```

### Core Data Models (TRD v2.0 Aligned)
1. **User**: Name, email, phone, role (`CUSTOMER`, `HANDLER`, `ADMIN`), emergency contact.
2. **Pet**: Name, species, breed, age, weight, size (`SMALL`, `MEDIUM`, `LARGE`), dietary notes, microchip number, emergency vet.
3. **Vaccination & Medication**: Vaccine name, date administered, next due date, status (`valid`, `due_soon`, `overdue`), active dosage, frequency, dose logs.
4. **Booking**: Booking number (`SP-2024-XXXXX`), pickup, destination, distance, petId, handlerId, serviceType (`STANDARD`, `SAME_DAY`, `EXPRESS`), fare breakdown, status (`CONFIRMED`, `IN_TRANSIT`, `DELIVERED`), paymentStatus.
5. **TrackingUpdate**: Coordinates, route progress percentage, vehicle temperature ($22^\circ\text{C}$), pet status message, journey checkpoints.

---

## Implementation Steps & Milestones

1. **Central State Store (`src/lib/store.ts`)**:
   - Create unified observable store containing default Nigerian pets (Bruno, Luna), active bookings, telemetry stream, handlers, and notification queues.
2. **6-Step Transport Booking Flow (`src/app/(dashboard)/dashboard/booking/page.tsx`)**:
   - Step 1: Journey Details (Nigerian pickup/dropoff presets, distance slider/calculation, service tier selector).
   - Step 2: Pet Selection (interactive cards with size and health status).
   - Step 3: Special Handling & Medication Requirements.
   - Step 4: Certified Handler Selection (optional preference toggle).
   - Step 5: Document & Health Certificate verification.
   - Step 6: Review, dynamic Nigerian fare breakdown, and Paystack checkout modal.
3. **Interactive Live Transit Tracker (`src/app/(dashboard)/dashboard/tracking/page.tsx`)**:
   - Large interactive map canvas showing route progression across Lagos/Nigeria.
   - Live cabin climate monitor ($22^\circ\text{C}$), comfort status, driver call, and milestone timeline.
4. **Pet Health & Medical Passport (`src/app/(dashboard)/dashboard/health/page.tsx` & `/pets/page.tsx`)**:
   - Comprehensive multi-pet health overview card.
   - Vaccine immunization schedule with status tags (`Verified`, `Due Soon`, `Overdue`).
   - Daily medication dosage checklist ("Mark as given" action with immediate log creation).
   - Weight tracking chart and health event timeline.
5. **Verification & Testing**:
   - Run linter and compiler checks. Verify zero TypeScript errors, fluid responsive layouts, and interactive handlers on every control.

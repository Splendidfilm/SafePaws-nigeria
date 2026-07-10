'use client'
import Link from "next/link";
import {
  MapPin,
  Phone,
  Star,
  BadgeCheck,
  Syringe,
  Receipt,
  Wallet,
  ChevronRight,
  Plus,
  Thermometer,
  Layers,
  HeartPulse,
  CalendarCheck,
  PackageCheck,
  PawPrint,
  Crosshair,
  Pill,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type HealthStatus = "ok" | "warning" | "urgent";

interface Pet {
  id: string;
  name: string;
  breed: string;
  age: string;
  emoji: string;
  emojiBg: string;
  healthStatus: HealthStatus;
  healthLabel: string;
}

interface Reminder {
  id: string;
  type: "vaccination" | "invoice" | "medication" | "appointment";
  title: string;
  subtitle: string;
  actionLabel: string;
  actionHref: string;
  accentColor: string;
  accentBg: string;
}

// ─── Mock data — swap for real server fetches / React Query later ─────────────

const ACTIVE_BOOKING = {
  petName: "Bruno",
  destination: "Lekki Vet Clinic",
  destinationAddress: "Admiralty Way, Lekki Phase 1",
  eta: "15 min",
  etaOnTime: true,
  handlerName: "Chinedu O.",
  handlerRating: 4.9,
  vehicleTempC: 22,
  petStatus: "Comfortable and resting",
  bookingId: "SP-2024-00123",
};

const PETS: Pet[] = [
  {
    id: "pet_1",
    name: "Bruno",
    breed: "Golden Retriever",
    age: "3 yrs",
    emoji: "🐕",
    emojiBg: "#fef3c7",
    healthStatus: "ok",
    healthLabel: "Vaccinations up to date",
  },
  {
    id: "pet_2",
    name: "Luna",
    breed: "Siamese Cat",
    age: "2 yrs",
    emoji: "🐈",
    emojiBg: "#e0f2fe",
    healthStatus: "warning",
    healthLabel: "Check-up due in 3 days",
  },
];

const REMINDERS: Reminder[] = [
  {
    id: "r1",
    type: "vaccination",
    title: "Luna's Vaccination",
    subtitle: "Tomorrow, 10:00 AM",
    actionLabel: "Book Transport",
    actionHref: "/dashboard/booking",
    accentColor: "var(--color-primary)",
    accentBg: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
  },
  {
    id: "r2",
    type: "invoice",
    title: "Pending Invoice",
    subtitle: "Trip #SP-2024-00118 · ₦4,500",
    actionLabel: "Pay Now",
    actionHref: "/dashboard/wallet",
    accentColor: "var(--color-warning)",
    accentBg: "color-mix(in srgb, var(--color-warning) 12%, transparent)",
  },
  {
    id: "r3",
    type: "medication",
    title: "Bruno's Medication",
    subtitle: "Antibiotic 5mg · Due at 8:00 PM",
    actionLabel: "Mark as given",
    actionHref: "/dashboard/health",
    accentColor: "#8b5cf6",
    accentBg: "color-mix(in srgb, #8b5cf6 12%, transparent)",
  },
];

const QUICK_STATS = [
  { label: "Total Trips",   value: "12", sub: "lifetime",   icon: PackageCheck, color: "var(--color-primary)" },
  { label: "Pets",          value: "2",  sub: "registered", icon: PawPrint,     color: "var(--color-warning)" },
  { label: "Upcoming",      value: "1",  sub: "booking",    icon: CalendarCheck,color: "#3b82f6" },
  { label: "Health Alerts", value: "1",  sub: "this week",  icon: HeartPulse,   color: "var(--color-error)" },
];

// ─── Health status config ─────────────────────────────────────────────────────

const HEALTH_STYLE: Record<HealthStatus, { dot: string; text: string }> = {
  ok:      { dot: "var(--color-success)", text: "var(--color-success)" },
  warning: { dot: "var(--color-warning)", text: "var(--color-warning)" },
  urgent:  { dot: "var(--color-error)",   text: "var(--color-error)" },
};

const REMINDER_ICON: Record<Reminder["type"], React.ReactNode> = {
  vaccination:  <Syringe     size={18} />,
  invoice:      <Receipt     size={18} />,
  medication:   <Pill        size={18} />,
  appointment:  <CalendarCheck size={18} />,
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <>
      {/* ── Welcome heading ────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight mb-2 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Welcome back, Abina
          </h2>
          <p className="text-lg" style={{ color: "var(--color-text-sub)" }}>
            Here's what's happening with your furry friends today.
          </p>
        </div>
        <Link
          href="/dashboard/booking"
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-[--radius-sm] border shadow-sm transition-colors shrink-0"
          style={{
            background: "var(--color-surface)",
            color: "var(--color-text)",
            borderColor: "var(--color-border)",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--color-surface-raised)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--color-surface)")
          }
        >
          <Plus size={16} />
          New Booking
        </Link>
      </div>

      {/* ── Main 3-col grid ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Left column (span 2) ──────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">

          {/* Active Journey card */}
          <section
            className="rounded-[--radius-md] overflow-hidden shadow-sm"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
            aria-label="Active journey"
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex justify-between items-center border-b"
              style={{
                background: "var(--color-surface-raised)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--color-success)" }}
                />
                <h3 className="font-bold text-lg" style={{ color: "var(--color-text)" }}>
                  Active Journey
                </h3>
              </div>
              <span
                className="px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider"
                style={{
                  background: "color-mix(in srgb, var(--color-success) 15%, transparent)",
                  color: "var(--color-success)",
                }}
              >
                In Transit
              </span>
            </div>

            <div className="grid md:grid-cols-2">
              {/* Journey info */}
              <div className="p-6 flex flex-col justify-between gap-5">

                {/* Destination */}
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Destination
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }}
                    />
                    <div>
                      <p className="font-bold text-lg leading-tight" style={{ color: "var(--color-text)" }}>
                        {ACTIVE_BOOKING.destination}
                      </p>
                      <p className="text-sm mt-0.5" style={{ color: "var(--color-text-sub)" }}>
                        {ACTIVE_BOOKING.destinationAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ETA */}
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Estimated Arrival
                  </p>
                  <p className="text-2xl font-black" style={{ color: "var(--color-text)" }}>
                    {ACTIVE_BOOKING.eta}
                  </p>
                  <p className="text-sm font-medium mt-0.5" style={{ color: "var(--color-success)" }}>
                    {ACTIVE_BOOKING.etaOnTime ? "On time" : "Slight delay"}
                  </p>
                </div>

                {/* Pet comfort — TRD §5.9 */}
                <div
                  className="flex items-center gap-2 text-xs rounded-[--radius-sm] px-3 py-2 w-fit"
                  style={{
                    background: "var(--color-surface-raised)",
                    color: "var(--color-text-sub)",
                  }}
                >
                  <Thermometer size={13} style={{ color: "var(--color-primary)" }} />
                  <span>{ACTIVE_BOOKING.vehicleTempC}°C</span>
                  <span style={{ color: "var(--color-border-strong)" }}>·</span>
                  <span>{ACTIVE_BOOKING.petStatus}</span>
                </div>

                {/* Handler */}
                <div
                  className="pt-5 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="h-12 w-12 rounded-full shrink-0 flex items-center justify-center font-bold text-lg"
                      style={{
                        background: "var(--color-primary)",
                        color: "var(--color-primary-foreground)",
                      }}
                    >
                      {ACTIVE_BOOKING.handlerName.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold" style={{ color: "var(--color-text)" }}>
                        {ACTIVE_BOOKING.handlerName}
                      </p>
                      <div
                        className="flex items-center gap-1 text-xs mt-0.5"
                        style={{ color: "var(--color-text-sub)" }}
                      >
                        <Star size={12} className="fill-yellow-400 text-yellow-400" />
                        <span>{ACTIVE_BOOKING.handlerRating} Rating</span>
                        <span className="mx-1">·</span>
                        <BadgeCheck size={12} style={{ color: "var(--color-success)" }} />
                        <span style={{ color: "var(--color-success)" }} className="font-medium">
                          Verified
                        </span>
                      </div>
                    </div>
                    <button
                      className="h-10 w-10 flex items-center justify-center rounded-full transition-colors"
                      style={{
                        background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                        color: "var(--color-primary)",
                      }}
                      aria-label={`Call ${ACTIVE_BOOKING.handlerName}`}
                    >
                      <Phone size={17} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Map placeholder — swap with <GoogleMap> on API integration */}
              <div
                className="relative h-64 md:h-auto overflow-hidden"
                style={{ background: "var(--color-surface-raised)" }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <Crosshair size={36} style={{ color: "var(--color-border-strong)" }} />
                  <p className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                    Live Map
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    Google Maps · coming soon
                  </p>
                </div>

                {/* Layers control (decorative) */}
                <div
                  className="absolute top-4 right-4 p-2 rounded-[--radius-sm] shadow-md"
                  style={{ background: "var(--color-surface)" }}
                >
                  <Layers size={17} style={{ color: "var(--color-text-sub)" }} />
                </div>

                {/* Track Live overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-4"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)" }}
                >
                  <Link
                    href={`/dashboard/tracking/${ACTIVE_BOOKING.bookingId}`}
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-[--radius-sm] text-sm font-bold shadow-lg transition-colors"
                    style={{
                      background: "var(--color-surface)",
                      color: "var(--color-text)",
                    }}
                  >
                    <MapPin size={15} style={{ color: "var(--color-primary)" }} />
                    Track Live
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* My Pets */}
          <section aria-label="My pets">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
                My Pets
              </h3>
              <Link
                href="/dashboard/pets"
                className="text-sm font-semibold hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                View All
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {PETS.map((pet) => {
                const hs = HEALTH_STYLE[pet.healthStatus];
                return (
                  <Link
                    key={pet.id}
                    href={`/dashboard/pets/${pet.id}`}
                    className="group flex items-center gap-4 p-4 rounded-[--radius-md] shadow-sm border transition-colors"
                    style={{
                      background: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "color-mix(in srgb, var(--color-primary) 40%, transparent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "var(--color-border)")
                    }
                  >
                    <div
                      className="h-16 w-16 rounded-[--radius-sm] shrink-0 flex items-center justify-center text-3xl"
                      style={{ background: pet.emojiBg }}
                    >
                      {pet.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold truncate" style={{ color: "var(--color-text)" }}>
                          {pet.name}
                        </h4>
                        <ChevronRight
                          size={15}
                          className="shrink-0 mt-0.5 transition-colors"
                          style={{ color: "var(--color-border-strong)" }}
                        />
                      </div>
                      <p className="text-xs mb-2" style={{ color: "var(--color-text-sub)" }}>
                        {pet.breed} · {pet.age}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: hs.dot }}
                        />
                        <span className="text-xs font-medium" style={{ color: hs.text }}>
                          {pet.healthLabel}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* Add pet — TRD §5.4 */}
              <Link
                href="/dashboard/pets/new"
                className="flex items-center justify-center gap-3 p-4 rounded-[--radius-md] border border-dashed transition-colors min-h-[96px]"
                style={{
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-text-muted)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-primary)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-strong)";
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                }}
              >
                <div className="h-8 w-8 rounded-full border-2 border-current flex items-center justify-center shrink-0">
                  <Plus size={16} />
                </div>
                <span className="text-sm font-medium">Add New Pet</span>
              </Link>
            </div>
          </section>

          {/* Quick stats — TRD §5.3 */}
          <section aria-label="Quick stats">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {QUICK_STATS.map(({ label, value, sub, icon: Icon, color }) => (
                <div
                  key={label}
                  className="rounded-[--radius-md] border shadow-sm p-4"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-[--radius-sm] flex items-center justify-center mb-3"
                    style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <p className="text-2xl font-black leading-none mb-0.5" style={{ color: "var(--color-text)" }}>
                    {value}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "var(--color-text-sub)" }}>
                    {label}
                  </p>
                  <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── Right column (1/3) ────────────────────────────────────────────── */}
        <div className="space-y-6">

          {/* Reminders — TRD §5.3 + §5.6 */}
          <section
            className="rounded-[--radius-md] border shadow-sm p-6"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
            aria-label="Reminders"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>
                Reminders
              </h3>
              <Link
                href="/dashboard/notifications"
                className="text-xs font-semibold hover:underline"
                style={{ color: "var(--color-primary)" }}
              >
                See all
              </Link>
            </div>

            <div className="space-y-4">
              {REMINDERS.map((r, i) => (
                <div key={r.id}>
                  {i > 0 && (
                    <div
                      className="h-px mb-4"
                      style={{ background: "var(--color-border)" }}
                    />
                  )}
                  <div className="flex gap-4 items-start">
                    <div
                      className="p-2 rounded-[--radius-sm] shrink-0"
                      style={{ background: r.accentBg, color: r.accentColor }}
                    >
                      {REMINDER_ICON[r.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold leading-tight" style={{ color: "var(--color-text)" }}>
                        {r.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-text-sub)" }}>
                        {r.subtitle}
                      </p>
                      <Link
                        href={r.actionHref}
                        className="inline-block mt-2 text-xs font-semibold hover:underline"
                        style={{ color: r.accentColor }}
                      >
                        {r.actionLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wallet — Stitch dark gradient card */}
          <section
            className="rounded-[--radius-md] shadow-lg p-6 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #111827 0%, #1e293b 100%)" }}
            aria-label="Wallet"
          >
            {/* Decorative glow */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl pointer-events-none"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div className="flex items-center gap-2 mb-6">
              <Wallet size={18} className="opacity-80" />
              <span className="text-sm font-medium opacity-80">Wallet Balance</span>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold tracking-tight">₦ 24,500.00</h2>
              <p className="text-xs mt-1 opacity-60">Last topped up: 2 days ago</p>
            </div>
            <Link
              href="/dashboard/wallet"
              className="block w-full py-2.5 text-center text-sm font-bold rounded-[--radius-sm] transition-colors"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--color-primary-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--color-primary)")
              }
            >
              Top Up Wallet
            </Link>
          </section>

          {/* Promo banner — Stitch spec */}
          <div
            className="rounded-[--radius-md] overflow-hidden relative group h-48"
            aria-label="Promotion"
          >
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, #064e3b 0%, #065f46 60%, #047857 100%)",
              }}
            />
            {/* Decorative element */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-9xl select-none pointer-events-none">
              🐾
            </div>
            <div
              className="absolute inset-0 flex flex-col justify-end p-5"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)" }}
            >
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2 text-white"
                style={{ background: "var(--color-primary)" }}
              >
                PROMO
              </span>
              <h4 className="text-white font-bold text-lg leading-tight">
                Get 10% off your next weekend trip!
              </h4>
              <Link
                href="/dashboard/booking"
                className="mt-2 text-xs font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "white")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")
                }
              >
                Book now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
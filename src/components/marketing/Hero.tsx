"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield, Thermometer, Star, MapPin,
  ArrowRight, CheckCircle2, Clock,
} from "lucide-react";
import { motion } from "framer-motion";

// ─── ETA countdown ────────────────────────────────────────────────────────────
function ETACounter() {
  const [minutes, setMinutes] = useState(47);
  const [seconds, setSeconds] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s === 0) { setMinutes((m) => (m > 0 ? m - 1 : 0)); return 59; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-black tabular-nums">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
}

// ─── Route line ───────────────────────────────────────────────────────────────
function RouteLine() {
  return (
    <div className="flex flex-col items-center gap-0">
      {/* Origin */}
      <div className="flex items-center gap-3 w-full">
        <div
          className="w-3 h-3 rounded-full border-2 shrink-0"
          style={{ borderColor: "var(--color-text)", background: "transparent" }}
        />
        <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
          Lagos, VI
        </span>
      </div>

      {/* Dashes top */}
      <div className="flex flex-col gap-1 ml-[5px] my-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-0.5 h-1.5 rounded-full"
            style={{ background: "var(--color-border-strong)" }} />
        ))}
      </div>

      {/* Moving van */}
      <div className="flex items-center gap-3 w-full py-1" style={{ animation: "vanPulse 2s ease-in-out infinite" }}>
        <div className="w-3 h-3 rounded-full shrink-0 flex items-center justify-center"
          style={{ background: "var(--color-primary)" }}>
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--color-primary-foreground)" }} />
        </div>
        <span className="text-xs font-medium" style={{ color: "var(--color-primary)" }}>
          En route · Ibadan Expressway
        </span>
      </div>

      {/* Dashes bottom */}
      <div className="flex flex-col gap-1 ml-[5px] my-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-0.5 h-1.5 rounded-full"
            style={{ background: "var(--color-border)" }} />
        ))}
      </div>

      {/* Destination */}
      <div className="flex items-center gap-3 w-full">
        <MapPin size={12} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
        <span className="text-sm font-semibold" style={{ color: "var(--color-text-muted)" }}>
          Abuja, Maitama
        </span>
      </div>
    </div>
  );
}

// ─── Journey card ─────────────────────────────────────────────────────────────
function JourneyCard() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 300); return () => clearTimeout(t); }, []);

  return (
    <div
      className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl transition-all duration-700"
      style={{
        background: "var(--color-surface)",
        border: "1px solid color-mix(in srgb, var(--color-primary) 22%, var(--color-border))",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        boxShadow: "0 32px 80px color-mix(in srgb, var(--color-primary) 8%, transparent), 0 4px 24px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{
            background: "var(--color-primary)",
            boxShadow: "0 0 8px var(--color-primary)",
            animation: "glowPulse 2s ease-in-out infinite",
          }} />
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
            Live Journey
          </span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
          style={{
            background: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
            color: "var(--color-primary)",
            border: "1px solid color-mix(in srgb, var(--color-primary) 30%, transparent)",
          }}>
          In Transit
        </span>
      </div>

      {/* Pet info */}
      <div className="px-5 pt-4 pb-3 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: "var(--color-surface-raised)" }}>
          🐕
        </div>
        <div>
          <p className="font-bold text-base leading-tight" style={{ color: "var(--color-text)" }}>Max</p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Golden Retriever · 2 yrs · 28kg
          </p>
        </div>
        {/* Badges */}
        <div className="ml-auto flex flex-col gap-1.5 items-end">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded-lg"
            style={{
              background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
              color: "var(--color-primary)",
            }}>
            <Thermometer size={11} />22°C
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded-lg"
            style={{
              background: "var(--color-surface-raised)",
              color: "var(--color-text-sub)",
            }}>
            😴 Resting
          </div>
        </div>
      </div>

      {/* Route */}
      <div className="mx-5 my-2 p-4 rounded-xl" style={{ background: "var(--color-surface-raised)" }}>
        <RouteLine />
      </div>

      {/* ETA bar */}
      <div className="mx-5 mb-3 px-4 py-3 rounded-xl flex items-center justify-between"
        style={{
          background: "color-mix(in srgb, var(--color-primary) 8%, transparent)",
          border: "1px solid color-mix(in srgb, var(--color-primary) 18%, transparent)",
        }}>
        <div>
          <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
            Arrival in
          </p>
          <p className="text-2xl font-black leading-tight" style={{ color: "var(--color-text)" }}>
            <ETACounter />
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
            Progress
          </p>
          <p className="text-sm font-bold" style={{ color: "var(--color-primary)" }}>68% complete</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mx-5 mb-4">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-raised)" }}>
          <div className="h-full rounded-full transition-all duration-1000"
            style={{
              width: "68%",
              background: "linear-gradient(90deg, var(--color-primary), #0fe8c3)",
              boxShadow: "0 0 12px color-mix(in srgb, var(--color-primary) 50%, transparent)",
            }} />
        </div>
      </div>

      {/* Handler */}
      <div className="px-5 pb-5 pt-3 flex items-center gap-3"
        style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center font-bold text-sm"
          style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}>
          K
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold leading-none" style={{ color: "var(--color-text)" }}>Kehinde A.</p>
          <div className="flex items-center gap-1 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-[10px] ml-1" style={{ color: "var(--color-text-muted)" }}>
              4.9 · 312 trips
            </span>
          </div>
        </div>
        <div className="text-[10px] font-semibold px-2 py-1 rounded-lg flex items-center gap-1"
          style={{
            background: "color-mix(in srgb, var(--color-success) 15%, transparent)",
            color: "var(--color-success)",
          }}>
          <CheckCircle2 size={10} />Verified
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-16 rounded-full blur-2xl pointer-events-none"
        style={{ background: "color-mix(in srgb, var(--color-primary) 15%, transparent)" }} />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStatsVisible(true), 600); return () => clearTimeout(t); }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Background radial glow — uses primary token so it works on both modes */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 60% 40%, color-mix(in srgb, var(--color-primary) 7%, transparent) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 20% 80%, color-mix(in srgb, var(--color-primary) 4%, transparent) 0%, transparent 60%)
        `,
      }} />

      {/* Grid texture — adapts via CSS var */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(var(--color-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        opacity: 0.4,
      }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--color-primary)" }}>
            <span className="text-sm">🐾</span>
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--color-text)" }}>
            SafePaws
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "Coverage", "Pricing"].map((item) => (
            <a key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium transition-colors"
              style={{ color: "var(--color-text-sub)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-text)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-sub)")}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login"
            className="hidden md:block text-sm font-medium transition-colors"
            style={{ color: "var(--color-text-sub)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-sub)")}
          >
            Log in
          </Link>
          <Link href="/register"
            className="text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-primary-hover)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-primary)")}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left copy */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  color: "var(--color-primary)",
                  border: "1px solid color-mix(in srgb, var(--color-primary) 22%, transparent)",
                }}>
                <Shield size={12} />
                Nigeria's most trusted pet transport
              </div>

              {/* Headline */}
              <h1 className="font-black leading-[1.05] tracking-tight mb-6"
                style={{ color: "var(--color-text)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Your pet travels{" "}
                <span style={{
                  color: "var(--color-primary)",
                  textShadow: "0 0 40px color-mix(in srgb, var(--color-primary) 30%, transparent)",
                }}>
                  safely.
                </span>
                <br />
                <span style={{
                  color: "var(--color-text-sub)",
                  fontWeight: 400,
                  fontSize: "0.75em",
                }}>
                  You stay in control.
                </span>
              </h1>

              {/* Sub */}
              <p className="text-lg leading-relaxed mb-8 max-w-md" style={{ color: "var(--color-text-sub)" }}>
                Climate-controlled vehicles, trained handlers, and live GPS tracking —
                from Lagos to Abuja, your pet is never out of sight.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/register"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-primary-foreground)",
                    boxShadow: "0 8px 32px color-mix(in srgb, var(--color-primary) 30%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-primary-hover)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px color-mix(in srgb, var(--color-primary) 45%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-primary)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px color-mix(in srgb, var(--color-primary) 30%, transparent)";
                  }}
                >
                  Book your first transport <ArrowRight size={16} />
                </Link>
                <a href="#how-it-works"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    background: "var(--color-surface)",
                    color: "var(--color-text-sub)",
                    border: "1px solid var(--color-border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-surface-raised)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-text-sub)";
                  }}
                >
                  See how it works
                </a>
              </div>

              {/* Trust stats */}
              <div className="flex flex-wrap gap-6 pt-8 transition-all duration-700"
                style={{
                  borderTop: "1px solid var(--color-border)",
                  opacity: statsVisible ? 1 : 0,
                  transform: statsVisible ? "translateY(0)" : "translateY(8px)",
                }}>
                {[
                  { value: "500+",   label: "Pets transported" },
                  { value: "99.8%",  label: "Safe delivery rate" },
                  { value: "4.9★",   label: "Average handler rating" },
                  { value: "3 cities", label: "Lagos · Abuja · PH" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-xl font-black leading-none" style={{ color: "var(--color-text)" }}>
                      {value}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — journey card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Float label */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold z-10 whitespace-nowrap"
                  style={{
                    background: "color-mix(in srgb, var(--color-primary) 15%, var(--color-surface))",
                    color: "var(--color-primary)",
                    border: "1px solid color-mix(in srgb, var(--color-primary) 25%, transparent)",
                  }}>
                  <Clock size={11} />
                  Live journey in progress
                </div>

                <JourneyCard />

                {/* Handlers active pill */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap shadow-lg"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}>
                  <div className="flex -space-x-2">
                    {["K", "A", "C"].map((initial, i) => (
                      <div key={i}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2"
                        style={{
                          background: `hsl(${160 + i * 30}, 55%, 38%)`,
                          borderColor: "var(--color-surface)",
                          color: "white",
                        }}>
                        {initial}
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-medium" style={{ color: "var(--color-text-sub)" }}>
                    12 handlers active now
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 0 6px var(--color-primary)",
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", duration: 1.5, delay: 0.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
            scroll
          </span>
          <div className="w-px h-8 rounded-full" style={{
            background: "linear-gradient(to bottom, var(--color-primary), transparent)",
          }} />
        </div>
      </motion.div>

      <style>{`
        @keyframes vanPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.65; }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--color-primary); }
          50% { opacity: 0.55; box-shadow: 0 0 16px var(--color-primary); }
        }
      `}</style>
    </section>
  );
}
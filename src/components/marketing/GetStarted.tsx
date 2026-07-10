'use client'
import React from 'react';
import { motion } from 'framer-motion';
import GetStartedCard from './GetStartedCard';
import { UserPlus, PawPrint, ShieldCheck } from 'lucide-react';

const CARDS = [
  {
    icon: UserPlus,
    title: 'Create an account',
    description:
      'Sign up in seconds. Add your name, phone, and email — your dashboard is ready immediately.',
  },
  {
    icon: PawPrint,
    title: 'Register your pet',
    description:
      'Add your pet\'s profile: breed, weight, vaccination records, and any special travel needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Book, track & relax',
    description:
      'Schedule a pickup, watch your pet\'s journey live on the map, and get photo updates along the way.',
  },
];

// ─── Horizontal connector (desktop) ──────────────────────────────────────────
function HorizontalConnector() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
      className="hidden md:flex items-center justify-center w-12 shrink-0"
      style={{ originX: 0 }}
    >
      <div className="flex items-center gap-1">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: i < 3
                ? 'var(--color-primary)'
                : 'transparent',
              opacity: 1 - i * 0.2,
            }}
          />
        ))}
        {/* Arrow head */}
        <div
          className="w-0 h-0"
          style={{
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: '7px solid var(--color-primary)',
            opacity: 0.7,
          }}
        />
      </div>
    </motion.div>
  );
}

// ─── Vertical connector (mobile) ─────────────────────────────────────────────
function VerticalConnector() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="flex md:hidden justify-center"
      style={{ originY: 0 }}
    >
      <div
        className="w-px h-10 rounded-full"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-primary), transparent)',
        }}
      />
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function GetStarted() {
  return (
    <section
      className="w-full py-20 md:py-28"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-primary)' }}
          >
            Getting started
          </p>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Up and running in 3 steps
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: 'var(--color-text-sub)' }}
          >
            No complicated setup. Your first booking takes less than 5 minutes.
          </p>
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="h-1 rounded-full mx-auto mt-5"
            style={{ background: 'var(--color-primary)' }}
          />
        </div>

        {/* Cards row — desktop: flex with connectors, mobile: column */}
        <div className="flex flex-col md:flex-row md:items-stretch md:justify-center gap-0">
          {CARDS.map((card, index) => (
            <React.Fragment key={index}>
              {/* Card */}
              <div className="flex-1 min-w-0 max-w-sm mx-auto md:mx-0">
                <GetStartedCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  index={index}
                />
              </div>

              {/* Connector — only between cards, not after the last one */}
              {index < CARDS.length - 1 && (
                <>
                  <HorizontalConnector />
                  <VerticalConnector />
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-14"
        >
          <a
            href="/register"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-primary-foreground)',
              boxShadow: '0 8px 28px color-mix(in srgb, var(--color-primary) 30%, transparent)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-primary-hover)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 36px color-mix(in srgb, var(--color-primary) 45%, transparent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px color-mix(in srgb, var(--color-primary) 30%, transparent)';
            }}
          >
            Create your free account
            <UserPlus size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
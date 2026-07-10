'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GetStartedCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function GetStartedCard({ icon: Icon, title, description, index }: GetStartedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.12 }}
      className="relative flex flex-col items-center text-center p-8 rounded-2xl w-full h-full"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Step number — top-right corner */}
      <span
        className="absolute top-4 right-5 text-xs font-bold tabular-nums"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon circle */}
      <motion.div
        initial={{ scale: 0.7, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'backOut', delay: index * 0.12 + 0.15 }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shrink-0"
        style={{
          background: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
        }}
      >
        <Icon
          size={28}
          strokeWidth={1.75}
          style={{ color: 'var(--color-primary)' }}
        />
      </motion.div>

      <h3
        className="text-lg font-bold mb-3 leading-tight"
        style={{ color: 'var(--color-text)' }}
      >
        {title}
      </h3>

      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-text-sub)' }}
      >
        {description}
      </p>
    </motion.div>
  );
}
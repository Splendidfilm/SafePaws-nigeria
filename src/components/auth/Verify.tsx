'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/button'
import { MailCheck, ArrowRight } from 'lucide-react'

export default function Verify() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo />
          <p className="mt-3 text-sm" style={{ color: 'var(--color-text-sub)' }}>
            Safe, reliable pet transportation across Nigeria
          </p>
        </div>

        <div
          className="rounded-2xl p-8 text-center shadow-xl"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{
              background: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
              color: 'var(--color-primary)',
            }}
          >
            <MailCheck size={32} />
          </div>

          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
            Check your email
          </h1>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-sub)' }}>
            We&apos;ve sent a verification link to your email address. Please click the link to confirm your account and get started.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/dashboard" className="w-full">
              <Button size="md" variant="primary" className="w-full justify-center gap-2">
                Continue to Dashboard
                <ArrowRight size={16} />
              </Button>
            </Link>

            <Link href="/login" className="w-full">
              <Button size="md" variant="outline" className="w-full justify-center">
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
          © 2026 SafePaws Nigeria. All rights reserved.
        </p>
      </div>
    </div>
  )
}

'use client'
import { useState, useMemo } from 'react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Mail, Lock, Eye, EyeOff, User, Phone,
  PawPrint, AlertCircle, Loader2, CheckCircle2, XCircle,
} from 'lucide-react'

// ─── Password strength — computed, never stored as state ──────────────────────
function getPasswordStrength(password: string): {
  score: number       // 0–4
  label: string
  color: string
} {
  if (!password) return { score: 0, label: '', color: 'var(--color-border)' }
  let score = 0
  if (password.length >= 8)               score++
  if (/[A-Z]/.test(password))             score++
  if (/[0-9]/.test(password))             score++
  if (/[^A-Za-z0-9]/.test(password))     score++

  const levels = [
    { label: 'Too short',  color: 'var(--color-error)' },
    { label: 'Weak',       color: 'var(--color-error)' },
    { label: 'Fair',       color: 'var(--color-warning)' },
    { label: 'Good',       color: '#3b82f6' },
    { label: 'Strong',     color: 'var(--color-success)' },
  ]
  return { score, ...levels[score] }
}

// ─── Password requirement row ─────────────────────────────────────────────────
function Requirement({ met, label }: { met: boolean; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      {met
        ? <CheckCircle2 size={13} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
        : <XCircle     size={13} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
      }
      <span
        className="text-xs transition-colors"
        style={{ color: met ? 'var(--color-text-sub)' : 'var(--color-text-muted)' }}
      >
        {label}
      </span>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function RegisterForm() {
  const router = useRouter()

  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState('')
  const [visiblePw, setVisiblePw]   = useState(false)
  const [visibleCf, setVisibleCf]   = useState(false)
  const [showReqs, setShowReqs]     = useState(false)

  // Controlled fields
  const [fullName, setFullName]     = useState('')
  const [email, setEmail]           = useState('')
  const [phone, setPhone]           = useState('')
  const [password, setPassword]     = useState('')
  const [confirm, setConfirm]       = useState('')

  // ── Derived / computed (never stored as separate state) ──────────────────
  const strength = useMemo(() => getPasswordStrength(password), [password])
  const passwordsMatch = confirm.length > 0 && password === confirm

  const requirements = useMemo(() => [
    { met: password.length >= 8,              label: 'At least 8 characters' },
    { met: /[A-Z]/.test(password),            label: 'One uppercase letter' },
    { met: /[0-9]/.test(password),            label: 'One number' },
    { met: /[^A-Za-z0-9]/.test(password),    label: 'One special character' },
  ], [password])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    if (strength.score < 2) {
      setError('Please choose a stronger password.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Could not create account. Please try again.')
        return
      }
      router.push('/verify-email')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // ── Shared input focus/blur handlers ─────────────────────────────────────
  function onInputFocus(e: React.FocusEvent<HTMLInputElement>) {
    e.currentTarget.style.borderColor = 'var(--color-primary)'
    e.currentTarget.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)'
  }
  function onInputBlur(e: React.FocusEvent<HTMLInputElement>) {
    e.currentTarget.style.borderColor = 'var(--color-border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  const inputStyle = {
    background: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
  }

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-4 py-12"
      // style={{ background: 'var(--color-bg)' }}
    >
      <div className="w-full max-w-104">

        {/* Logo */}
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo />
          <p className="mt-3 text-sm" style={{ color: 'var(--color-text-sub)' }}>
            Safe, reliable pet transportation across Nigeria
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl shadow-xl"
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-5 sm:px-8"
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <h1 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              Create your account
            </h1>
            <p className="mt-1 text-sm" style={{ color: 'var(--color-text-sub)' }}>
              Join SafePaws and keep your pets safe on every journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8">

            {/* Error */}
            {error && (
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: 'color-mix(in srgb, var(--color-error) 10%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--color-error) 25%, transparent)',
                }}
              >
                <AlertCircle size={16} style={{ color: 'var(--color-error)', flexShrink: 0 }} />
                <p className="text-sm" style={{ color: 'var(--color-error)' }}>{error}</p>
              </div>
            )}

            {/* Full name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Full Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  type="text"
                  placeholder="Adaeze Okonkwo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  disabled={loading}
                  className="h-12 w-full rounded-xl pl-11 pr-4 text-sm outline-none transition-all disabled:opacity-50"
                  style={inputStyle}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="h-12 w-full rounded-xl pl-11 pr-4 text-sm outline-none transition-all disabled:opacity-50"
                  style={inputStyle}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Phone Number
              </label>
              <div className="relative">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  type="tel"
                  placeholder="+234 801 234 5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                  className="h-12 w-full rounded-xl pl-11 pr-4 text-sm outline-none transition-all disabled:opacity-50"
                  style={inputStyle}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Password
              </label>
              <div
                className="flex h-12 w-full items-center rounded-xl transition-all"
                style={inputStyle}
                onFocusCapture={(e: React.FocusEvent<HTMLDivElement>) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)'
                }}
                onBlurCapture={(e: React.FocusEvent<HTMLDivElement>) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                <Lock size={16} className="ml-4 shrink-0" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  type={visiblePw ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setShowReqs(true)}
                  required
                  disabled={loading}
                  className="h-full flex-1 bg-transparent pl-3 pr-2 text-sm outline-none disabled:opacity-50"
                  style={{ color: 'var(--color-text)' }}
                />
                <button
                  type="button"
                  onClick={() => setVisiblePw((v) => !v)}
                  className="flex items-center justify-center px-4 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label={visiblePw ? 'Hide password' : 'Show password'}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)')}
                >
                  {visiblePw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              {/* Strength meter — only shown after user starts typing */}
              {password.length > 0 && (
                <div className="space-y-2 mt-1">
                  {/* Bar */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-1 flex-1 rounded-full transition-all duration-300"
                        style={{
                          background: i <= strength.score ? strength.color : 'var(--color-border)',
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-medium" style={{ color: strength.color }}>
                    {strength.label}
                  </p>
                </div>
              )}

              {/* Requirements checklist — shown on focus */}
              {showReqs && password.length > 0 && (
                <div
                  className="mt-2 grid grid-cols-2 gap-1.5 rounded-xl p-3"
                  style={{ background: 'var(--color-surface-raised)' }}
                >
                  {requirements.map((r) => (
                    <Requirement key={r.label} met={r.met} label={r.label} />
                  ))}
                </div>
              )}
            </div>

            {/* Confirm password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
                Confirm Password
              </label>
              <div
                className="flex h-12 w-full items-center rounded-xl transition-all"
                style={{
                  background: 'var(--color-bg)',
                  border: `1px solid ${
                    confirm.length > 0
                      ? passwordsMatch
                        ? 'var(--color-success)'
                        : 'var(--color-error)'
                      : 'var(--color-border)'
                  }`,
                  color: 'var(--color-text)',
                }}
                onFocusCapture={(e: React.FocusEvent<HTMLDivElement>) => {
                  if (confirm.length === 0) {
                    e.currentTarget.style.borderColor = 'var(--color-primary)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)'
                  }
                }}
                onBlurCapture={(e: React.FocusEvent<HTMLDivElement>) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                <Lock size={16} className="ml-4 shrink-0" style={{ color: 'var(--color-text-muted)' }} />
                <input
                  type={visibleCf ? 'text' : 'password'}
                  placeholder="Repeat your password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  disabled={loading}
                  className="h-full flex-1 bg-transparent pl-3 pr-2 text-sm outline-none disabled:opacity-50"
                  style={{ color: 'var(--color-text)' }}
                />
                {/* Match indicator */}
                {confirm.length > 0 && (
                  passwordsMatch
                    ? <CheckCircle2 size={16} className="mr-3" style={{ color: 'var(--color-success)', flexShrink: 0 }} />
                    : <XCircle     size={16} className="mr-1" style={{ color: 'var(--color-error)', flexShrink: 0 }} />
                )}
                <button
                  type="button"
                  onClick={() => setVisibleCf((v) => !v)}
                  className="flex items-center justify-center px-4 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label={visibleCf ? 'Hide password' : 'Show password'}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)')}
                >
                  {visibleCf ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {confirm.length > 0 && !passwordsMatch && (
                <p className="text-xs" style={{ color: 'var(--color-error)' }}>
                  Passwords don't match
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-2.5 mt-1">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded shrink-0"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-sub)' }}>
                I agree to the{' '}
                <Link href="/terms" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <Button
              type="submit"
              size="md"
              variant="primary"
              disabled={loading || (confirm.length > 0 && !passwordsMatch)}
              className="w-full justify-center mt-1"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <PawPrint size={16} />
                  Create Account
                </span>
              )}
            </Button>

            {/* Divider + Google (disabled) */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>or</span>
              <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
            </div>

            <div className="relative group">
              <Button
                type="button"
                size="md"
                variant="outline"
                disabled
                className="w-full justify-center gap-2 opacity-50 cursor-not-allowed"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                  <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </Button>
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'var(--color-text)', color: 'var(--color-surface)' }}
              >
                Coming soon
              </span>
            </div>

          </form>

          {/* Footer */}
          <div
            className="px-6 py-4 text-center sm:px-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <p className="text-sm" style={{ color: 'var(--color-text-sub)' }}>
              Already have an account?{' '}
              <Link href="/login" className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
          © 2026 SafePaws Nigeria. All rights reserved.
        </p>
      </div>
    </div>
  )
}
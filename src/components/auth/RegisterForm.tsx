'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Button from "../ui/button"

function getPasswordStrength(password: string) {
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++

  if (score < 1) return { label: '', text: '', color: 'bg-border', width: 'w-0', hint: '' }
  if (score <= 1) return { label: 'Weak', color: 'bg-error', text: 'text-error', width: 'w-1/4', hint: 'Add uppercase letters, numbers and symbols' }
  if (score === 2) return { label: 'Fair', color: 'bg-warning', text: 'text-warning', width: 'w-1/2', hint: 'Add numbers and special characters' }
  if (score === 3) return { label: 'Good', color: 'bg-primary', text: 'text-primary', width: 'w-3/4', hint: 'Add a special character to make it stronger' }
  return { label: 'Strong', color: 'bg-success', text: 'text-success', width: 'w-full', hint: 'Great password!' }
}

export default function RegisterForm() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const strengthResult = getPasswordStrength(password)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Something went wrong. Please try again.')
        return
      }
      router.push('/verify-email')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "h-12 w-full rounded-xl border border-border bg-bg pl-12 pr-4 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-105">

        {/* Brand header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
            <span className="material-symbols-outlined text-primary text-2xl">shield_with_heart</span>
          </div>
          <h1 className="font-display text-2xl font-bold tracking-tight text-text">SafePaws Nigeria</h1>
          <p className="mt-1.5 text-sm text-text-sub">Join the most trusted pet safety community</p>

          {/* Trust pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {['500+ pets transported', 'Climate controlled', 'GPS tracked'].map((pill) => (
              <span key={pill} className="flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                <span className="material-symbols-outlined text-[12px]">check_circle</span>
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border/60 bg-surface shadow-2xl shadow-black/20">

          {/* Card header */}
          <div className="border-b border-border/40 px-6 py-5 sm:px-8">
            <h2 className="text-xl font-bold text-text">Create your account</h2>
            <p className="mt-1 text-sm text-text-sub">Fill in your details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8">

            {/* Error */}
            {error && (
              <div className="flex items-center gap-3 rounded-xl border border-error/20 bg-error/10 px-4 py-3">
                <span className="material-symbols-outlined text-[18px] text-error">error</span>
                <p className="text-sm text-error">{error}</p>
              </div>
            )}

            {/* Name + Phone — two columns on sm+ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">person</span>
                  <input className={inputClass} id="name" name="name" type="text" placeholder="Chidi Adebayo"
                    value={name} onChange={(e) => setName(e.target.value)} disabled={loading} required />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">Phone</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">call</span>
                  <input className={inputClass} id="phone" name="phone" type="tel" placeholder="+234 801 234 5678"
                    value={phone} onChange={(e) => setPhone(e.target.value)} disabled={loading} required />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">mail</span>
                <input className={inputClass} id="email" name="email" type="email" placeholder="chidi@example.com"
                  value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} required />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">lock</span>
                <input
                  className={`${inputClass} pr-12`}
                  id="password" name="password"
                  type={visible ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  disabled={loading} required
                />
                <button type="button" onClick={() => setVisible(!visible)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
                  aria-label={visible ? 'Hide password' : 'Show password'}>
                  <span className="material-symbols-outlined text-[20px]">{visible ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>

              {/* Strength bar */}
              {password.length > 0 && (
                <div className="flex flex-col gap-1 px-1 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-text-muted">Password strength</span>
                    <span className={`text-[11px] font-semibold ${strengthResult.text}`}>{strengthResult.label}</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-surface-raised">
                    <div className={`h-full rounded-full transition-all duration-500 ${strengthResult.color} ${strengthResult.width}`} />
                  </div>
                  {strengthResult.hint && <p className="text-[11px] text-text-muted">{strengthResult.hint}</p>}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">Confirm Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">lock_reset</span>
                <input
                  className={`${inputClass} ${confirmPassword && confirmPassword !== password ? 'border-error focus:border-error focus:ring-error' : ''}`}
                  id="confirm_password" name="confirm_password"
                  type="password" placeholder="••••••••"
                  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading} required
                />
              </div>
              {confirmPassword && confirmPassword !== password && (
                <p className="px-1 text-[11px] text-error">Passwords do not match</p>
              )}
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-3">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary" />
              <span className="text-sm text-text-sub leading-relaxed">
                I agree to the{' '}
                <Link href="/terms" className="font-semibold text-primary hover:underline">Terms &amp; Conditions</Link>
                {' '}and{' '}
                <Link href="/privacy" className="font-semibold text-primary hover:underline">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit */}
            <Button type="submit" size="md" variant="primary" disabled={loading} className="w-full justify-center mt-1">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  Creating account...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">pets</span>
                  Create Account
                </span>
              )}
            </Button>

          </form>

          {/* Card footer */}
          <div className="border-t border-border/40 px-6 py-4 text-center sm:px-8">
            <p className="text-sm text-text-sub">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          © 2026 SafePaws Nigeria. All rights reserved.
        </p>
      </div>
    </div>
  )
}
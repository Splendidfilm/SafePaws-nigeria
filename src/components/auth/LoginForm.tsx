'use client'
import { useState } from 'react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff, PawPrint, AlertCircle, Loader2 } from 'lucide-react'

export default function LoginForm() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || 'Invalid email or password.')
        return
      }
      router.push('/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-12"
      // style={{ background: 'var(--color-bg)' }}
    >
      <div className="w-full max-w-[26rem]">

        {/* Logo + brand */}
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
          {/* Card header */}
          <div
            className="px-6 py-5 sm:px-8"
            style={{ borderBottom: '1px solid var(--color-border)' }}
          >
            <h1 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              Welcome back
            </h1>
            <p className="mt-1 text-sm" style={{ color: 'var(--color-text-sub)' }}>
              Sign in to your SafePaws account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8">

            {/* Error banner */}
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

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs font-semibold uppercase tracking-wide"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="h-12 w-full rounded-xl pl-11 pr-4 text-sm outline-none transition-all disabled:opacity-50"
                  style={{
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)'
                    e.currentTarget.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium transition-colors hover:underline"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Forgot password?
                </Link>
              </div>
              <div
                className="flex h-12 w-full items-center rounded-xl transition-all"
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
                onFocus={(e: React.FocusEvent<HTMLDivElement>) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)'
                }}
                onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    e.currentTarget.style.borderColor = 'var(--color-border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }
                }}
              >
                <Lock
                  size={16}
                  className="ml-4 shrink-0"
                  style={{ color: 'var(--color-text-muted)' }}
                />
                <input
                  type={visible ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="h-full flex-1 bg-transparent pl-3 pr-2 text-sm outline-none disabled:opacity-50"
                  style={{ color: 'var(--color-text)' }}
                />
                <button
                  type="button"
                  onClick={() => setVisible((v) => !v)}
                  className="flex items-center justify-center px-4 transition-colors"
                  style={{ color: 'var(--color-text-muted)' }}
                  aria-label={visible ? 'Hide password' : 'Show password'}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)')}
                >
                  {visible ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2.5">
              <input
                type="checkbox"
                className="h-4 w-4 rounded"
                style={{ accentColor: 'var(--color-primary)' }}
              />
              <span className="text-sm" style={{ color: 'var(--color-text-sub)' }}>
                Remember me for 30 days
              </span>
            </label>

            {/* Submit */}
            <Button
              type="submit"
              size="md"
              variant="primary"
              disabled={loading}
              className="w-full justify-center mt-1"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <PawPrint size={16} />
                  Sign In
                </span>
              )}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
              <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                or continue with
              </span>
              <div className="h-px flex-1" style={{ background: 'var(--color-border)' }} />
            </div>

            {/* Google — disabled until OAuth is implemented (TRD: "Future") */}
            <div className="relative group">
              <Button
                type="button"
                size="md"
                variant="outline"
                disabled
                className="w-full justify-center gap-2 opacity-50 cursor-not-allowed"
                aria-disabled="true"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                  <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </Button>
              {/* Coming soon tooltip */}
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'var(--color-text)',
                  color: 'var(--color-surface)',
                }}
              >
                Coming soon
              </span>
            </div>

          </form>

          {/* Card footer */}
          <div
            className="px-6 py-4 text-center sm:px-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <p className="text-sm" style={{ color: 'var(--color-text-sub)' }}>
              New to SafePaws?{' '}
              <Link
                href="/register"
                className="font-semibold hover:underline transition-colors"
                style={{ color: 'var(--color-primary)' }}
              >
                Create an account
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
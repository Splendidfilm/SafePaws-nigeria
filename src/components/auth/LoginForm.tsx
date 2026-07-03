'use client'
import { useState } from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
    <div
      className="flex min-h-screen w-full items-center justify-center px-4 py-12"
  
    >
      <div className="w-full max-w-105">

        {/* Logo + brand */}
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo />
          <p className="mt-3 text-sm text-text-sub">
            Safe, reliable pet transportation across Nigeria
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border/60 bg-surface shadow-2xl shadow-black/20">

          {/* Card header */}
          <div className="border-b border-border/40 px-6 py-5 sm:px-8">
            <h1 className="text-xl font-bold text-text">Welcome back</h1>
            <p className="mt-1 text-sm text-text-sub">Sign in to your SafePaws account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8">

            {/* Error */}
            {error && (
              <div className="flex items-center gap-3 rounded-xl border border-error/20 bg-error/10 px-4 py-3">
                <span className="material-symbols-outlined text-[18px] text-error">error</span>
                <p className="text-sm text-error">{error}</p>
              </div>
            )}

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">
                  mail
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="h-12 w-full rounded-xl border border-border bg-bg pl-12 pr-4 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-primary hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="flex h-12 w-full items-center rounded-xl border border-border bg-bg transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                <input
                  type={visible ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="h-full flex-1 bg-transparent pl-4 pr-2 text-sm text-text placeholder:text-text-muted focus:outline-none disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setVisible(!visible)}
                  className="flex items-center justify-center px-4 text-text-muted hover:text-primary transition-colors"
                  aria-label={visible ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {visible ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-border accent-primary" />
              <span className="text-sm text-text-sub">Remember me for 30 days</span>
            </label>

            {/* Submit */}
            <Button type="submit" size="md" variant="primary" disabled={loading} className="w-full justify-center mt-1">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">pets</span>
                  Sign In
                </span>
              )}
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-text-muted">or continue with</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Google */}
            <Button type="button" size="md" variant="outline" className="w-full justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>

          </form>

          {/* Card footer */}
          <div className="border-t border-border/40 px-6 py-4 text-center sm:px-8">
            <p className="text-sm text-text-sub">
              New to SafePaws?{' '}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                Create an account
              </Link>
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
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
    <div className="flex h-full w-full grow flex-col items-center justify-center p-4">

      {/* Card */}
      <div className="w-full max-w-md rounded-xl border border-border bg-surface shadow-lg">

        {/* Logo */}
        <div className="flex flex-col items-center px-8 pb-4 pt-10">
          <Logo />
        </div>

        {/* Heading */}
        <div className="px-8 pb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-text">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-text-sub">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-8 pb-10">

          {/* Error message */}
          {error && (
            <div className="rounded-lg border border-error/20 bg-error/10 px-4 py-3">
              <p className="text-sm text-error">{error}</p>
            </div>
          )}

          {/* Email */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-text">Email Address</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="h-14 w-full rounded-lg border border-border bg-bg px-4 text-base text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 transition-colors"
            />
          </label>

          {/* Password */}
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-text">Password</span>
            <div className="flex h-14 w-full items-center rounded-lg border border-border bg-bg transition-colors focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
              <input
                type={visible ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="h-full flex-1 bg-transparent px-4 text-base text-text placeholder:text-text-muted focus:outline-none disabled:opacity-50"
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
          </label>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between gap-3">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-border accent-primary"
              />
              <span className="text-sm text-text">Remember for 30 days</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:underline transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4 pt-2">
            <Button
              type="submit"
              size="md"
              variant="primary"
              disabled={loading}
              className="w-full justify-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-[18px]">
                    progress_activity
                  </span>
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
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-text-muted">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Google */}
            <Button
              type="button"
              size="md"
              variant="outline"
              className="w-full justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>
          </div>

          {/* Sign up link */}
          <p className="pt-2 text-center text-sm text-text-sub">
            New to SafePaws?{' '}
            <Link
              href="/register"
              className="font-semibold text-primary hover:underline transition-colors"
            >
              Create an account
            </Link>
          </p>

        </form>
      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-xs text-text-muted">
        © 2026 SafePaws Nigeria. All rights reserved.
      </p>

    </div>
  )
}
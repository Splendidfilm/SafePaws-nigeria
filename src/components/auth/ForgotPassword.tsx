'use client'
import { useState } from "react"
import Button from "../ui/button"
import Link from "next/link"

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Something went wrong. Please try again.')
        return
      }

      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="flex min-h-screen w-full items-center justify-center "
    >
      <div className="w-full max-w-md"> 

        {/* Card */}
        <div className="rounded-2xl border border-border/60 bg-surface p-8 shadow-2xl shadow-black/20">

          {success ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/15 ring-1 ring-success/30">
                <span className="material-symbols-outlined text-success text-3xl">mark_email_read</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-text">Check your inbox</h1>
                <p className="mt-2 text-sm text-text-sub">
                  We sent a password reset link to{' '}
                  <span className="font-semibold text-text">{email}</span>
                </p>
              </div>
              <p className="text-xs text-text-muted">
                Didn't receive it? Check your spam folder or{' '}
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="text-primary hover:underline font-medium"
                >
                  try again
                </button>
              </p>
              <Link
                href="/login"
                className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to login
              </Link>
            </div>

          ) : (
            /* ── Form state ── */
            <>
              {/* Header */}
              <div className="mb-6 flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
                  <span className="material-symbols-outlined text-primary text-3xl">key</span>
                </div>
                <h1 className="text-2xl font-bold text-text">Reset your password</h1>
                <p className="mt-2 text-sm text-text-sub">
                  Enter your email and we'll send you a reset link.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-4 flex items-center gap-3 rounded-xl border border-error/20 bg-error/10 px-4 py-3">
                  <span className="material-symbols-outlined text-error text-[18px]">error</span>
                  <p className="text-sm text-error">{error}</p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-text-muted">
                      mail
                    </span>
                    <input
                      className="h-14 w-full rounded-xl pl-12 pr-4 bg-bg border border-border text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="chidi@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  disabled={loading}
                  className="w-full justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send reset link
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </span>
                  )}
                </Button>

                <Link
                  href="/login"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-text-sub hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  Back to login
                </Link>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

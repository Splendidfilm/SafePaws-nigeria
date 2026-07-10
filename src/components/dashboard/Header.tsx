// "use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  unreadCount?: number;
}

export function Header({ onMenuClick, unreadCount = 0 }: HeaderProps) {
  const [focused, setFocused] = useState(false);

  return (
    <header
      className="h-16 flex items-center justify-between px-6 py-3 shrink-0 z-10"
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Mobile: hamburger + wordmark */}
      <div className="flex items-center gap-4 lg:hidden">
        <button
          onClick={onMenuClick}
          style={{ color: "var(--color-text)" }}
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </button>
        <h2 className="font-bold text-lg" style={{ color: "var(--color-text)" }}>
          SafePaws
        </h2>
      </div>

      {/* Desktop: search */}
      <div className="hidden lg:flex w-full max-w-md">
        <div className="relative w-full">
          <span
            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Search size={17} />
          </span>
          <input
            type="text"
            placeholder="Search trips, invoices, or help articles..."
            className="w-full py-2 pl-10 pr-4 text-sm rounded-[--radius-sm] outline-none transition-all"
            style={{
              background: "var(--color-surface-raised)",
              color: "var(--color-text)",
              border: focused
                ? "2px solid var(--color-primary)"
                : "2px solid transparent",
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5 ml-auto">
        {/* Help Center link */}
        <Link
          href="/dashboard/support"
          className="hidden md:block text-sm font-medium transition-colors"
          style={{ color: "var(--color-text-sub)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-text)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--color-text-sub)")
          }
        >
          Help Center
        </Link>

        {/* Notification bell */}
        <Link
          href="/dashboard/notifications"
          className="relative p-2 rounded-full transition-colors"
          style={{ color: "var(--color-text)" }}
          aria-label={`Notifications${unreadCount > 0 ? ` — ${unreadCount} unread` : ""}`}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--color-surface-raised)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "transparent")
          }
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span
              className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2"
              style={{
                background: "var(--color-error)",
                borderColor: "var(--color-surface)",
              }}
              aria-hidden="true"
            />
          )}
        </Link>

        {/* User + avatar */}
        <div
          className="flex items-center gap-3 pl-4"
          style={{ borderLeft: "1px solid var(--color-border)" }}
        >
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold leading-tight" style={{ color: "var(--color-text)" }}>
              Abina
            </p>
            <p className="text-xs" style={{ color: "var(--color-text-sub)" }}>
              Pet Owner
            </p>
          </div>
          <div
            className="h-10 w-10 rounded-full shrink-0 flex items-center justify-center font-bold text-sm border-2"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              borderColor: "var(--color-surface)",
            }}
          >
            A
          </div>
        </div>
      </div>
    </header>
  );
}
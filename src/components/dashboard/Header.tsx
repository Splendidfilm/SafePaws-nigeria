"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  unreadCount?: number;
}

export function Header({ onMenuClick, unreadCount = 0 }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  // Get greeting based on time of day
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  }

  return (
    <header
      className="h-16 flex items-center gap-4 px-5 shrink-0"
      style={{
        borderBottom: "1px solid rgba(23,207,173,0.08)",
        background: "rgba(17,33,30,0.8)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg transition-colors"
        style={{ color: "#7aafa3" }}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Greeting — hidden on small screens to save space */}
      <div className="hidden sm:block flex-1 min-w-0">
        <p className="text-sm font-medium truncate" style={{ color: "#d0ebe6" }}>
          {getGreeting()}, Abina 👋
        </p>
      </div>

      {/* Spacer on mobile */}
      <div className="flex-1 sm:hidden" />

      {/* Search */}
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-150 cursor-text"
        style={{
          background: searchFocused ? "rgba(23,207,173,0.06)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${searchFocused ? "rgba(23,207,173,0.3)" : "rgba(255,255,255,0.06)"}`,
          width: searchFocused ? "220px" : "160px",
        }}
        onClick={() => document.getElementById("dashboard-search")?.focus()}
      >
        <Search size={14} style={{ color: "#4d7a70", flexShrink: 0 }} />
        <input
          id="dashboard-search"
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm outline-none w-full"
          style={{ color: "#d0ebe6" }}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
        <kbd
          className="hidden sm:inline-flex items-center text-[10px] px-1.5 py-0.5 rounded font-mono shrink-0"
          style={{
            background: "rgba(255,255,255,0.05)",
            color: "#4d7a70",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          ⌘ + K
        </kbd>
      </div>

      {/* Notification bell */}
      <Link
        href="/dashboard/notifications"
        className="relative p-2 rounded-lg transition-colors"
        style={{ color: "#7aafa3" }}
        aria-label={`Notifications${unreadCount > 0 ? ` — ${unreadCount} unread` : ""}`}
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span
            className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-4 h-4 px-1 rounded-full text-[10px] font-semibold"
            style={{ background: "#17CFAD", color: "#0b1a17" }}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </Link>

      {/* Avatar — desktop only (sidebar has it too; keep here for quick access on mobile) */}
      <button
        className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold lg:hidden"
        style={{ background: "#17CFAD", color: "#0b1a17" }}
        aria-label="Account"
      >
        A
      </button>
    </header>
  );
}

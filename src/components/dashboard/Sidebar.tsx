"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PackagePlus,
  ClipboardList,
  PawPrint,
  HeartPulse,
  MapPin,
  Bell,
  Users,
  LifeBuoy,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const NAV_MAIN = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard, exact: true },
  { label: "Book Transport", href: "/dashboard/booking", icon: PackagePlus },
  { label: "My Bookings", href: "/dashboard/bookings", icon: ClipboardList },
  { label: "My Pets", href: "/dashboard/pets", icon: PawPrint },
  { label: "Pet Health", href: "/dashboard/health", icon: HeartPulse },
  { label: "Live Tracking", href: "/dashboard/tracking", icon: MapPin },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
];

const NAV_SECONDARY = [
  { label: "Handlers", href: "/dashboard/handlers", icon: Users },
  { label: "Support", href: "/dashboard/support", icon: LifeBuoy },
];

const NAV_BOTTOM = [
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export function Sidebar({ onClose, isMobile = false }: SidebarProps) {
  const pathname = usePathname();

  function isActive(href: string, exact = false) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <aside
      className="flex flex-col h-full w-60 shrink-0"
      style={{ background: "#0b1a17" }}
    >
      {/* Logo + mobile close */}
      <div className="flex items-center justify-between px-5 pt-6 pb-5">
        <Link
          href="/dashboard"
          className="flex items-center gap-2.5"
          onClick={onClose}
        >
          {/* Paw logo mark */}
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ background: "#17CFAD" }}
          >
            <PawPrint size={16} className="text-white" strokeWidth={2.5} />
          </span>
          <span
            className="font-semibold text-[15px] tracking-tight"
            style={{ color: "#f0faf8" }}
          >
            SafePaws
          </span>
        </Link>

        {isMobile && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-md transition-colors"
            style={{ color: "#6b9e93" }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="mx-5 mb-4" style={{ borderTop: "1px solid #1a2e2a" }} />

      {/* Main nav */}
      <nav className="flex-1 flex flex-col gap-0.5 px-3 overflow-y-auto">
        {NAV_MAIN.map(({ label, href, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group"
              style={{
                color: active ? "#17CFAD" : "#7aafa3",
                background: active ? "rgba(23,207,173,0.08)" : "transparent",
              }}
            >
              {/* Active left bar */}
              {active && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                  style={{ background: "#17CFAD" }}
                />
              )}
              <Icon
                size={17}
                strokeWidth={active ? 2.5 : 2}
                style={{ color: active ? "#17CFAD" : "#5a8a80" }}
              />
              <span>{label}</span>

              {/* Hover state (non-active) */}
              {!active && (
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{ background: "rgba(23,207,173,0.04)" }}
                />
              )}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="my-3 mx-1" style={{ borderTop: "1px solid #1a2e2a" }} />

        {NAV_SECONDARY.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group"
              style={{
                color: active ? "#17CFAD" : "#7aafa3",
                background: active ? "rgba(23,207,173,0.08)" : "transparent",
              }}
            >
              {active && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                  style={{ background: "#17CFAD" }}
                />
              )}
              <Icon
                size={17}
                strokeWidth={active ? 2.5 : 2}
                style={{ color: active ? "#17CFAD" : "#5a8a80" }}
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-5 pt-3" style={{ borderTop: "1px solid #1a2e2a" }}>
        {NAV_BOTTOM.map(({ label, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group mb-1"
              style={{
                color: active ? "#17CFAD" : "#7aafa3",
                background: active ? "rgba(23,207,173,0.08)" : "transparent",
              }}
            >
              <Icon size={17} strokeWidth={active ? 2.5 : 2} style={{ color: active ? "#17CFAD" : "#5a8a80" }} />
              <span>{label}</span>
            </Link>
          );
        })}

        {/* User row */}
        <div className="flex items-center gap-3 px-3 pt-2 mt-1" style={{ borderTop: "1px solid #1a2e2a" }}>
          {/* Avatar */}
          <div
            className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold"
            style={{ background: "#17CFAD", color: "#0b1a17" }}
          >
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate" style={{ color: "#d0ebe6" }}>
              Abina
            </p>
            <p className="text-[11px] truncate" style={{ color: "#4d7a70" }}>
              abina@email.com
            </p>
          </div>
          <button
            className="p-1.5 rounded-md transition-colors hover:text-red-400"
            style={{ color: "#4d7a70" }}
            aria-label="Log out"
            title="Log out"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}

// "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  PawPrint,
  HeartPulse,
  MapPin,
  Bell,
  Wallet,
  Users,
  LifeBuoy,
  Settings,
  Car,
  Headset,
  X,
  LogOut,
} from "lucide-react";

// ─── Nav structure (matches TRD §5.3 navigation spec) ────────────────────────

const NAV_MAIN = [
  { label: "Dashboard",     href: "/dashboard",               icon: LayoutDashboard, exact: true },
  { label: "Bookings",      href: "/dashboard/bookings",      icon: CalendarDays },
  { label: "My Pets",       href: "/dashboard/pets",          icon: PawPrint },
  { label: "Pet Health",    href: "/dashboard/health",        icon: HeartPulse },
  { label: "Live Tracking", href: "/dashboard/tracking",      icon: MapPin },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Wallet",        href: "/dashboard/wallet",        icon: Wallet },
];

const NAV_SECONDARY = [
  { label: "Handlers", href: "/dashboard/handlers", icon: Users },
  { label: "Support",  href: "/dashboard/support",  icon: LifeBuoy },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

// ─── Component ────────────────────────────────────────────────────────────────

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

  function NavLink({
    href,
    label,
    icon: Icon,
    exact = false,
  }: {
    href: string;
    label: string;
    icon: React.ElementType;
    exact?: boolean;
  }) {
    const active = isActive(href, exact);
    return (
      <Link
        href={href}
        onClick={onClose}
        className="flex items-center gap-3 px-3 py-2.5 rounded-[--radius-sm] text-sm transition-colors group"
        style={{
          background: active ? "color-mix(in srgb, var(--color-primary) 12%, transparent)" : "transparent",
          color: active ? "var(--color-primary)" : "var(--color-text-sub)",
          fontWeight: active ? 600 : 500,
        }}
        onMouseEnter={(e) => {
          if (!active) {
            (e.currentTarget as HTMLElement).style.background =
              "var(--color-surface-raised)";
          }
        }}
        onMouseLeave={(e) => {
          if (!active) {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }
        }}
      >
        <Icon
          size={18}
          strokeWidth={active ? 2.5 : 2}
          style={{
            color: active ? "var(--color-primary)" : "var(--color-text-muted)",
            flexShrink: 0,
          }}
        />
        {label}
      </Link>
    );
  }

  return (
    <aside
      className="flex flex-col h-full w-72 shrink-0"
      style={{
        background: "var(--color-surface)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      <div className="flex flex-col h-full p-4">

        {/* ── Wordmark ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-8 px-2">
          <Link href="/dashboard" onClick={onClose} className="flex flex-col gap-0.5">
            <h1
              className="text-xl font-bold tracking-tight leading-none"
              style={{ color: "var(--color-text)" }}
            >
              SafePaws
            </h1>
            <p className="text-xs font-medium" style={{ color: "var(--color-text-sub)" }}>
              Premium Pet Transport
            </p>
          </Link>

          {isMobile && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-[--radius-sm] transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              aria-label="Close navigation"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* ── Main nav ──────────────────────────────────────────────────────── */}
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto" aria-label="Main navigation">
          {NAV_MAIN.map(({ label, href, icon, exact }) => (
            <NavLink key={href} href={href} label={label} icon={icon} exact={exact} />
          ))}

          <div className="my-2" style={{ borderTop: "1px solid var(--color-border)" }} />

          {NAV_SECONDARY.map(({ label, href, icon }) => (
            <NavLink key={href} href={href} label={label} icon={icon} />
          ))}
        </nav>

        {/* ── Bottom section ────────────────────────────────────────────────── */}
        <div className="mt-auto space-y-3 pt-3">

          {/* Support card — Stitch spec */}
          <div
            className="p-4 rounded-[--radius-md] border"
            style={{
              background: "color-mix(in srgb, #3b82f6 8%, var(--color-surface))",
              borderColor: "color-mix(in srgb, #3b82f6 20%, transparent)",
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Headset size={14} style={{ color: "#3b82f6", flexShrink: 0 }} />
              <span className="text-xs font-bold" style={{ color: "#1d4ed8" }}>
                Need Help?
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "#1d4ed8", opacity: 0.8 }}>
              Contact our 24/7 support for urgent transport issues.
            </p>
            <Link
              href="/dashboard/support"
              onClick={onClose}
              className="block w-full py-1.5 text-center text-xs font-semibold rounded-[--radius-sm] border transition-colors"
              style={{
                background: "var(--color-surface)",
                color: "#1d4ed8",
                borderColor: "color-mix(in srgb, #3b82f6 30%, transparent)",
              }}
            >
              Contact Support
            </Link>
          </div>

          {/* Book a Ride CTA */}
          <Link
            href="/dashboard/booking"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 h-12 rounded-[--radius-sm] text-sm font-bold tracking-wide transition-colors"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              boxShadow: "0 4px 14px color-mix(in srgb, var(--color-primary) 35%, transparent)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-primary-hover)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--color-primary)")
            }
          >
            <Car size={17} />
            Book a Ride
          </Link>

          {/* User row */}
          <div
            className="flex items-center gap-3 px-2 pt-3"
            style={{ borderTop: "1px solid var(--color-border)" }}
          >
            <div
              className="w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-sm font-bold"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-primary-foreground)",
              }}
            >
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold leading-tight truncate" style={{ color: "var(--color-text)" }}>
                Abina
              </p>
              <p className="text-xs truncate" style={{ color: "var(--color-text-sub)" }}>
                Pet Owner
              </p>
            </div>
            <button
              className="p-1.5 rounded-[--radius-sm] transition-colors"
              style={{ color: "var(--color-text-muted)" }}
              aria-label="Log out"
              title="Log out"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-error)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)")
              }
            >
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
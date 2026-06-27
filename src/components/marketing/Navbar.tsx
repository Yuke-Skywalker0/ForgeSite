import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Rocket, LayoutDashboard, LogIn } from "lucide-react";
import { useThemeStore } from "@/store/themeStore";
import { useAuthStore } from "@/store/authStore";

const navLinks = [
  { to: "/",          label: "Home" },
  { to: "/servizi",   label: "Come funziona" },
  { to: "/prezzi",    label: "Prezzi" },
  { to: "/confronto", label: "Perché noi" },
  { to: "/blog",      label: "Blog" },
];

export function Navbar() {
  const location   = useLocation();
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle }       = useThemeStore();
  const isDark                  = theme === "dark";
  const { user }                = useAuthStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const borderColor = scrolled ? "var(--border)" : "transparent";
  const shadow      = scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${borderColor}`,
        backgroundColor: isDark ? "rgba(16,21,18,0.88)" : "rgba(244,250,247,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: shadow,
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold"
          style={{ color: "var(--text-primary)" }}>
          <span className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--accent)" }}>
            <Rocket size={14} strokeWidth={2.5} color="#fff" />
          </span>
          ForgeSite
        </Link>

        {/* Nav links desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.to);
            return (
              <Link key={link.to} to={link.to}
                className="relative text-sm transition-colors"
                style={{ color: isActive ? "var(--accent-soft)" : "var(--text-secondary)" }}>
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                    aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Toggle tema */}
          <button onClick={toggle}
            aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
            style={{ backgroundColor: "var(--surface-raised)", color: "var(--text-secondary)" }}>
            {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>

          {user ? (
            /* Utente loggato → vai alla Dashboard */
            <Link to="/app/dashboard"
              className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--accent)" }}>
              <LayoutDashboard size={15} strokeWidth={2} />
              Dashboard
            </Link>
          ) : (
            /* Non loggato → Accedi + Prova gratis */
            <>
              <Link to="/app/login"
                className="flex items-center gap-1.5 rounded-lg border px-3.5 py-2 text-sm transition-colors"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                <LogIn size={14} strokeWidth={1.75} />
                Accedi
              </Link>
              <Link to="/app/register"
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}>
                Prova gratis
              </Link>
            </>
          )}
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={toggle}
            aria-label={isDark ? "Tema chiaro" : "Tema scuro"}
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--surface-raised)", color: "var(--text-secondary)" }}>
            {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>
          <button aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
            style={{ color: "var(--text-primary)" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t px-6 py-4 lg:hidden"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 12 }}>
              {user ? (
                <Link to="/app/dashboard" onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--accent)" }}>
                  <LayoutDashboard size={15} strokeWidth={2} />
                  Vai alla Dashboard
                </Link>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link to="/app/login" onClick={() => setOpen(false)}
                    className="rounded-lg border px-4 py-2.5 text-center text-sm"
                    style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                    Accedi
                  </Link>
                  <Link to="/app/register" onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white"
                    style={{ backgroundColor: "var(--accent)" }}>
                    Prova gratis
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

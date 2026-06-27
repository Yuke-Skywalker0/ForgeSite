import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Rocket } from "lucide-react";
import { cn } from "@/lib/cn";
import { useThemeStore } from "../../store/themeStore";

const navLinks = [
  { to: "/",          label: "Home" },
  { to: "/servizi",   label: "Come funziona" },
  { to: "/prezzi",    label: "Prezzi" },
  { to: "/confronto", label: "Perché noi" },
  { to: "/blog",      label: "Blog" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle }     = useThemeStore();
  const isDark                = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "shadow-lg shadow-black/10" : "border-transparent",
        isDark
          ? cn("bg-[#101512]/85 backdrop-blur-md", scrolled && "border-[#2A3830]")
          : cn("bg-white/80 backdrop-blur-md",     scrolled && "border-[#C8E0D4]")
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            aria-hidden="true"
          >
            <Rocket size={13} strokeWidth={2.5} />
          </span>
          ForgeSite
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-sm transition-colors"
              style={{
                color: location.pathname === link.to
                  ? "var(--accent-soft)"
                  : "var(--text-secondary)",
              }}
            >
              {link.label}
              {location.pathname === link.to && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ backgroundColor: "var(--accent)" }}
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Toggle tema */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
            className="flex h-8 w-8 items-center justify-center rounded-md transition-colors"
            style={{
              backgroundColor: "var(--surface-raised)",
              color: "var(--text-secondary)",
            }}
          >
            {isDark
              ? <Sun  size={16} strokeWidth={1.75} />
              : <Moon size={16} strokeWidth={1.75} />
            }
          </button>

          <Link
            to="/app/login"
            className="rounded-sm border px-3.5 py-2 text-sm transition-colors"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            Accedi
          </Link>
          <Link
            to="/app/register"
            className="rounded-sm px-3.5 py-2 text-sm font-semibold transition-all glow-accent-sm hover:glow-accent"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
            }}
          >
            Prova gratis
          </Link>
        </div>

        {/* Mobile: toggle tema + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            aria-label={isDark ? "Tema chiaro" : "Tema scuro"}
            className="flex h-8 w-8 items-center justify-center rounded-md"
            style={{ backgroundColor: "var(--surface-raised)", color: "var(--text-secondary)" }}
          >
            {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>
          <button
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
            style={{ color: "var(--text-primary)" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t px-6 py-4 lg:hidden animate-slide-down"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/app/login"
              onClick={() => setOpen(false)}
              className="text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              Accedi
            </Link>
            <Link
              to="/app/register"
              onClick={() => setOpen(false)}
              className="rounded-sm py-2 text-center text-sm font-semibold"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              Prova gratis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

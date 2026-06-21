import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/servizi", label: "Servizi" },
  { to: "/prezzi", label: "Prezzi" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forge-border bg-forge-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="h-2 w-2 rounded-full bg-forge-accent" aria-hidden="true" />
          ForgeSite
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm transition-colors",
                location.pathname === link.to
                  ? "text-forge-text-primary"
                  : "text-forge-text-secondary hover:text-forge-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/app/login"
            className="rounded-sm border border-forge-border px-3.5 py-2 text-sm text-forge-text-primary hover:border-forge-accent/40"
          >
            Accedi
          </Link>
          <Link
            to="/app/register"
            className="rounded-sm bg-forge-accent px-3.5 py-2 text-sm font-medium text-forge-bg hover:bg-forge-accent-soft"
          >
            Inizia gratis
          </Link>
        </div>

        <button
          className="text-forge-text-primary md:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-forge-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm text-forge-text-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/app/login" className="text-sm text-forge-text-primary">
              Accedi
            </Link>
            <Link
              to="/app/register"
              className="rounded-sm bg-forge-accent px-3.5 py-2 text-center text-sm font-medium text-forge-bg"
            >
              Inizia gratis
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

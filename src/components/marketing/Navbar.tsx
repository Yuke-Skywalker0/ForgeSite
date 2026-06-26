import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/prezzi", label: "Prezzi" },
  { to: "/confronto", label: "Confronto" },
  { to: "/blog", label: "Blog" },
  { to: "/chi-siamo", label: "Chi siamo" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar sempre visibile (sticky) ma con un'ombra/bordo più marcato dopo
  // un piccolo scroll, per dare un feedback visivo di "elevazione" senza
  // essere invasiva quando si è in cima alla pagina.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-forge-bg/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-forge-border shadow-lg shadow-black/20" : "border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-forge-text-primary">
          <span className="h-2 w-2 rounded-full bg-forge-accent" aria-hidden="true" />
          ForgeSite
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative text-sm transition-colors",
                location.pathname === link.to
                  ? "text-forge-text-primary"
                  : "text-forge-text-secondary hover:text-forge-text-primary"
              )}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-forge-accent" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/app/login"
            className="rounded-sm border border-forge-border px-3.5 py-2 text-sm text-forge-text-primary transition-colors hover:border-forge-accent/40"
          >
            Accedi
          </Link>
          <Link
            to="/app/register"
            className="rounded-sm bg-forge-accent px-3.5 py-2 text-sm font-medium text-forge-bg transition-colors hover:bg-forge-accent-soft"
          >
            Inizia gratis
          </Link>
        </div>

        <button
          className="text-forge-text-primary lg:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-forge-border px-6 py-4 lg:hidden">
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
            <Link to="/app/login" onClick={() => setOpen(false)} className="text-sm text-forge-text-primary">
              Accedi
            </Link>
            <Link
              to="/app/register"
              onClick={() => setOpen(false)}
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

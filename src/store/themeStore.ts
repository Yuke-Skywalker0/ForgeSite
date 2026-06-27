import { create } from "zustand";

export type Theme = "light" | "dark";

const COOKIE_KEY = "forgesite_theme";
const COOKIE_DAYS = 365;

function readCookie(): Theme {
  if (typeof document === "undefined") return "light";
  const match = document.cookie.match(new RegExp(`${COOKIE_KEY}=([^;]+)`));
  const val = match?.[1];
  return val === "dark" ? "dark" : "light";
}

function writeCookie(theme: Theme) {
  const expires = new Date(Date.now() + COOKIE_DAYS * 86400 * 1000).toUTCString();
  document.cookie = `${COOKIE_KEY}=${theme};expires=${expires};path=/;SameSite=Lax`;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

interface ThemeState {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
}

// Legge cookie al primo import (prima del render React)
const initial = readCookie();

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: initial,
  toggle: () => {
    const next: Theme = get().theme === "dark" ? "light" : "dark";
    writeCookie(next);
    applyTheme(next);
    set({ theme: next });
  },
  setTheme: (t) => {
    writeCookie(t);
    applyTheme(t);
    set({ theme: t });
  },
}));

// Applica subito al caricamento (evita flash)
if (typeof document !== "undefined") {
  applyTheme(initial);
}

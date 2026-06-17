import { create } from "zustand";
import type { User } from "@/types";

// I token JWT vivono SOLO in cookie HttpOnly gestiti dal backend (vedi spec sicurezza,
// sezione 7). Questo store mantiene solo lo stato utente lato client per la UI:
// nessun token va mai letto, scritto o salvato qui o in localStorage.

interface AuthState {
  user: User | null;
  status: "idle" | "authenticated" | "unauthenticated";
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: "idle",
  setUser: (user) =>
    set({ user, status: user ? "authenticated" : "unauthenticated" }),
  logout: () => set({ user: null, status: "unauthenticated" }),
}));

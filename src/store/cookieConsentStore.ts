import { create } from "zustand";

export type ConsentChoice = "accepted" | "rejected" | null;

interface CookieConsentState {
  choice: ConsentChoice;
  setChoice: (choice: ConsentChoice) => void;
}

const STORAGE_KEY = "forgesite_cookie_consent";

function readStoredChoice(): ConsentChoice {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "accepted" || stored === "rejected" ? stored : null;
}

export const useCookieConsentStore = create<CookieConsentState>((set) => ({
  choice: readStoredChoice(),
  setChoice: (choice) => {
    if (choice) window.localStorage.setItem(STORAGE_KEY, choice);
    set({ choice });
  },
}));

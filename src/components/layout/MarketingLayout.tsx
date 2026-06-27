import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { CookieConsentBanner } from "@/components/marketing/CookieConsentBanner";
import { useThemeStore } from "@/store/themeStore";

export function MarketingLayout() {
  const { theme } = useThemeStore();

  // Sincronizza la classe sul <html> quando il tema cambia
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}

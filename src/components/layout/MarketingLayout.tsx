import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { CookieConsentBanner } from "@/components/marketing/CookieConsentBanner";
<<<<<<< HEAD
import { useThemeStore } from "@/store/themeStore";
=======
<<<<<<< HEAD
import { useThemeStore } from "../../store/themeStore";
=======
import { useThemeStore } from "@/store/themeStore";
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb

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

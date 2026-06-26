import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { MarketingLayout } from "@/components/layout/MarketingLayout";

import HomePage from "@/pages/marketing/HomePage";
import ChiSiamoPage from "@/pages/marketing/ChiSiamoPage";
import ServiziPage from "@/pages/marketing/ServiziPage";
import PrezziPage from "@/pages/marketing/PrezziPage";
import ConfrontoPage from "@/pages/marketing/ConfrontoPage";
import LandingPage from "@/pages/marketing/LandingPage";
import PrivacyPage from "@/pages/marketing/PrivacyPage";
import TerminiPage from "@/pages/marketing/TerminiPage";
import CookiePage from "@/pages/marketing/CookiePage";
import NotFoundPage from "@/pages/marketing/NotFoundPage";
import BlogListPage from "@/pages/blog/BlogListPage";
import BlogPostPage from "@/pages/blog/BlogPostPage";

// Pagine app (dietro login): lazy, non hanno bisogno di pre-rendering SEO
// (sono noindex) — il code-splitting qui riduce il bundle iniziale delle
// pagine marketing, chi visita la home non scarica il codice dell'editor.
const LoginPage = lazy(() => import("@/pages/app/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/app/RegisterPage"));
const OnboardingPage = lazy(() => import("@/pages/app/OnboardingPage"));
const DashboardPage = lazy(() => import("@/pages/app/DashboardPage"));
const ProjectsListPage = lazy(() => import("@/pages/app/ProjectsListPage"));
const CreateProjectPage = lazy(() => import("@/pages/app/CreateProjectPage"));
const TemplatesLibraryPage = lazy(() => import("@/pages/app/TemplatesLibraryPage"));
const SettingsPage = lazy(() => import("@/pages/app/SettingsPage"));
const EditorPage = lazy(() => import("@/pages/app/EditorPage"));
const ProjectBackendPage = lazy(() => import("@/pages/app/ProjectBackendPage"));
const ProjectBoardPage = lazy(() => import("@/pages/app/ProjectBoardPage"));
const ProjectDomainPage = lazy(() => import("@/pages/app/ProjectDomainPage"));
const ProjectAnalyticsPage = lazy(() => import("@/pages/app/ProjectAnalyticsPage"));
const AdminAnalyticsPage = lazy(() => import("@/pages/app/AdminAnalyticsPage"));
const ProjectStatsPage = lazy(() => import("@/pages/app/ProjectStatsPage"));
const ProjectWidgetsPage = lazy(() => import("@/pages/app/ProjectWidgetsPage"));

function LazyBoundary() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-forge-bg text-sm text-forge-text-muted">
          Caricamento…
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
}

// basename: import.meta.env.BASE_URL è impostato automaticamente da Vite al
// valore di "base" in vite.config.ts (es. "/ForgeSite/"). È una feature
// nativa di Vite, non legata a librerie terze — niente da disallineare.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter(
  [
    {
      element: <MarketingLayout />,
      children: [
        { index: true, Component: HomePage },
        { path: "chi-siamo", Component: ChiSiamoPage },
        { path: "servizi", Component: ServiziPage },
        { path: "prezzi", Component: PrezziPage },
        { path: "confronto", Component: ConfrontoPage },
        { path: "inizia", Component: LandingPage },
        { path: "blog", Component: BlogListPage },
        { path: "blog/:slug", Component: BlogPostPage },
        { path: "privacy", Component: PrivacyPage },
        { path: "termini", Component: TerminiPage },
        { path: "cookie", Component: CookiePage },
        // Catch-all DENTRO il layout marketing: chi atterra su un URL
        // sbagliato vede comunque navbar e footer, non una pagina isolata
        // senza via d'uscita oltre al singolo link "Torna alla home".
        { path: "*", Component: NotFoundPage },
      ],
    },
    {
      element: <LazyBoundary />,
      children: [
        { path: "app/login", Component: LoginPage },
        { path: "app/register", Component: RegisterPage },
        { path: "app/onboarding", Component: OnboardingPage },
        { path: "app/dashboard", Component: DashboardPage },
        { path: "app/projects", Component: ProjectsListPage },
        { path: "app/projects/new", Component: CreateProjectPage },
        { path: "app/templates", Component: TemplatesLibraryPage },
        { path: "app/projects/:projectId/editor", Component: EditorPage },
        { path: "app/projects/:projectId/backend", Component: ProjectBackendPage },
        { path: "app/projects/:projectId/board", Component: ProjectBoardPage },
        { path: "app/projects/:projectId/domain", Component: ProjectDomainPage },
        { path: "app/projects/:projectId/analytics", Component: ProjectAnalyticsPage },
        { path: "app/projects/:projectId/stats", Component: ProjectStatsPage },
        { path: "app/projects/:projectId/widgets", Component: ProjectWidgetsPage },
        { path: "app/admin/analytics", Component: AdminAnalyticsPage },
        { path: "app/settings", Component: SettingsPage },
      ],
    },
  ],
  { basename }
);

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { ProtectedRoute } from "@/routes/ProtectedRoute";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { ProjectsListPage } from "@/pages/ProjectsListPage";
import { CreateProjectPage } from "@/pages/CreateProjectPage";
import { EditorPage } from "@/pages/EditorPage";
import { ProjectBackendPage } from "@/pages/ProjectBackendPage";
import { SettingsPage } from "@/pages/SettingsPage";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppShell />,
        children: [
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/projects", element: <ProjectsListPage /> },
          { path: "/projects/new", element: <CreateProjectPage /> },
          { path: "/projects/:projectId/backend", element: <ProjectBackendPage /> },
          { path: "/settings", element: <SettingsPage /> },
        ],
      },
      // L'editor ha un proprio layout fullscreen (niente sidebar globale).
      { path: "/projects/:projectId/editor", element: <EditorPage /> },
    ],
  },
  { path: "/", element: <LoginPage /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

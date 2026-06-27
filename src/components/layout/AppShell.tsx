import type { ReactNode } from "react";
<<<<<<< HEAD
import { AppSidebar } from "@/components/layout/AppSidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
=======
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/layout/AppSidebar";

export function AppShell({ children }: { children?: ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children ?? <Outlet />}
      </main>
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
    </div>
  );
}

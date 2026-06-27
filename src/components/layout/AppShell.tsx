import type { ReactNode } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { AppSidebar } from "@/components/layout/AppSidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
=======
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/layout/AppSidebar";

export function AppShell({ children }: { children?: ReactNode }) {
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children ?? <Outlet />}
      </main>
<<<<<<< HEAD
=======
>>>>>>> 06d1697 (versione 4 frontend quasi finale)
>>>>>>> c7a8f2ca77b55bb445308e82e7a00969156fc2cb
    </div>
  );
}

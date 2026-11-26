"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { SidebarBrand } from "./sidebar-brand";
import { roleLabels, sidebarLinks } from "./sidebar-links";
import { SidebarNav } from "./sidebar-nav";
import { SidebarUser } from "./sidebar-user";
import { Suspense } from "react";
export function AppSidebar() {
  const session = authClient.useSession();
  const role = session.data?.user.role;

  return (
    <Sidebar>
      <div className="dashboard-sidebar flex h-full min-h-0 w-full flex-col bg-sidebar text-sidebar-foreground">
        <SidebarHeader className="border-b border-sidebar-border px-6 py-[9.5px]">
          <SidebarBrand panelLabel={`${role} panel`} />
        </SidebarHeader>
        <SidebarContent>
          <Suspense fallback={" "}>
            <SidebarNav
              sections={sidebarLinks[role as "renter" | "admin" | "provider"]}
            />
          </Suspense>
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border p-4">
          <SidebarUser
            user={{
              name: session.data?.user.name as string,
              email: session.data?.user.email,
              role: roleLabels[role as "renter" | "admin" | "provider"],
              avatarUrl: session.data?.user.image ?? undefined,
            }}
            profileHref={`/dashboard/${role}/profile`}
          />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}

import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { DashboardRole } from "@/types/type";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { RoleGuardSkeleton } from "./role-guard-skeleton";

async function RoleGuardContent({
  role,
  children,
}: {
  role: DashboardRole;
  children: React.ReactNode;
}) {
  const session = await loadUserSessionFromServerComponent();
  if (!session || session.user.role !== role) {
    redirect("/unauthorized");
  }
  return children;
}
export function RoleGuard({
  role,
  children,
}: {
  role: DashboardRole;
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<RoleGuardSkeleton />}>
      <RoleGuardContent role={role}>{children}</RoleGuardContent>
    </Suspense>
  );
}

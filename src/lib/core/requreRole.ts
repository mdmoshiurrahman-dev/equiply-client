import { DashboardRole } from "@/types/type";
import { loadUserSessionFromServerComponent } from "./loadUserSessionFromServerComponent";
import { redirect } from "next/navigation";

export const isAuthorized = async (role: DashboardRole) => {
  const session = await loadUserSessionFromServerComponent();
  if (!session || session.user.role !== role) {
    redirect("/unauthorized");
  }
};

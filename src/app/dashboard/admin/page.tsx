import { UserManagement } from "@/components/dashboard/admin/user-management/user-management";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { UserData } from "@/types/type";
import { connection } from "next/server";

export default async function AdminUsersPage() {
  await connection();
  const session = await loadUserSessionFromServerComponent();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/all-users`, {
    headers: {
      Authorization: `Bearer ${session?.session.token}`,
    },
  });
  if (!res.ok) {
    console.error("Failed to fetch all users:");
  }
  const userDataInfo: UserData[] = await res.json();
  return <UserManagement userDataInfo={userDataInfo} />;
}

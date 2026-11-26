import { UserManagement } from "@/components/dashboard/admin/user-management/user-management";
import { jwtToken } from "@/lib/core/jwtToken";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { UserData } from "@/types/type";
import { connection } from "next/server";

export default async function AdminUsersPage() {
  await connection();
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/all-users`, {
    headers: {
      Authorization: `Bearer ${session?.session.token}`,
      "jwt-token": `Bearer ${jwt}`,
    },
  });
  if (!res.ok) {
    console.error("Failed to fetch all users:");
  }
  const userDataInfo: UserData[] = await res.json();
  return <UserManagement userDataInfo={userDataInfo} />;
}

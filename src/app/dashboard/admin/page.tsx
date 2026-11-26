import { UserManagement } from "@/components/dashboard/admin/user-management/user-management";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { UserData } from "@/types/type";
import { connection } from "next/server";

export default async function AdminUsersPage() {
  await connection();
  const session = await loadUserSessionFromServerComponent();
  let userDataInfo: UserData[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/all-users`, {
      headers: {
        Authorization: `Bearer ${session?.session.token}`,
      },
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) {
      userDataInfo = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch all users:", error);
  }
  return <UserManagement userDataInfo={userDataInfo} />;
}

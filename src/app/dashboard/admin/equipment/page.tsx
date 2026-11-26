import { EquipmentManagement } from "@/components/dashboard/admin/equipment/equipment-management";
import { jwtToken } from "@/lib/core/jwtToken";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { EquipmentApplicationType } from "@/types/type";
import type { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Equipment Management — Equiply",
  description:
    "Review, approve, and manage all equipment listings across the platform.",
};

export default async function EquipmentPage() {
  await connection();
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/all-equipment-application`,
    {
      headers: {
        Authorization: `Bearer ${session?.session.token}`,
         "jwt-token": `Bearer ${jwt}`,
      },
    },
  );
  if (!res.ok) {
    console.error("Failed to fetch equipment applications:");
  }

  const equipmentData: EquipmentApplicationType[] = await res.json();
  return <EquipmentManagement equipmentData={equipmentData} />;
}

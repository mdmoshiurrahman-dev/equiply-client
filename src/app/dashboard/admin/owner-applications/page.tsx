import { OwnerApplications } from "@/components/dashboard/admin/owner-application/owner-applications";
import type { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Owner Applications — Equiply",
  description: "Review and manage customer requests to become equipment owners.",
};

export default async function OwnerApplicationsPage() {
  await connection();
  return <OwnerApplications />;
}

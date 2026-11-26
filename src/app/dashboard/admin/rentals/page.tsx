import type { Metadata } from "next";
import { RentalsPage } from "@/components/dashboard/admin/rentals";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Rental Management — Equiply",
  description: "Monitor and manage all equipment rental bookings.",
};

export default async function AdminRentalsPage() {
  await connection();
  return <RentalsPage />;
}

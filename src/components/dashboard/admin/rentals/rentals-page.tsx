import { RentalsHeader } from "./rentals-header";
import { RentalStatsCards } from "./stats-cards";
import { RentalsTable } from "./rentals-table";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { EquipmentRentalPaymentRecord } from "@/types/type";

export async function RentalsPage() {
  const session = await loadUserSessionFromServerComponent();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-payment-record-as-admin`,
    {
      headers: {
        Authorization: `Bearer ${session?.session?.token}`,
      },
      signal: AbortSignal.timeout(8000),
    },
  );
  if (!response.ok) {
    console.error("Failed to fetch admin payment records:");
  }
  const allRecord: EquipmentRentalPaymentRecord[] = await response.json();
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <RentalsHeader
        title="Rental Management"
        description="Monitor and manage all equipment rental bookings"
      />

      <RentalStatsCards allRecord={allRecord} />

      <RentalsTable allRecord={allRecord} />
    </div>
  );
}

import { RentalsHeader } from "@/components/dashboard/renter/rentals/rentals-header";
import { RentalHistoryCard } from "@/components/dashboard/renter/rentals/rental-history-card";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import React from "react";
import { EquipmentRentalPaymentRecord } from "@/types/type";
import { jwtToken } from "@/lib/core/jwtToken";

export default async function RentalsPage() {
  const session = await loadUserSessionFromServerComponent();
    const jwt = await jwtToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-payment-history`,
    {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
    },
  );
  const paymentHistory:EquipmentRentalPaymentRecord[] = await res.json();
  console.log(paymentHistory)
  return (
    <div className="flex flex-col gap-6">
      <RentalsHeader />
      {/* <RentalsStats /> */}
      <RentalHistoryCard paymentHistory={paymentHistory} />
    </div>
  );
}

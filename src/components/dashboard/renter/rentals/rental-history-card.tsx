import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { RentalTable } from "./rental-table";
import { EquipmentRentalPaymentRecord } from "@/types/type";

export function RentalHistoryCard({paymentHistory}:{paymentHistory:EquipmentRentalPaymentRecord[]}) {
  return (
    <Card className="py-6">
      <CardHeader className="px-6">
        <CardTitle className="text-xl font-semibold">Rental History</CardTitle>
        <CardDescription>A record of all your equipment bookings.</CardDescription>
        <CardAction>
          <span className="text-sm font-semibold">
            {paymentHistory.length} bookings
          </span>
        </CardAction>
      </CardHeader>
      <CardContent className="px-6">
        <div className="rounded-lg border">
          <RentalTable bookings={paymentHistory} />
        </div>
      </CardContent>
    </Card>
  );
}

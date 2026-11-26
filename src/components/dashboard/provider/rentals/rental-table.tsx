import { cn } from "cn";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RentalTableBody } from "./TableBody";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { jwtToken } from "@/lib/core/jwtToken";
import { EquipmentRentalPaymentRecord } from "@/types/type";

export async function RentalTable() {
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-payment-record`,
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${session.session.token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
    },
  );
  const rentalRecord:EquipmentRentalPaymentRecord[] = await res.json()
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground",
      )}
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="h-12 px-4 text-xs font-medium tracking-wider text-center text-muted-foreground uppercase">
              Equipment
            </TableHead>
            <TableHead className="h-12 px-4 text-xs font-medium tracking-wider text-center text-muted-foreground uppercase">
              Renter
            </TableHead>
            <TableHead className="h-12 px-4 text-xs font-medium tracking-wider text-center text-muted-foreground uppercase">
              Rental Period
            </TableHead>
            <TableHead className="h-12 px-4 text-xs font-medium tracking-wider text-center text-muted-foreground uppercase">
              Total Amount (BDT)
            </TableHead>
            <TableHead className="h-12 px-4 text-xs font-medium tracking-wider text-center text-muted-foreground uppercase">
              Payment Status
            </TableHead>
            <TableHead className="h-12 px-4 text-center text-xs font-medium tracking-wider text-muted-foreground uppercase">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <RentalTableBody rentalRecord={rentalRecord} />
      </Table>
    </div>
  );
}

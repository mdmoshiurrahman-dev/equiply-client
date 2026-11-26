import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { RenterInfo } from "./renter-info";
import { RentalStatusBadge } from "./rental-status-badge";
import { EquipmentRentalPaymentRecord } from "@/types/type";
import { cn } from "cn";
import Link from "next/link";
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
function formatDateRange(start: string, end: string) {
  return `${dateFormatter.format(new Date(start))} – ${dateFormatter.format(new Date(end))}`;
}

const amountFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatAmount(amount: number) {
  return amountFormatter.format(amount);
}

export function RentalTableBody({
  rentalRecord,
}: {
  rentalRecord: EquipmentRentalPaymentRecord[];
}) {
  return (
    <TableBody>
      {rentalRecord.map((request, index) => (
        <TableRow
          key={request._id}
          className={cn("border-b", index % 2 === 1 && "bg-muted/60")}
        >
          <TableCell className="font-medium text-center text-foreground">
            {request.productName}
          </TableCell>
          <TableCell className="text-center">
            <RenterInfo
              name={request.paymentRequestName}
              email={request.paymentRequestEmail}
            />
          </TableCell>
          <TableCell className="text-center text-foreground">
            {formatDateRange(request.rentalStartDate, request.rentalEndDate)}
          </TableCell>
          <TableCell className="text-center text-foreground">
            {formatAmount(request.total)}
          </TableCell>
          <TableCell className="text-center">
            <RentalStatusBadge status={request.payment as "paid" | "pending"} />
          </TableCell>
          <TableCell className="text-center">
            <Link
              href={`/dashboard/provider/rentals/payment-info/${request._id}`}
              className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
            >
              View Details
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

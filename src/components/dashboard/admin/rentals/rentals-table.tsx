"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EquipmentRentalPaymentRecord } from "@/types/type";
import { RentalStatusBadge } from "../../provider/rentals/rental-status-badge";

const TABLE_HEADS = [
  "Customer Information",
  "Equipment Name",
  "Rental Duration",
  "Booking Amount",
  "Payment Status",
] as const;

export function RentalsTable({
  allRecord,
}: {
  allRecord: EquipmentRentalPaymentRecord[];
}) {
  return (
    <Card className="gap-0 overflow-hidden py-0">
      {/* Card heading + static toolbar */}
      <div className="space-y-4 border-b p-4 sm:p-5">
        <CardHeader className="px-0">
          <CardTitle className="text-lg sm:text-xl">All Rentals</CardTitle>
          <CardDescription className="text-sm">
            A complete list of rental bookings from customers and equipment
            owners
          </CardDescription>
        </CardHeader>
      </div>

      {/* Rentals table */}
      <Table className="min-w-162.5">
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            {TABLE_HEADS.map((head) => (
              <TableHead
                key={head}
                className="h-11 px-4 first:pl-6 last:pr-6 last:text-center"
              >
                {head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {allRecord.map((rental) => (
            <TableRow key={rental._id}>
              <TableCell className="px-4 pl-6">
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold">
                    {rental.paymentRequestName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {rental.paymentRequestEmail}
                  </p>
                </div>
              </TableCell>
              <TableCell className="px-4 text-sm">
                {rental.productName}
              </TableCell>
              <TableCell className="px-4 text-sm whitespace-nowrap">
                {rental.rentalStartDate} – {rental.rentalEndDate}
              </TableCell>
              <TableCell className="px-4 text-sm font-medium">
                ${rental.total}
              </TableCell>
              <TableCell className="px-4">
                {
                  <RentalStatusBadge
                    status={rental.payment as "paid" | "pending"}
                  />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

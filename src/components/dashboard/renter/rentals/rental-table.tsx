import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EquipmentRentalPaymentRecord } from "@/types/type";

const tableHeadClassName = "text-sm font-semibold text-foreground";

export function RentalTable({
  bookings,
}: {
  bookings: EquipmentRentalPaymentRecord[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className={tableHeadClassName}>Equipment Name</TableHead>
          <TableHead className={tableHeadClassName}>
            Rental Start Date
          </TableHead>
          <TableHead className={tableHeadClassName}>Rental End Date</TableHead>
          <TableHead className={tableHeadClassName}>Booking Date</TableHead>
          <TableHead className={tableHeadClassName}>Total Amount</TableHead>
          <TableHead className={tableHeadClassName}>Payment Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <RentalTableRow key={booking._id} booking={booking} />
        ))}
      </TableBody>
    </Table>
  );
}

function RentalTableRow({
  booking,
}: {
  booking: EquipmentRentalPaymentRecord;
}) {
  return (
    <TableRow>
      <TableCell className="font-semibold">{booking.productName}</TableCell>
      <TableCell>{booking.rentalStartDate}</TableCell>
      <TableCell>{booking.rentalEndDate}</TableCell>
      <TableCell className="text-muted-foreground">
        {booking.paymentDate}
      </TableCell>
      <TableCell className="font-semibold">{booking.total}</TableCell>
      <TableCell className="capitalize">
        {booking.payment === "pending" ? "Failed" : booking.payment}
      </TableCell>
    </TableRow>
  );
}

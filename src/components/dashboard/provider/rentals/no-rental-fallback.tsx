import { ClipboardList } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";

export function NoRentalFallback() {
  return (
    <TableRow className="hover:bg-transparent">
      <TableCell colSpan={6} className="h-64 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border bg-muted/50">
            <ClipboardList className="size-6 text-muted-foreground" />
          </div>
          <p className="font-medium text-foreground">No rental requests yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Rental requests will appear here once customers make bookings.
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
}

import { cn } from "cn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const COLUMN_COUNT = 6;
const ROW_COUNT = 5;

/** Varied bar widths per column for a natural, non-uniform look. */
const HEADER_WIDTHS = [
  "w-20 sm:w-24", // Equipment
  "w-16 sm:w-20", // Renter
  "w-24 sm:w-28", // Rental Period
  "w-20 sm:w-28", // Total Amount
  "w-20 sm:w-24", // Payment Status
  "w-16 sm:w-20", // Action
] as const;

const BODY_WIDTHS = [
  "w-24 sm:w-32",
  "w-16 sm:w-24",
  "w-20 sm:w-28",
  "w-14 sm:w-20",
  "w-16 sm:w-20",
  "w-12 sm:w-16",
] as const;

export function RentalTableSkeleton() {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card text-card-foreground",
      )}
      aria-busy="true"
      aria-live="polite"
    >
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
              <TableHead
                key={i}
                className="h-12 px-4 text-center align-middle"
              >
                <Skeleton
                  className={cn("h-3.5 mx-auto", HEADER_WIDTHS[i])}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: ROW_COUNT }).map((_, row) => (
            <TableRow key={row}>
              {Array.from({ length: COLUMN_COUNT }).map((_, col) => (
                <TableCell key={col} className="h-12 px-4 text-center">
                  <Skeleton
                    className={cn("h-4 mx-auto", BODY_WIDTHS[col])}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

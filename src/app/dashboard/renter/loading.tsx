import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
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

const COLUMN_COUNT = 6;
const ROW_COUNT = 5;

/** Varied bar widths per column for a natural, non-uniform look. */
const HEADER_WIDTHS = [
  "w-24 sm:w-28", // Equipment Name
  "w-20 sm:w-24", // Rental Start Date
  "w-20 sm:w-24", // Rental End Date
  "w-16 sm:w-20", // Booking Date
  "w-14 sm:w-16", // Total Amount
  "w-16 sm:w-20", // Payment Status
] as const;

const BODY_WIDTHS = [
  "w-24 sm:w-32",
  "w-20 sm:w-24",
  "w-20 sm:w-24",
  "w-16 sm:w-20",
  "w-14 sm:w-16",
  "w-16 sm:w-20",
] as const;

export default function RentalsLoading() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-8 w-40 sm:h-10 sm:w-52" />
        <Skeleton className="h-4 w-64 sm:w-80" />
      </div>

      {/* Rental history card */}
      <Card className="py-6">
        <CardHeader className="px-6">
          <CardTitle className="text-xl font-semibold">
            <Skeleton className="h-6 w-36" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-56" />
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6">
          <div
            className="rounded-lg border"
            aria-busy="true"
            aria-live="polite"
          >
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
                    <TableHead key={i} className="h-11 px-3">
                      <Skeleton className={HEADER_WIDTHS[i]} />
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: ROW_COUNT }).map((_, row) => (
                  <TableRow key={row}>
                    {Array.from({ length: COLUMN_COUNT }).map((_, col) => (
                      <TableCell key={col} className="h-12 px-3">
                        <Skeleton className={BODY_WIDTHS[col]} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

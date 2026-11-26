import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "cn";

const STAT_CARD_COUNT = 3;
const TABLE_ROW_COUNT = 6;
const COLUMN_COUNT = 6;

/** Varied bar widths per column for a natural, non-uniform look. */
const BODY_WIDTHS = [
  "w-24 sm:w-32", // Equipment Name
  "w-16 sm:w-24", // Category
  "w-14 sm:w-20", // Rental Price
  "w-8 sm:w-10", // Quantity
  "w-16 sm:w-20", // Status badge
  "w-20 sm:w-24", // Actions
] as const;

function StatCardSkeleton() {
  return (
    <Card className="flex-row items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5">
      <Skeleton className="size-10 shrink-0 rounded-lg sm:size-11" />
      <div className="min-w-0 flex-1 space-y-2" aria-hidden="true">
        <Skeleton className="h-3.5 w-24 max-w-full" />
        <Skeleton className="h-6 w-14 max-w-full" />
      </div>
    </Card>
  );
}

function FilterSelectSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="hidden h-3.5 w-16 md:inline-block" />
      <Skeleton className="h-9 w-full min-w-36 md:w-36" />
    </div>
  );
}

export function EquipmentManagementSkeleton() {
  return (
    <div
      className="mx-auto flex w-full max-w-7xl flex-col gap-6"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Page header */}
      <div className="flex items-start gap-3 sm:gap-4" aria-hidden="true">
        <Skeleton className="size-10 shrink-0 rounded-lg sm:size-12" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-7 w-44 max-w-full sm:h-8" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>
      </div>

      {/* Stats cards */}
      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-hidden="true"
      >
        {Array.from({ length: STAT_CARD_COUNT }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>

      {/* Table card */}
      <Card className="gap-0 overflow-hidden py-0">
        {/* Filter toolbar */}
        <div className="border-b p-4" aria-hidden="true">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <Skeleton className="h-10 w-full sm:w-72" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:flex xl:items-center xl:gap-4">
              <FilterSelectSkeleton />
              <FilterSelectSkeleton />
              <FilterSelectSkeleton />
            </div>
          </div>
        </div>

        {/* Table */}
        <Table className="min-w-5xl">
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
                <TableHead
                  key={i}
                  className="h-11 px-3 last:text-end last:pr-6 first:pl-6"
                >
                  <Skeleton
                    className={cn(
                      "h-3.5",
                      i === 0 && "ml-auto w-28 sm:w-32",
                      i === COLUMN_COUNT - 1 && "ml-auto w-16 sm:w-20",
                      i !== 0 &&
                        i !== COLUMN_COUNT - 1 &&
                        "w-16 sm:w-24",
                    )}
                  />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: TABLE_ROW_COUNT }).map((_, row) => (
              <TableRow key={row}>
                {Array.from({ length: COLUMN_COUNT }).map((_, col) => (
                  <TableCell
                    key={col}
                    className={cn(
                      "px-3",
                      col === 0 && "pl-6",
                      col === COLUMN_COUNT - 1 && "pr-6 text-end",
                    )}
                  >
                    <div
                      className={cn(
                        "flex",
                        col === COLUMN_COUNT - 1 && "justify-end",
                      )}
                    >
                      <Skeleton
                        className={cn(
                          "h-4",
                          col === 4 && "h-6 w-16 rounded-full sm:w-20",
                          BODY_WIDTHS[col],
                        )}
                      />
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Table footer */}
        <div className="border-t" aria-hidden="true">
          <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <Skeleton className="h-4 w-40 max-w-full" />
            <div className="flex items-center gap-1">
              <Skeleton className="h-8 w-20 rounded-md" />
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="h-8 w-16 rounded-md" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

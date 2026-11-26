import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const TABLE_ROW_COUNT = 8;
const COLUMN_COUNT = 5;

/** Varied bar widths per column for a natural, non-uniform look. */
const BODY_WIDTHS = [
  "w-32 sm:w-40", // User (avatar + name)
  "w-36 sm:w-48", // Email
  "w-16 sm:w-20", // Role badge
  "w-20 sm:w-24", // Joined date
  "w-16 sm:w-24", // Actions
] as const;

export function UserManagementSkeleton() {
  return (
    <div
      className="flex flex-col gap-6"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Page header */}
      <header className="flex flex-col gap-1" aria-hidden="true">
        <Skeleton className="h-7 w-48 sm:h-8 sm:w-56" />
        <Skeleton className="h-4 w-full max-w-xs" />
      </header>

      {/* Users table card */}
      <section className="overflow-hidden rounded-xl border bg-card shadow-sm">
        {/* Card heading */}
        <div className="px-4 pt-4 pb-3 sm:px-6" aria-hidden="true">
          <Skeleton className="h-5 w-24" />
        </div>

        {/* Table */}
        <div className="px-3 pb-4 sm:px-4" aria-hidden="true">
          <div className="overflow-hidden rounded-lg border">
            <Table className="min-w-[860px]">
              <TableHeader>
                <TableRow>
                  {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
                    <TableHead
                      key={i}
                      className={cn(
                        "px-3",
                        i === COLUMN_COUNT - 1 && "text-right",
                      )}
                    >
                      <Skeleton
                        className={cn(
                          "h-3.5",
                          i === COLUMN_COUNT - 1 ? "ml-auto w-16" : "w-14 sm:w-20",
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
                          col === COLUMN_COUNT - 1 && "text-right",
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-center",
                            col === 0 && "gap-2.5",
                            col === COLUMN_COUNT - 1 && "justify-end",
                          )}
                        >
                          {col === 0 && (
                            <Skeleton className="size-9 shrink-0 rounded-full" />
                          )}
                          {col === 2 ? (
                            <Skeleton className="h-5 w-16 rounded-full" />
                          ) : (
                            <Skeleton className={cn("h-4", BODY_WIDTHS[col])} />
                          )}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Table footer */}
        <div className="border-t" aria-hidden="true">
          <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <Skeleton className="h-4 w-40 max-w-full" />
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-8 w-24 rounded-md" />
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="h-8 w-20 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

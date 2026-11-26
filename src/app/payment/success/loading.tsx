import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

const SUMMARY_ROW_COUNT = 8;

export default function PaymentSuccessSkeleton() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[#f7f3ec] px-4 py-10 dark:bg-background sm:py-16 print:min-h-0 print:bg-white print:p-0"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-sm sm:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        {/* Success icon */}
        <div className="flex justify-center print:hidden" aria-hidden="true">
          <Skeleton className="size-12 rounded-full" />
        </div>

        {/* Heading + description */}
        <div className="mt-4 space-y-3 text-center" aria-hidden="true">
          <Skeleton className="mx-auto h-8 w-56 max-w-full sm:h-9" />
          <Skeleton className="mx-auto h-4 w-full max-w-xs" />
        </div>

        {/* Booking summary */}
        <div className="mt-8 overflow-hidden rounded-lg border border-border print:hidden">
          <Table className="table-fixed" aria-hidden="true">
            <TableBody>
              {Array.from({ length: SUMMARY_ROW_COUNT }).map((_, i) => (
                <TableRow key={i}>
                  <TableHead
                    scope="row"
                    className="w-2/5 whitespace-normal px-3 py-3 sm:px-5"
                  >
                    <Skeleton className="h-3.5 w-24 max-w-full" />
                  </TableHead>
                  <TableCell className="break-words whitespace-normal px-3 py-3 sm:px-5">
                    <Skeleton
                      className={
                        i === 1 || i === 7 ? "h-3.5 w-28 max-w-full" : "h-3.5 w-20 max-w-full"
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Actions */}
        <div className="mt-8 print:hidden" aria-hidden="true">
          <Skeleton className="h-12 w-full rounded-lg" />
          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Skeleton className="h-4 w-36 max-w-full sm:mr-auto" />
            <Skeleton className="h-9 w-40 max-w-full rounded-md" />
          </div>
        </div>
      </div>
    </main>
  );
}

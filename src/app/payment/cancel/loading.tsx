import { Skeleton } from "@/components/ui/skeleton";

const SUMMARY_ROW_COUNT = 4;

export default function PaymentCancelSkeleton() {
  return (
    <main
      className="flex min-h-[100dvh] items-center justify-center bg-[#f7f3ec] px-3 py-6 dark:bg-background sm:px-4 sm:py-16"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-5 shadow-sm sm:p-10">
        {/* Cancelled icon */}
        <div className="flex justify-center" aria-hidden="true">
          <Skeleton className="size-12 rounded-full sm:size-14" />
        </div>

        {/* Heading + description */}
        <div className="mt-5 space-y-3 text-center" aria-hidden="true">
          <Skeleton className="mx-auto h-7 w-48 max-w-full sm:h-9" />
          <Skeleton className="mx-auto h-4 w-full max-w-xs" />
        </div>

        {/* Booking summary */}
        <dl className="mt-8 grid gap-x-6 gap-y-3 rounded-lg border border-border p-4 sm:grid-cols-[10.5rem_1fr] sm:gap-x-8 sm:gap-y-2.5 sm:p-5" aria-hidden="true">
          {Array.from({ length: SUMMARY_ROW_COUNT }).map((_, i) => (
            <div key={i} className="grid gap-0.5 sm:contents">
              <Skeleton className="h-3.5 w-28 max-w-full" />
              <Skeleton className="h-3.5 w-20 max-w-full" />
            </div>
          ))}
        </dl>

        {/* Actions */}
        <div className="mt-8" aria-hidden="true">
          <Skeleton className="h-12 w-full rounded-lg" />
          <div className="mt-5 flex justify-center">
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
    </main>
  );
}

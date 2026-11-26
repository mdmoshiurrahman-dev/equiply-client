import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "cn";

function InfoCardSkeleton({
  titleWidth,
  fieldCount,
  stacked = false,
}: {
  titleWidth: string;
  /** Number of label/value field pairs. */
  fieldCount: number;
  /** Fields laid out in columns instead of a vertical stack. */
  stacked?: boolean;
}) {
  return (
    <section className="h-full rounded-xl border border-border bg-card p-5 sm:p-6">
      <Skeleton className={cn("h-5", titleWidth)} />
      <dl
        className={cn(
          "mt-5",
          stacked
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
            : "space-y-4",
        )}
        aria-hidden="true"
      >
        {Array.from({ length: fieldCount }).map((_, i) => (
          <div key={i}>
            <Skeleton className="h-3.5 w-24 max-w-full" />
            <Skeleton className="mt-1.5 h-4 w-28 max-w-full" />
          </div>
        ))}
      </dl>
    </section>
  );
}

export function RentalPaymentDetailsSkeleton() {
  return (
    <section
      className="mx-auto w-full max-w-5xl"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Header */}
      <Skeleton className="h-8 w-44 max-w-full sm:h-9 sm:w-52" aria-hidden="true" />
      <Skeleton className="mt-2 h-4 w-full max-w-xs" aria-hidden="true" />
      <div className="mt-3 flex flex-wrap items-center gap-2" aria-hidden="true">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-3 w-2 rounded-full" />
        <Skeleton className="h-3.5 w-24" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      {/* Equipment & renter */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <InfoCardSkeleton titleWidth="w-44" fieldCount={4} />
        <InfoCardSkeleton titleWidth="w-40" fieldCount={3} />
      </div>

      {/* Schedule & delivery */}
      <section className="mt-4 rounded-xl border border-border bg-card p-5 sm:p-6 md:mt-6">
        <Skeleton className="h-5 w-36" aria-hidden="true" />
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
          {/* Rental schedule */}
          <div className="md:pr-6" aria-hidden="true">
            <Skeleton className="h-4 w-28" />
            <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-3.5 w-20 max-w-full" />
                  <Skeleton className="mt-1.5 h-4 w-16 max-w-full" />
                </div>
              ))}
            </dl>
          </div>

          {/* Delivery information */}
          <div className="border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0" aria-hidden="true">
            <Skeleton className="h-4 w-32" />
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="h-3.5 w-24 max-w-full" />
                  <Skeleton className="mt-1.5 h-4 w-full max-w-[10rem]" />
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Payment summary — amber-tinted like the real card */}
      <section
        className="mt-4 rounded-xl border border-amber-500/40 bg-amber-400/5 p-5 sm:p-6 md:mt-6 dark:border-amber-400/25 dark:bg-amber-400/10"
        aria-hidden="true"
      >
        <Skeleton className="h-5 w-36" />
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-3.5 w-24 max-w-full" />
              <Skeleton className="mt-1.5 h-4 w-20 max-w-full" />
            </div>
          ))}
          <div className="hidden lg:block" />
        </dl>
      </section>
    </section>
  );
}

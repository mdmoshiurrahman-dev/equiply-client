import { Skeleton } from "@/components/ui/skeleton";

/**
 * Generic dashboard-content skeleton shown while a dashboard role guard
 * resolves the user session.
 */
export function RoleGuardSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-busy="true" aria-live="polite">
      {/* Page header */}
      <header className="flex flex-col gap-1" aria-hidden="true">
        <Skeleton className="h-7 w-48 sm:h-8 sm:w-56" />
        <Skeleton className="h-4 w-full max-w-xs" />
      </header>

      {/* Stats row */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm sm:p-6"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-8 w-16 sm:h-10 sm:w-20" />
          </div>
        ))}
      </section>

      {/* Table rows */}
      <section className="overflow-hidden rounded-xl border bg-card shadow-sm" aria-hidden="true">
        <div className="px-4 pt-4 pb-3 sm:px-6">
          <Skeleton className="h-5 w-28" />
        </div>
        <div className="flex flex-col gap-3 px-4 pb-4 sm:px-6">
          {Array.from({ length: 5 }).map((_, row) => (
            <div key={row} className="flex items-center gap-3">
              <Skeleton className="size-9 shrink-0 rounded-full" />
              <Skeleton className="h-4 flex-1 max-w-[220px]" />
              <Skeleton className="ml-auto h-4 w-16 sm:w-24" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

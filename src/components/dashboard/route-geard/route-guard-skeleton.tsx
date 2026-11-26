import { Skeleton } from "@/components/ui/skeleton";

/**
 * Fallback for the route guard. Mirrors the dashboard content area so the
 * sidebar/header can paint while the session check streams in.
 */
export function RouteGuardSkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-busy="true" aria-live="polite">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="h-8 w-40 sm:h-10 sm:w-52" />
        <Skeleton className="h-4 w-64 sm:w-80" />
      </div>
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  );
}

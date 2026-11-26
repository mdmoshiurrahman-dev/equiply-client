import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "cn";

const CARDS_PER_PAGE = 3;

function ReviewCardSkeleton() {
  return (
    <figure className="flex flex-col rounded-xl border border-border bg-muted/40 p-5">
      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="size-4 rounded-sm" />
        ))}
      </div>

      <div className="mt-4 flex-1 space-y-2" aria-hidden="true">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-[92%]" />
        <Skeleton className="h-3.5 w-[75%]" />
        <Skeleton className="h-3.5 w-[40%]" />
      </div>

      {/* Reviewer meta */}
      <figcaption className="mt-5" aria-hidden="true">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 shrink-0 rounded-full" />
          <div className="min-w-0 flex-1 space-y-1.5">
            <Skeleton className="h-3.5 w-28 max-w-full" />
            <Skeleton className="h-3 w-20 max-w-full" />
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function ReviewCarouselSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-label="Customer reviews"
      aria-busy="true"
      aria-live="polite"
      className={cn(className)}
    >
      {/* Section header */}
      <Skeleton className="h-3 w-32 max-w-full" aria-hidden="true" />
      <Skeleton
        className="mt-3 h-9 w-72 max-w-full sm:h-10 lg:h-12 lg:w-96"
        aria-hidden="true"
      />
      <Skeleton
        className="mt-4 h-4 w-full max-w-lg sm:h-5"
        aria-hidden="true"
      />

      {/* Prev / next controls */}
      <div className="mt-5 flex justify-end gap-2" aria-hidden="true">
        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="size-10 rounded-full" />
      </div>

      {/* Small review cards */}
      <div
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-hidden="true"
      >
        {Array.from({ length: CARDS_PER_PAGE }).map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

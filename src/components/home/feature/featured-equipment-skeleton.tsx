import { Skeleton } from "@/components/ui/skeleton";

/** Number of placeholder cards — matches the featured section count. */
const SKELETON_CARD_COUNT = 6;

function FeaturedEquipmentCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-3.5 shadow-xs">
      {/* Image */}
      <Skeleton className="aspect-16/10 w-full rounded-lg" />

      {/* Name + category */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
      </div>

      {/* Price */}
      <Skeleton className="h-5 w-1/2" />

      {/* Button */}
      <Skeleton className="h-9 w-full rounded-md" />
    </div>
  );
}

export function FeaturedEquipmentSkeleton() {
  return (
    <section aria-busy="true" className="py-14 sm:py-16">
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="space-y-3">
          <Skeleton className="h-3 w-48" />
          <Skeleton className="h-9 w-64" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-80" />
            <Skeleton className="h-3 w-64" />
          </div>
        </div>

        <Skeleton className="h-3 w-56" />
      </div>

      {/* Cards grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
          <FeaturedEquipmentCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

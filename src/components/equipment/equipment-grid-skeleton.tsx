import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CARD_COUNT = 6;

/** Card placeholder — mirrors EquipmentCard's geometry. */
function EquipmentCardSkeleton() {
  return (
    <Card className="flex h-full flex-col justify-between gap-3 rounded-xl border border-border bg-card p-3.5 shadow-xs">
      {/* Image */}
      <Skeleton className="aspect-16/10 w-full rounded-lg" />

      {/* Name + category */}
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>

      {/* Price + rental type */}
      <div className="flex items-baseline justify-between gap-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-4 w-12" />
      </div>

      {/* Location + availability badge */}
      <div className="flex items-center justify-between gap-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>

      {/* Action button */}
      <Skeleton className="mt-1 h-9 w-full rounded-md" />
    </Card>
  );
}

/** Full grid placeholder — mirrors the EquipmentGrid section. */
export function EquipmentGridSkeleton() {
  return (
    <section
      aria-label="Loading equipment"
      aria-busy="true"
      className="space-y-3"
    >
      {/* Header row */}
      <Skeleton className="h-6 w-44" />

      {/* Cards container & grid */}
      <div className="rounded-xl border border-border bg-card/50 p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: CARD_COUNT }, (_, index) => (
            <EquipmentCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/** Image placeholder — mirrors the aspect-4/3 image block. */
function ImageSkeleton() {
  return (
    <Skeleton className="aspect-4/3 w-full rounded-xl" />
  );
}

/** Summary placeholder — mirrors EquipmentSummary. */
function SummarySkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {/* Category label */}
      <Skeleton className="h-3 w-24" />

      {/* Title */}
      <Skeleton className="h-9 w-3/4 sm:h-10" />

      {/* Location badge */}
      <Skeleton className="h-6 w-40 rounded-full" />

      {/* Description */}
      <div className="space-y-2">
        <Skeleton className="h-3 w-full max-w-prose" />
        <Skeleton className="h-3 w-full max-w-prose" />
        <Skeleton className="h-3 w-2/3 max-w-prose" />
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Details list */}
      <div className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-56" />
        ))}
      </div>

      {/* Availability badge */}
      <Skeleton className="h-6 w-28 rounded-full" />

      {/* Action buttons */}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Skeleton className="h-12 flex-1 rounded-lg sm:flex-none sm:w-44" />
        <Skeleton className="h-12 flex-1 rounded-lg sm:flex-none sm:w-44" />
      </div>
    </div>
  );
}

/** About placeholder — mirrors EquipmentAbout. */
function AboutSkeleton() {
  return (
    <section className="flex flex-col gap-3">
      <Skeleton className="h-6 w-56 sm:w-64" />

      <div className="space-y-2">
        <Skeleton className="h-3 w-full max-w-prose" />
        <Skeleton className="h-3 w-full max-w-prose" />
        <Skeleton className="h-3 w-1/2 max-w-prose" />
      </div>
    </section>
  );
}

/** Specifications placeholder — mirrors EquipmentSpecifications grid. */
function SpecificationsSkeleton() {
  return (
    <section className="flex flex-col gap-4">
      <Skeleton className="h-6 w-64 sm:w-72" />

      <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-b border-border pb-3"
          >
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-4 w-32" />
          </div>
        ))}
      </div>
    </section>
  );
}

/** Owner placeholder — mirrors EquipmentOwnerCard. Also used as the
 *  Suspense fallback when EquipmentOwnerCard streams in. */
export function OwnerCardSkeleton() {
  return (
    <section className="flex flex-col gap-4">
      <Skeleton className="h-6 w-44 sm:w-48" />

      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Skeleton className="size-16 shrink-0 rounded-full" />

        {/* Name + contact lines */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-52" />
          <Skeleton className="h-3 w-44" />
          <Skeleton className="h-3 w-56" />
        </div>
      </div>
    </section>
  );
}

/** Rental terms placeholder — mirrors EquipmentRentalTerms card. */
function RentalTermsSkeleton() {
  return (
    <Card className="gap-4 rounded-xl py-6">
      <CardHeader>
        <Skeleton className="h-5 w-56 sm:w-64" />
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </CardContent>
    </Card>
  );
}

/** Full-page skeleton for the equipment details route. */
export function EquipmentDetailsSkeleton() {
  return (
    <div aria-busy="true" className="flex flex-col gap-10 py-6 sm:gap-12 sm:py-8">
      {/* Top section: image + summary */}
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <ImageSkeleton />
        <SummarySkeleton />
      </section>

      <AboutSkeleton />
      <SpecificationsSkeleton />

      {/* Owner + rental terms */}
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <OwnerCardSkeleton />
        <RentalTermsSkeleton />
      </section>
    </div>
  );
}

import { EquipmentFilters } from "@/components/equipment/equipment-filters";
import { EquipmentGrid } from "@/components/equipment/equipment-grid";
import { EquipmentFiltersSkeleton } from "@/components/equipment/equipment-filters-skeleton";
import { EquipmentGridSkeleton } from "@/components/equipment/equipment-grid-skeleton";
import { Suspense } from "react";

export default function EquipmentPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="flex flex-col gap-6 py-6 sm:py-8">
      {/* Breadcrumb & Page header */}
      <header className="flex flex-col gap-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            All Equipment
          </h1>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Discover and rent quality equipment for your projects.
          </p>
        </div>
      </header>

      {/* Filters bar */}
      <Suspense fallback={<EquipmentFiltersSkeleton />}>
        <EquipmentFilters />
      </Suspense>

      {/* Equipment cards grid */}
      <Suspense fallback={<EquipmentGridSkeleton />}>
        <EquipmentGrid searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

const FILTER_COUNT = 5;

export function EquipmentFiltersSkeleton() {
  return (
    <section
      aria-label="Loading equipment filters"
      aria-busy="true"
      className="grid grid-cols-1 gap-3"
    >
      <div className="flex items-center">
        <Skeleton className="h-9 flex-1 rounded-r-none" />
        <Skeleton className="h-9 w-20 rounded-l-none" />
      </div>

      <div>
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {Array.from({ length: FILTER_COUNT }, (_, index) => (
            <div key={index} className="grid gap-1.5">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-9 w-full" />
            </div>
          ))}
        </div>
        <Skeleton className="mt-3 h-8 w-16" />
      </div>
    </section>
  );
}

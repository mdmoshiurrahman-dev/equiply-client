import { Skeleton } from "@/components/ui/skeleton";

/** Number of placeholder cards — matches the top-six categories grid. */
const SKELETON_CARD_COUNT = 6;

/**
 * Loading skeleton for <CategorySectionMain /> on the landing page.
 * Mirrors the layout of categories-section.tsx / category-card.tsx:
 * section header + 16/10 image card with a title and "Explore Category" row.
 */
export function CategorySectionSkeleton() {
  return (
    <section aria-busy="true" className="py-14 sm:py-16">
      {/* Section header */}
      <div className="space-y-3">
        <Skeleton className="h-3 w-48" />
        <Skeleton className="h-9 w-96 max-w-full" />
        <Skeleton className="h-3 w-80 max-w-full" />
      </div>

      {/* Cards grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: SKELETON_CARD_COUNT }).map((_, index) => (
          <div
            key={index}
            className="flex h-full flex-col gap-3 rounded-xl border border-border bg-card p-3 shadow-xs"
          >
            {/* Category image */}
            <Skeleton className="aspect-16/10 w-full rounded-lg" />

            {/* Category details */}
            <div className="flex flex-1 flex-col gap-2 px-1 pb-1">
              <Skeleton className="h-5 w-2/3" />
              <div className="mt-auto flex justify-end">
                <Skeleton className="h-3.5 w-32" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

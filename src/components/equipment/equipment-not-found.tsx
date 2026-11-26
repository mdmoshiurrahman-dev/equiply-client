import { PackageSearch } from "lucide-react";

/**
 * Empty-state shown when no equipment matches the current search or filters.
 * Purely presentational — the caller decides when to render it.
 */
export function EquipmentNotFound() {
  return (
    <section
      role="status"
      aria-live="polite"
      className="flex min-h-95 w-full flex-col items-center justify-center px-4 mx-auto w-full py-12 text-center"
    >
      <div className="mb-5 flex size-16 items-center justify-center rounded-2xl border bg-muted/50 shadow-sm">
        <PackageSearch className="size-7 text-muted-foreground" />
      </div>

      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        No equipment found
      </h2>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        We couldn&apos;t find any equipment matching your search or filters.
        Try adjusting them or check back later.
      </p>
    </section>
  );
}

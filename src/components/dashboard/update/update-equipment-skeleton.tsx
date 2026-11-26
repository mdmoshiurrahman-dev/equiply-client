import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "cn";

function FormSectionSkeleton({
  fieldRows,
}: {
  /** Number of 2-column field rows before an optional full-width field. */
  fieldRows: number;
}) {
  return (
    <section className="flex flex-col gap-6 border-b pb-8" aria-hidden="true">
      {/* Section header: step / title / description */}
      <div className="flex flex-col gap-1.5">
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-5 w-40 max-w-full" />
        <Skeleton className="h-3.5 w-full max-w-sm" />
      </div>

      {/* Fields */}
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: fieldRows * 2 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-3.5 w-24 max-w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

function TextareaFieldSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2", className)} aria-hidden="true">
      <Skeleton className="h-3.5 w-32 max-w-full" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-3 w-48 max-w-full" />
    </div>
  );
}

export function UpdateEquipmentSkeleton() {
  return (
    <div
      className="mx-auto flex w-full max-w-4xl flex-col gap-6"
      aria-busy="true"
      aria-live="polite"
    >
      {/* Page header */}
      <div className="flex flex-col gap-1.5" aria-hidden="true">
        <Skeleton className="h-7 w-44 max-w-full" />
        <Skeleton className="h-3.5 w-full max-w-sm" />
      </div>

      <form className="flex flex-col gap-8" aria-hidden="true">
        {/* 01 — Basic Information: name, category, full-width description */}
        <section className="flex flex-col gap-6 border-b pb-8">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-5 w-40 max-w-full" />
            <Skeleton className="h-3.5 w-full max-w-sm" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-28 max-w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-20 max-w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
            <TextareaFieldSkeleton className="md:col-span-2" />
          </div>
        </section>

        {/* 02 — Specifications: brand, model, condition */}
        <FormSectionSkeleton fieldRows={2} />

        {/* 03 — Rental Information: location, price, rental type, quantity */}
        <FormSectionSkeleton fieldRows={2} />

        {/* 04 — Equipment Image: file input */}
        <section className="flex flex-col gap-6 border-b pb-8" aria-hidden="true">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-5 w-36 max-w-full" />
            <Skeleton className="h-3.5 w-full max-w-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3.5 w-28 max-w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        </section>

        {/* 05 — Rental Terms: full-width textarea + hint */}
        <section className="flex flex-col gap-6 border-b pb-8" aria-hidden="true">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3 w-8" />
            <Skeleton className="h-5 w-32 max-w-full" />
            <Skeleton className="h-3.5 w-full max-w-sm" />
          </div>
          <TextareaFieldSkeleton />
        </section>

        {/* Footer: note + Cancel / Save buttons */}
        <div className="flex flex-col-reverse gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-3 w-full max-w-xs" />
          <div className="flex gap-3">
            <Skeleton className="h-9 flex-1 rounded-md sm:w-24 sm:flex-none" />
            <Skeleton className="h-9 flex-1 rounded-md sm:w-28 sm:flex-none" />
          </div>
        </div>
      </form>
    </div>
  );
}

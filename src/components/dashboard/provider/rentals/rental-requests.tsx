import { RentalTable } from "./rental-table";
import { RentalTableSkeleton } from "./rental-table-skeleton";
import { Suspense } from "react";

export function RentalRequests() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Rental Requests
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Track equipment rentals, review customer details, and monitor payment activity.
      </p>


      <div className="mt-4">
        <Suspense fallback={<RentalTableSkeleton />}>
          <RentalTable />
        </Suspense>
      </div>
    </section>
  );
}

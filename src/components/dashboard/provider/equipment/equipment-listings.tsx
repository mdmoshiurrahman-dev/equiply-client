import { PageHeader } from "./page-header";
import { Suspense } from "react";
import TableSkeleton from "../../admin/owner-application/TableSkeleton";
import TableFullBody from "./TableBody";

export function EquipmentListings() {
  return (
    <div className="space-y-8">
      <PageHeader
        breadcrumb={["Inventory Management", "Owner"]}
        title="My Listings"
        description="Manage your equipment, monitor availability, and keep your rental listings organized."
      />

      <div className="overflow-hidden rounded-xl border bg-background">
        <Suspense fallback={<TableSkeleton/>}>
          <TableFullBody/>
        </Suspense>
      </div>
    </div>
  );
}

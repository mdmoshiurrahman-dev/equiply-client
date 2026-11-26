import { Card } from "@/components/ui/card";
import { PageHeader } from "./page-header";
import { EquipmentStatsCards } from "./stats-cards";
import { FilterToolbar } from "./filter-toolbar";
import { EquipmentTable } from "./equipment-table";
import { EquipmentApplicationType } from "@/types/type";
export function EquipmentManagement({equipmentData}:{equipmentData:EquipmentApplicationType[]}) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <PageHeader
        title="All Equipment"
        description="Review, approve, and manage all equipment listings across the platform."
      />

      <EquipmentStatsCards equipmentData={equipmentData} />

      <Card className="gap-0 overflow-hidden py-0">
        <div className="border-b p-4">
          <FilterToolbar />
        </div>

        <EquipmentTable equipment={equipmentData} />

        <div className="border-t">
          {/* <TableFooter
            page={PAGE}
            pageSize={PAGE_SIZE}
            totalRecords={MOCK_EQUIPMENT.length}
          /> */}
        </div>
      </Card>
    </div>
  );
}

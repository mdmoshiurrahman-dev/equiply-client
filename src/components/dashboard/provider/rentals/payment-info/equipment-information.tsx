import { InfoCard } from "./ui/info-card";
import { InfoField } from "./ui/info-field";
import { EquipmentRentalPaymentRecord } from "@/types/type";

/** Equipment name, id, unit price and requested quantity. */
export function EquipmentInformation({
  detail,
}: {
  detail: EquipmentRentalPaymentRecord;
}) {
  return (
    <InfoCard title="Equipment Information" className="h-full">
      <dl className="mt-5 space-y-4">
        <InfoField label="Equipment Name" value={detail.productName} />
        <InfoField label="Equipment ID" value={detail.equipmentId} />
        <InfoField label="Price Per Unit" value={`$${detail.equipmentPrice}`} />
        <InfoField label="Required Quantity" value={detail.requiredQuantity} />
      </dl>
    </InfoCard>
  );
}

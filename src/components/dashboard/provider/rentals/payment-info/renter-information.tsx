import { InfoCard } from "./ui/info-card";
import { InfoField } from "./ui/info-field";
import { EquipmentRentalPaymentRecord } from "@/types/type";

/** Renter name, email and contact number. */
export function RenterInformation({
  detail,
}: {
  detail: EquipmentRentalPaymentRecord
}) {
  return (
    <InfoCard title="Renter Information" className="h-full">
      <dl className="mt-5 space-y-4">
        <InfoField label="Name" value={detail.paymentRequestName} />
        <InfoField label="Email" value={detail.paymentRequestEmail} />
        <InfoField
          label="Contact Number"
          value={detail.contactNumber}
        />
      </dl>
    </InfoCard>
  );
}

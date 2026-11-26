import { InfoCard } from "./ui/info-card";
import { InfoField } from "./ui/info-field";
import { EquipmentRentalPaymentRecord } from "@/types/type";

/** Rental schedule on the left, delivery address & notes on the right. */
export function RentalDelivery({ detail }: { detail: EquipmentRentalPaymentRecord }) {
  return (
    <InfoCard title="Rental & Delivery">
      <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
        {/* Rental schedule */}
        <div className="md:pr-6">
          <h3 className="text-base font-semibold text-foreground">
            Rental Schedule
          </h3>
          <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <InfoField label="Start Date" value={formatDate(detail.rentalStartDate)} />
            <InfoField label="End Date" value={formatDate(detail.rentalEndDate)} />
            <InfoField
              label="Rental Duration"
              value={`${detail.rentalDays} days`}
            />
          </dl>
        </div>

        {/* Delivery information */}
        <div className="border-t border-border pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <h3 className="text-base font-semibold text-foreground">
            Delivery Information
          </h3>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoField label="Delivery Address" value={detail.deliveryAddress} />
            <InfoField
              label="Additional Notes"
              value={detail.additionalNotes}
            />
          </dl>
        </div>
      </div>
    </InfoCard>
  );
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}

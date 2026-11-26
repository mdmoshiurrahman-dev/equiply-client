import { cn } from "cn";
import { InfoCard } from "./ui/info-card";
import { InfoField } from "./ui/info-field";
import { EquipmentRentalPaymentRecord } from "@/types/type";

/** Amber-tinted card with the pricing and transaction details. */
export function PaymentSummary({ detail }: { detail: EquipmentRentalPaymentRecord }) {
  return (
    <InfoCard
      title="Payment Summary"
      className="border-amber-500/40 bg-amber-400/5 dark:border-amber-400/25 dark:bg-amber-400/10"
    >
      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4">
        <InfoField
          label="Equipment Price"
          value={`$${detail.equipmentPrice}`}
        />
        <InfoField label="Quantity" value={detail.requiredQuantity} />
        <InfoField
          label="Rental Duration"
          value={`${detail.rentalDays} days`}
        />
        <InfoField label="Payment Date" value={formatDate(detail.paymentDate)} />

        <InfoField
          label="Total Amount"
          value={`$${detail.total}`}
        />
        <InfoField
          label="Payment Status"
          value={detail.payment.toUpperCase()}
          className={cn(
            detail.payment === "paid" && "text-emerald-600 dark:text-emerald-400",
          )}
        />
        <div className="hidden lg:block" />
        <InfoField label="Payment Request ID" value={detail.paymentRequestId} />
      </dl>
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

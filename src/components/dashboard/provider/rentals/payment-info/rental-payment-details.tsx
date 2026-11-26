import { RentalStatusBadge } from "../rental-status-badge";
import { EquipmentInformation } from "./equipment-information";
import { RenterInformation } from "./renter-information";
import { RentalDelivery } from "./rental-delivery";
import { PaymentSummary } from "./payment-summary";
import type { RentalPaymentDetail } from "@/types/type";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { jwtToken } from "@/lib/core/jwtToken";
import { EquipmentRentalPaymentRecord } from "@/types/type";

interface RentalPaymentDetailsProps {
  recordId: string;
}

export async function RentalPaymentDetails({
  recordId
}: RentalPaymentDetailsProps) {
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-user-payment-record/${recordId}`,
    {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
    },
  );
  const recordDetails:EquipmentRentalPaymentRecord =await res.json()
  return (
    <section className="mx-auto w-full max-w-5xl">
      {/* Header */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Rental Details
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Complete information about this rental request.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span className="tracking-wide uppercase">{recordId}</span>
        <span aria-hidden="true">·</span>
        <span>Payment Status</span>
        <RentalStatusBadge
          status={recordDetails.payment as 'paid'| 'pending'}
          className="rounded-full px-3 text-xs"
        />
      </div>

      {/* Equipment & renter */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <EquipmentInformation detail={recordDetails} />
        <RenterInformation detail={recordDetails} />
      </div>

      {/* Schedule & delivery */}
      <div className="mt-4 md:mt-6">
        <RentalDelivery detail={recordDetails} />
      </div>

      {/* Payment summary */}
      <div className="mt-4 md:mt-6">
        <PaymentSummary detail={recordDetails} />
      </div>
    </section>
  );
}

export type { RentalPaymentDetail };

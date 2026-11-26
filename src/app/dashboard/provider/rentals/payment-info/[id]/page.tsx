import { RentalPaymentDetails } from "@/components/dashboard/provider/rentals/payment-info/rental-payment-details";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RentalPaymentDetails recordId={id} />;
}

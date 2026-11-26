import type { Metadata } from "next";
import Link from "next/link";
import { X } from "lucide-react";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { EquipmentRentalPaymentRecord } from "@/types/type";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Payment Cancelled — Equiply",
  description:
    "Your payment was not completed. No payment has been processed for this booking.",
};

export default async function PaymentCancelPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const queryString = new URLSearchParams(params as Record<string, string>)
    .toString()
    .split("=")[1];
    if(!params){
      notFound()
    }
  const session = await loadUserSessionFromServerComponent();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-payment-record/${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${session?.session.token}`,
      },
    },
  );
  if(!res){
    redirect('/')
  }
  const record: EquipmentRentalPaymentRecord = await res.json();

  const bookingDetails = [
    { label: "Equipment name", value: record.productName },
    { label: "Rental start date", value: record.rentalStartDate },
    { label: "Rental end date", value: record.rentalEndDate },
    { label: "Booking status", value: record.payment },
  ];

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#f7f3ec] px-3 py-6 dark:bg-background sm:px-4 sm:py-16">
      <div className="w-full max-w-md animate-fade-up rounded-xl border border-border bg-card p-5 shadow-sm sm:p-10">
        {/* Cancelled icon */}
        <div className="flex justify-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-muted sm:size-14">
            <X className="size-6 text-muted-foreground sm:size-7" strokeWidth={2.5} />
          </span>
        </div>

        <h1 className="mt-5 text-center text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Payment Cancelled
        </h1>
        <p className="mt-3 text-center text-base text-muted-foreground">
          Your payment was not completed. No payment has been processed for this
          booking.
        </p>

        {/* Booking summary */}
        <dl className="mt-8 grid gap-x-6 gap-y-3 rounded-lg border border-border p-4 sm:grid-cols-[10.5rem_1fr] sm:gap-x-8 sm:gap-y-2.5 sm:p-5">
          {bookingDetails.map(({ label, value }) => (
            <div key={label} className="grid gap-0.5 sm:contents">
              <dt className="text-sm text-foreground">{label}</dt>
              <dd className="break-words text-sm text-foreground/90">{value}</dd>
            </div>
          ))}
        </dl>

        {/* Actions */}
        <div className="mt-8">
          <Link
            href="/payment/success"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-green-900 text-base font-medium text-white transition-colors hover:bg-green-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900 dark:bg-green-800 dark:hover:bg-green-700 dark:focus-visible:outline-green-800"
          >
            Try Again
          </Link>
          <div className="mt-5 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-green-900 underline-offset-4 transition-colors hover:text-green-950 hover:underline dark:text-green-400 dark:hover:text-green-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

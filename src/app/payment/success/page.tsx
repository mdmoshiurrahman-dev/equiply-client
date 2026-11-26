import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { EquipmentRentalPaymentRecord } from "@/types/type";
import { DownloadPdfButton } from "./download-pdf-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
// bookingId
export const metadata: Metadata = {
  title: "Booking Confirmed — Equiply",
  description:
    "Your payment was successful and your equipment rental is confirmed.",
};

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const queryString = new URLSearchParams(params as Record<string, string>)
    .toString()
    .split("=")[1];
  const session = await loadUserSessionFromServerComponent();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-payment-record/${queryString}`,
    {
      headers: {
        Authorization: `Bearer ${session?.session.token}`,
      },
    },
  );
  const record: EquipmentRentalPaymentRecord = await res.json();

  const bookingDetails = [
    { label: "Name", value: record.paymentRequestName },
    { label: "Email", value: record.paymentRequestEmail },
    { label: "Booking ID", value: record._id },
    { label: "Equipment", value: record.productName },
    { label: "Rental Start Date", value: record.rentalStartDate },
    { label: "Rental End Date", value: record.rentalEndDate },
    { label: "Total Amount Paid", value: `$${record.total}` },
    { label: "Payment Status", value: record.payment },
  ];
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f3ec] px-4 py-10 dark:bg-background sm:py-16 print:min-h-0 print:bg-white print:p-0">
      <div className="w-full max-w-xl animate-fade-up rounded-xl border border-border bg-card p-5 shadow-sm sm:p-10 print:max-w-none print:animate-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        {/* Success icon */}
        <div className="flex justify-center print:hidden">
          <span className="flex size-12 items-center justify-center rounded-full bg-green-900 dark:bg-green-800">
            <Check className="size-6 text-white" strokeWidth={3} />
          </span>
        </div>

        <h1 className="mt-4 text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Booking Confirmed!
        </h1>
        <p className="mt-3 text-center text-base text-muted-foreground">
          Your payment was successful. Your equipment rental is confirmed.
        </p>

        {/* Booking summary */}
        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <Table className="table-fixed">
            <TableBody>
              {bookingDetails.map(({ label, value }) => (
                <TableRow key={label}>
                  <TableHead
                    scope="row"
                    className="w-2/5 whitespace-normal px-3 py-3 text-sm font-semibold text-foreground sm:px-5"
                  >
                    {label}
                  </TableHead>
                  <TableCell className="break-words whitespace-normal px-3 py-3 text-sm text-foreground/90 sm:px-5">
                    {value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Actions */}
        <div className="mt-8 print:hidden">
          <Link
            href="/dashboard/renter"
            className="flex h-12 w-full items-center justify-center rounded-lg bg-green-900 text-base font-medium text-white transition-colors hover:bg-green-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900 dark:bg-green-800 dark:hover:bg-green-700 dark:focus-visible:outline-green-800"
          >
            View My Rentals
          </Link>
          <div className="mt-5 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <Link
              href="/equipment"
              className="text-sm text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground sm:mr-auto"
            >
              Continue Shopping
            </Link>
            <DownloadPdfButton />
          </div>
        </div>
      </div>
    </main>
  );
}

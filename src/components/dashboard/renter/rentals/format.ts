import type { BookingStatus, PaymentStatus } from "@/types/type";

const statusLabels: Record<PaymentStatus | BookingStatus, string> = {
  paid: "Paid",
  pending: "Pending",
  approved: "Approved",
  completed: "Completed",
};

export function formatStatus(status: PaymentStatus | BookingStatus): string {
  return statusLabels[status];
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatAmount(amount: number): string {
  return `৳${amount.toLocaleString("en-US")}`;
}

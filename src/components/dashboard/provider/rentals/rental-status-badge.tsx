import { cn } from "cn";
import type { RentalStatus } from "@/types/type";

const statusConfig: Record<RentalStatus, { label: string; className: string }> = {
  paid: {
    label: "Paid",
    className: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300",
  },
  pending: {
    label: "Failed",
    className: "bg-rose-100/80 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  },
};

interface RentalStatusBadgeProps {
  status: RentalStatus;
  className?: string;
}

export function RentalStatusBadge({ status, className }: RentalStatusBadgeProps) {
  const { label, className: statusClassName } = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium",
        statusClassName,
        className
      )}
    >
      {label}
    </span>
  );
}

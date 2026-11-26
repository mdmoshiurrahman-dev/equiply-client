import type { LucideIcon } from "lucide-react";
import { ClipboardList, CircleCheck, Wallet, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { EquipmentRentalPaymentRecord } from "@/types/type";
const ICON_MAP: Record<string, { icon: LucideIcon; className: string }> = {
  clipboard: {
    icon: ClipboardList,
    className:
      "bg-slate-100 text-slate-600 dark:bg-slate-500/15 dark:text-slate-400",
  },
  clock: {
    icon: X,
    className: "bg-sky-100 text-sky-600 dark:bg-red-500/15 dark:text-sky-400",
  },
  check: {
    icon: CircleCheck,
    className:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  },
  wallet: {
    icon: Wallet,
    className:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
  },
};

export function formatBDT(amount: number): string {
  return `$${amount.toLocaleString("en-IN")}`;
}

export function RentalStatsCards({
  allRecord,
}: {
  allRecord: EquipmentRentalPaymentRecord[];
}) {
  const failed = allRecord.filter((i) => i.payment === "pending").length;
  const total = allRecord.reduce((sum, record) => (sum += record.total), 0);
  const RENTAL_STATS = [
    { label: "Total Bookings", value: allRecord.length, icon: "clipboard" },
    { label: "Failed", value: failed, icon: "clock" },
    {
      label: "Completed Rentals",
      value: allRecord.length - failed,
      icon: "check",
    },
    { label: "Total Revenue", value: total, icon: "wallet" },
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {RENTAL_STATS.map((stat) => {
        const { icon: Icon, className } = ICON_MAP[stat.icon];

        return (
          <Card
            key={stat.label}
            className="flex-row items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5"
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-lg sm:size-11 ${className}`}
            >
              <Icon className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-xl font-bold tracking-tight sm:text-2xl">
                {stat.label === "Total Revenue"
                  ? formatBDT(stat.value)
                  : stat.value}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

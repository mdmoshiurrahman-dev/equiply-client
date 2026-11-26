import { Badge } from "@/components/ui/badge";
import type { EquipmentStatus } from "@/types/type";

const STATUS_CONFIG: Record<
  EquipmentStatus,
  { label: string; className: string }
> = {
  pending: {
    label: "Pending",
    className:
      "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-400",
  },
  approve: {
    label: "Approved",
    className:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400",
  },
  reject: {
    label: "Rejected",
    className:
      "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-400",
  },
};

interface StatusBadgeProps {
  status: EquipmentStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <Badge
      variant="secondary"
      className={`border-transparent ${config?.className}`}
    >
      {config?.label}
    </Badge>
  );
}

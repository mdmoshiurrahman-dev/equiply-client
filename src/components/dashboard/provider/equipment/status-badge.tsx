import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { EquipmentStatus } from "@/types/type"

const statusStyles: Record<EquipmentStatus, string> = {
  approve: "bg-primary text-primary-foreground hover:bg-primary/80",
  pending: "bg-muted text-muted-foreground dark:bg-muted/60 dark:text-muted-foreground",
  reject: "border-border bg-background text-foreground",
}

interface StatusBadgeProps {
  status: EquipmentStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      variant={status === "reject" ? "outline" : "default"}
      className={cn("h-7 capitalize rounded-4xl px-3 text-xs", statusStyles[status])}
    >
      {status}
    </Badge>
  )
}

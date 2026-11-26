import type { LucideIcon } from "lucide-react";
import { CircleAlert, ListChecks, ShieldCheck, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { EquipmentApplicationType } from "@/types/type";

interface StatCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
}

function StatCard({ label, value, icon: Icon }: StatCardProps) {
  return (
    <Card className="flex-row items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border sm:size-11">
        <Icon className="size-5 text-muted-foreground" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm text-muted-foreground">{label}</p>
        <p className="text-xl font-bold tracking-tight sm:text-2xl">{value}</p>
      </div>
    </Card>
  );
}

interface EquipmentStatsProps {
  equipmentData: EquipmentApplicationType[];
}

export function EquipmentStatsCards({ equipmentData }: EquipmentStatsProps) {
  const approveApplication = equipmentData.filter(
    (i) => i.status === "approve",
  ).length;
  const pending = equipmentData.filter(i=> i.status === 'pending').length;
  const total = equipmentData.length
  const rejected = total - (approveApplication + pending);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total" value={total} icon={ListChecks} />
      <StatCard
        label="Pending Approval"
        value={pending}
        icon={CircleAlert}
      />
      <StatCard
        label="Approved Equipment"
        value={approveApplication}
        icon={ShieldCheck}
      />
            <StatCard
        label="Rejected"
        value={rejected}
        icon={X}
      />
    </div>
  );
}

import type { ComponentType } from "react";

type StatCardProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: number;
};

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-card px-5 py-4 text-card-foreground ring-1 ring-foreground/10">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
        <Icon className="size-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm">{label}</span>
        <span className="text-2xl font-bold tabular-nums">{value}</span>
      </div>
    </div>
  );
}

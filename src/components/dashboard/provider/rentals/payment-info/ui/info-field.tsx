import { cn } from "cn";

interface InfoFieldProps {
  label: string;
  value: string | number;
  /** Accent styling for special values, e.g. green "PAID" status. */
  className?: string;
}

/** Muted label above a medium-weight value — the standard detail pair. */
export function InfoField({ label, value, className }: InfoFieldProps) {
  return (
    <div>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className={cn("mt-1 text-base font-medium text-foreground", className)}>
        {value}
      </dd>
    </div>
  );
}

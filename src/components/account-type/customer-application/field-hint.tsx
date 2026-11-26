import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FieldHintProps {
  /** Lucide icon rendered before the text. */
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

/**
 * Small icon + note pair rendered under a field.
 * Pass `inline` styling off by adding classes through `className`.
 */
export function FieldHint({ icon: Icon, children, className }: FieldHintProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-1.5 text-xs text-muted-foreground",
        className
      )}
    >
      <Icon className="size-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

interface FieldBannerProps {
  /** Lucide icon rendered before the text. */
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

/**
 * Full-width muted note pill rendered under a field (e.g. privacy notice).
 */
export function FieldBanner({
  icon: Icon,
  children,
  className,
}: FieldBannerProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 rounded-lg bg-muted px-3 py-2.5 text-xs text-muted-foreground",
        className
      )}
    >
      <Icon className="size-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

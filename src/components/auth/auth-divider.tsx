import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
export function AuthDivider({
  label = "Or continue with",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-4", className)}
      role="separator"
      aria-label={label}
    >
      <Separator className="flex-1" />
      <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
      <Separator className="flex-1" />
    </div>
  );
}

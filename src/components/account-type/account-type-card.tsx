import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AccountTypeCardProps {
  title: string;
  /** Lucide icon rendered below the title. */
  icon: LucideIcon;
  /** Label of the full-width call-to-action button. */
  buttonLabel: string;
  className?: string;
  href: string;
}

/**
 * Presentational card for the account-type selection screen:
 * centered title, muted icon, and a full-width primary CTA button.
 */
export function AccountTypeCard({
  title,
  icon: Icon,
  buttonLabel,
  className,
  href,
}: AccountTypeCardProps) {
  return (
    <Card className={cn("items-center gap-5 px-6 py-8 text-center", className)}>
      <CardContent className="flex flex-col items-center gap-5 px-0">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <Icon
          className="size-8 text-muted-foreground"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <Link href={href}>
          <Button size="lg" className="h-11 w-full font-semibold">
            {buttonLabel}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

import Link from "next/link";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Override the default link target (e.g. "/"). */
  href?: string;
  /** Extra classes for layout tweaks from the parent (e.g. spacing in the navbar). */
  className?: string;
}

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Equiply — home"
      className={cn(
        "inline-flex items-center gap-2 text-xl font-bold tracking-tight text-foreground sm:gap-2.5 sm:text-2xl",
        className
      )}
    >
      <Wrench
        className="size-6 sm:size-7"
        strokeWidth={2.5}
        aria-hidden="true"
      />
      Equiply
    </Link>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  /** Marks the link as the current page (darker text, like "Home" in the design). */
  active?: boolean;
  className?: string;
}

export function NavLink({ href, label, active = false, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex items-center text-sm font-medium",
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        className
      )}
    >
      {label}
    </Link>
  );
}

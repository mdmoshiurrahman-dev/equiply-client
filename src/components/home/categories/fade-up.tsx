import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeUpProps extends ComponentPropsWithoutRef<"div"> {
  /** Stagger delay in milliseconds before the reveal starts. */
  delay?: number;
  children: ReactNode;
}

/**
 * Wraps content in the shared fade-up entrance animation.
 * Combine sibling `FadeUp`s with increasing `delay` values for a staggered reveal.
 */
export function FadeUp({
  children,
  delay = 0,
  className,
  style,
  ...rest
}: FadeUpProps) {
  return (
    <div
      className={cn("animate-fade-up", className)}
      style={{ animationDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormSectionProps {
  title: string;
  /** Short muted explanation shown under the title. */
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Titled block used to group related fields inside the application form.
 * Sections are stacked and visually separated by the parent form.
 */
export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <section className={cn("flex flex-col gap-5", className)}>
      <header className="flex flex-col gap-1">
        <h2 className="text-base font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

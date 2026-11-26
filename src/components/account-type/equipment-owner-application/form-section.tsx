import type { ReactNode } from "react";
import { cn } from "cn";

interface FormSectionProps {
  /** 1-based position of the section inside the form. */
  step: number;
  title: string;
  /** Short muted explanation shown under the title. */
  description?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Numbered block used to group related fields inside a form.
 * The numbering is derived from `step`, so sections can be reordered freely.
 */
export function FormSection({
  step,
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <header className="flex flex-col gap-1">
        <h2 className="flex items-center gap-2 text-base font-semibold tracking-tight">
          <span className="text-muted-foreground">{step}.</span>
          {title}
        </h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

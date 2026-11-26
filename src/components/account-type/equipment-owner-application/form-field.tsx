import type { ReactNode } from "react";
import { cn } from "cn";

interface FormFieldProps {
  /** Label of the control. */
  label: string;
  /** Marks the control as mandatory and renders a red asterisk. */
  required?: boolean;
  /** Optional helper text rendered under the control. */
  hint?: string;
  /** `id` of the control, used to link the label with it. */
  htmlFor: string;
  children: ReactNode;
  className?: string;
}

/**
 * Thin wrapper that keeps label, required marker and hint consistent
 * for every field of the form.
 */
export function FormField({
  label,
  required = false,
  hint,
  htmlFor,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

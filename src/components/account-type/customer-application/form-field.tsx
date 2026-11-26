import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  /** Label of the control. */
  label: string;
  /** Marks the control as mandatory and renders an asterisk. */
  required?: boolean;
  /** Optional note rendered under the control (text, icon hint or banner). */
  hint?: ReactNode;
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
          <span className="text-foreground" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <div className="flex flex-col gap-1">{hint}</div> : null}
    </div>
  );
}

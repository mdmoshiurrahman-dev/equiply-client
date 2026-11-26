import * as React from "react";
import { cn } from "cn";
import { Label } from "@/components/ui/label";

type UpdateFormFieldProps = React.ComponentProps<"div"> & {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
};

export function UpdateFormField({
  label,
  htmlFor,
  required = false,
  hint,
  className,
  children,
  ...props
}: UpdateFormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <Label htmlFor={htmlFor}>
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            *
          </span>
        ) : null}
      </Label>
      {children}
      {hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

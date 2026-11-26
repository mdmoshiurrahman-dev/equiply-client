import * as React from "react";
import { cn } from "cn";

type FormSectionProps = React.ComponentProps<"section"> & {
  step: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function FormSection({
  step,
  title,
  description,
  className,
  children,
  ...props
}: FormSectionProps) {
  return (
    <section
      className={cn("flex flex-col gap-6 border-b pb-8 last:border-b-0", className)}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          {step}
        </p>
        <h2 className="font-heading text-lg font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

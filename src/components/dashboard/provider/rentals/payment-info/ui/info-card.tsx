import { cn } from "cn";

interface InfoCardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

/** Bordered card container used for each section of the rental details page. */
export function InfoCard({ title, className, children }: InfoCardProps) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card p-5 sm:p-6",
        className,
      )}
    >
      {title ? (
        <h2 className="text-lg font-semibold text-foreground sm:text-xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

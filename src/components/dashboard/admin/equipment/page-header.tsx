import { PackageSearch } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background sm:size-12">
        <PackageSearch className="size-5 text-foreground sm:size-6" />
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

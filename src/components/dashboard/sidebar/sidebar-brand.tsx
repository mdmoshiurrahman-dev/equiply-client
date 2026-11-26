import { cn } from "@/lib/utils";

function EquiplyMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="size-8 shrink-0 text-sidebar-foreground/55"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h7v26H4zM11 7h24l7 18M11 12h6M14 31h21M17 36h17" />
      <path d="m18 12-6 11 6 10h14l6-10-6-11z" />
      <circle cx="16" cy="40" r="2.5" />
      <circle cx="35" cy="40" r="2.5" />
      <circle cx="42" cy="26" r="2.5" />
      <circle cx="34" cy="7" r="2" />
    </svg>
  );
}

export function SidebarBrand({
  panelLabel,
  className,
}: {
  panelLabel: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <EquiplyMark />
      <div className="flex min-w-0 flex-col leading-none">
        <span className="text-[20px] font-bold tracking-tight text-sidebar-foreground">
          Equiply
        </span>
        <span className="mt-2 text-xs font-medium tracking-wide text-sidebar-foreground/55 uppercase">
          {panelLabel}
        </span>
      </div>
    </div>
  );
}

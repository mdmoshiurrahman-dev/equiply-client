import { Input } from "@/components/ui/input";
import { cn } from "cn";
import { ROLE_FILTER_OPTIONS } from "./data/users";
import type { RoleFilterOption } from "@/types/type";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";

const ACTIVE_ROLE_FILTER: RoleFilterOption = "All Roles";

export function UserFilters() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start">
      <div className="relative w-full shrink-0 md:w-72">
        <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by name or email..."
          className="h-9 pr-8 pl-8"
          aria-label="Search by name or email"
        />
        <SlidersHorizontalIcon className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium">Role Filter</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {ROLE_FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              className={cn(
                "text-sm transition-colors",
                option === ACTIVE_ROLE_FILTER
                  ? "font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

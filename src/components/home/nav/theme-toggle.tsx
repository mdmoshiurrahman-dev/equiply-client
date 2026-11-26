"use client";

import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Select color theme"
        className={cn(
          "inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-foreground outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50",
          className,
        )}
      >
        {/* Icon reflects the active theme via the `dark` class on <html> */}
        <Sun className="size-[18px] dark:hidden" aria-hidden="true" />
        <Moon className="hidden size-[18px] dark:block" aria-hidden="true" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-32">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setTheme(option.value)}
            className="gap-2.5 pr-1.5"
          >
            <option.icon aria-hidden="true" />
            {option.label}
            <Check
              className={cn(
                "ml-auto transition-opacity duration-150",
                theme === option.value ? "opacity-100" : "opacity-0",
              )}
              aria-hidden="true"
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

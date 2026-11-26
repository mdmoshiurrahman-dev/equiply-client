"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PAGINATION_PAGES } from "./data";

interface EquipmentPaginationProps {
  pages?: readonly number[];
  activePage?: number;
}

export function EquipmentPagination({
  pages = PAGINATION_PAGES,
  activePage = 1,
}: EquipmentPaginationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.25 }}
      aria-label="Equipment pagination"
      className="flex items-center justify-center pt-1"
    >
      <div className="inline-flex items-center overflow-hidden rounded-lg border border-border bg-card shadow-2xs">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 rounded-none border-r border-border px-3.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          Previous
        </Button>

        {pages.map((page) => {
          const isActive = page === activePage;
          return (
            <Button
              key={page}
              type="button"
              variant={isActive ? "default" : "ghost"}
              size="sm"
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "h-9 min-w-9 rounded-none border-r border-border px-3 text-xs font-semibold",
                !isActive &&
                  "text-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {page}
            </Button>
          );
        })}

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 rounded-none px-3.5 text-xs font-medium text-foreground hover:bg-muted"
        >
          Next
        </Button>
      </div>
    </motion.nav>
  );
}

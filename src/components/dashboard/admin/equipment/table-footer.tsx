import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TableFooterProps {
  /** 1-based active page (display only). */
  page: number;
  pageSize: number;
  totalRecords: number;
  /** Number of page buttons shown on each side of the active page. */
  siblingCount?: number;
}

/** Builds the page list with "…" separators, e.g. [1, 2, 3, "…", 13]. */
function getPageList(
  totalPages: number,
  page: number,
  siblingCount: number,
): (number | "ellipsis")[] {
  // Fixed window: first page, last page, active page ± siblingCount.
  const min = Math.max(2, page - siblingCount);
  const max = Math.min(totalPages - 1, page + siblingCount);

  const pages: (number | "ellipsis")[] = [1];
  if (min > 2) pages.push("ellipsis");

  for (let p = min; p <= max; p++) {
    if (p !== 1 && p !== totalPages) pages.push(p);
  }

  if (max < totalPages - 1) pages.push("ellipsis");
  if (totalPages > 1) pages.push(totalPages);

  return pages;
}

export function TableFooter({
  page,
  pageSize,
  totalRecords,
  siblingCount = 1,
}: TableFooterProps) {
  const totalPages = Math.max(1, Math.ceil(totalRecords / pageSize));
  const start = totalRecords === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalRecords);

  return (
    <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        Showing {start}–{end} of {totalRecords.toLocaleString()} records
      </p>

      <nav aria-label="Equipment pagination" className="flex items-center gap-1">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={page <= 1}
          aria-label="Go to previous page"
        >
          <ChevronLeftIcon className="text-muted-foreground" />
          Previous
        </Button>

        {getPageList(totalPages, page, siblingCount).map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="px-1 text-sm text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <Button
              key={item}
              type="button"
              variant={item === page ? "default" : "ghost"}
              size="icon-sm"
              aria-label={`Go to page ${item}`}
              aria-current={item === page ? "page" : undefined}
            >
              {item}
            </Button>
          ),
        )}

        <Button
          type="button"
          variant="ghost"
          size="sm"
          disabled={page >= totalPages}
          aria-label="Go to next page"
        >
          Next
          <ChevronRightIcon className="text-muted-foreground" />
        </Button>
      </nav>
    </div>
  );
}

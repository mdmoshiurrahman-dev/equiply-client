import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ACTIVE_PAGE,

  PAGINATION_PAGES,

} from "./moc/constants";

function Pagination() {
  return (
    <nav
      aria-label="Applications pagination"
      className="flex items-center gap-1"
    >
      <Button type="button" variant="ghost" size="sm" disabled>
        Previous
      </Button>

      {PAGINATION_PAGES.map((page) =>
        page === "ellipsis" ? (
          <span
            key="ellipsis"
            aria-hidden="true"
            className="px-1 text-sm text-muted-foreground"
          >
            ...
          </span>
        ) : (
          <Button
            key={page}
            type="button"
            variant={page === ACTIVE_PAGE ? "default" : "ghost"}
            size="icon-sm"
            aria-label={`Go to page ${page}`}
            aria-current={page === ACTIVE_PAGE ? "page" : undefined}
          >
            {page}
          </Button>
        ),
      )}

      <Button type="button" variant="ghost" size="sm">
        Next
        <ChevronRightIcon className="text-muted-foreground" />
      </Button>
    </nav>
  );
}

export function TableFooter() {
  return (
    <div className="px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <Pagination />
    </div>
  );
}

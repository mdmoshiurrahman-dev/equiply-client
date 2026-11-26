import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function UsersTablePagination() {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <p className="text-sm text-muted-foreground">
        Showing 1 - 12 of 148 users
      </p>
      <div className="flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
        >
          <ChevronLeftIcon />
          Previous
        </Button>
        <Button size="icon-sm" aria-label="Page 1" aria-current="page">
          1
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
        >
          Next
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}

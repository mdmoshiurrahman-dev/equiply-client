import { Card } from "@/components/ui/card";
import { PageHeader } from "./page-header";

import Applications from "./applications";

export function OwnerApplications() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <PageHeader
        title="Owner Applications"
        description="Review and manage customer requests to become equipment owners."
      />
      {/* <FilterToolbar /> */}
      <Card className="gap-0 scrollbar-thin overflow-hidden py-0">
        <Applications />
        <div className="border-t">
          {/* <TableFooter /> */}
        </div>
      </Card>
    </div>
  );
}

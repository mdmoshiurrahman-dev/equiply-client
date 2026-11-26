import { FileText } from "lucide-react";

export default function NoApplications() {
  return (
    <div className="flex min-h-95 w-full flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-5 flex size-16 items-center justify-center rounded-2xl border bg-muted/50 shadow-sm">
        <FileText className="size-7 text-muted-foreground" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">
        No applications yet
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        There are currently no business applications to review. New applications
        will appear here once submitted.
      </p>
    </div>
  );
}

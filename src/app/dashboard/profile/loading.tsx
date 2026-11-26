import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileLoading() {
  return (
    <div className="mx-auto w-full max-w-5xl animate-in fade-in duration-300">
      {/* Header */}
      <Skeleton className="mt-1 h-8 w-52 sm:h-10 sm:w-64" />
      <Skeleton className="mt-2 h-4 w-72 sm:w-96" />

      {/* Profile banner */}
      <div className="mt-8 flex flex-col gap-6 rounded-xl bg-foreground p-6 sm:flex-row sm:items-center">
        <Skeleton className="size-20 shrink-0 rounded-full bg-muted-foreground/20" />
        <div className="min-w-0 space-y-2.5">
          <Skeleton className="h-6 w-44 bg-muted-foreground/20 sm:h-7 sm:w-56" />
          <Skeleton className="h-4 w-32 bg-muted-foreground/20" />
        </div>
      </div>

      {/* Personal Information */}
      <section className="mt-10">
        <Skeleton className="h-6 w-48 pb-3 sm:w-56" />
        <div className="grid gap-x-16 md:grid-cols-2">
          {/* Full Name */}
          <div className="border-b border-border py-4">
            <Skeleton className="mb-2 h-4 w-20" />
            <Skeleton className="h-5 w-full max-w-xs" />
          </div>
          {/* Email Address */}
          <div className="border-b border-border py-4">
            <Skeleton className="mb-2 h-4 w-24" />
            <Skeleton className="h-5 w-full max-w-xs" />
          </div>
          {/* Phone Number */}
          <div className="border-b border-border py-4">
            <Skeleton className="mb-2 h-4 w-28" />
            <Skeleton className="h-5 w-full max-w-xs" />
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="mt-10">
        <Skeleton className="h-6 w-52 pb-3 sm:w-60" />
        <div>
          {/* Business Address */}
          <div className="border-b border-border py-4">
            <Skeleton className="mb-2 h-4 w-32" />
            <Skeleton className="h-5 w-full max-w-sm" />
          </div>
          {/* NID */}
          <div className="border-b border-border py-4">
            <Skeleton className="mb-2 h-4 w-12" />
            <Skeleton className="h-5 w-full max-w-sm" />
          </div>
        </div>
      </section>

      {/* Save button */}
      <Skeleton className="mt-10 h-11 w-32 rounded-xl" />
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import { UserApplication } from "@/types/type";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

export function ActionButtons({
  application,
}: {
  application: UserApplication;
}) {
  const router = useRouter();
  const session = useSession();
  const baseApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handelUserApplication = async (
    request: "provider" | "dismissRequest",
  ) => {
    const res = await fetch(`${baseApiUrl}/set-user-role/${request}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${session?.data?.session.token}`,
      },
      body: JSON.stringify({ applicantId: application._id }),
    });
    const result = await res.json();
    if (result.status) {
      router.refresh();
      toast.add({
        type: "success",
        description: result.message,
      });
    } else {
      toast.add({
        type: "success",
        description: result.message,
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-end items-center gap-1.5">
      {/* <Link href={""}>
        <Button type="button" variant="outline" size="sm">
          <EyeIcon />
          View Details
        </Button>
      </Link> */}
      <Button
        onClick={() => handelUserApplication("provider")}
        type="button"
        variant="outline"
        size="sm"
        className="border-emerald-500/40 bg-emerald-500/10 px-2.5 text-emerald-700 hover:bg-emerald-500/20 hover:text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-400 dark:hover:bg-emerald-500/25 dark:hover:text-emerald-300"
        aria-label={`Accept application from ${application.name}`}
      >
        <CheckIcon />
        Accept
      </Button>
      <Button
        onClick={() => handelUserApplication("dismissRequest")}
        type="button"
        variant="outline"
        size="sm"
        className="border-red-500/40 bg-red-500/10 px-2.5 text-red-700 hover:bg-red-500/20 hover:text-red-700 dark:border-red-500/30 dark:bg-red-500/15 dark:text-red-400 dark:hover:bg-red-500/25 dark:hover:text-red-300"
        aria-label={`Reject application from ${application.name}`}
      >
        <XIcon />
        Reject
      </Button>
    </div>
  );
}

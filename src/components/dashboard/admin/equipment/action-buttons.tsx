"use client";
import { Button } from "@/components/ui/button";
import { EquipmentApplicationType } from "@/types/type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleEllipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { jwtTokenClient } from "@/lib/core/jwtTokenClient";

export function EquipmentActions({ item }: { item: EquipmentApplicationType }) {
  const router = useRouter();
  const handelUpdate = () => {
    router.push(`/dashboard/update/${item._id}`);
  };

  const handelDetailsRoute = () => {
    router.push(`/dashboard/equipment-info/${item._id}`);
  };
  const session = useSession();
  const handelDelete = async () => {
    const jwt = await jwtTokenClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete/equipment/${item._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.data?.session.token}`,
          "jwt-token": `Bearer ${jwt}`,
        },
      },
    );
    const result = await res.json();
    if (result.deletedCount > 0) {
      toast.add({
        type: "success",
        description: "Equipment deleted successfully",
      });
      router.refresh();
    } else {
      toast.add({
        type: "error",
        description: "Failed to delete equipment",
      });
    }
  };

  const adminAction = async (action: "approve" | "reject") => {
    const jwt = await jwtTokenClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/application-action/${action}/${item._id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${session.data?.session.token}`,
          "jwt-token": `Bearer ${jwt}`,
        },
      },
    );
    const result = await res.json();
    if (result.modifiedCount > 0) {
      toast.add({
        type: "success",
        description: `Equipment ${action}d successfully`,
      });
      router.refresh();
    } else {
      toast.add({
        type: "error",
        description: `Failed to ${action} equipment`,
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline">
            <CircleEllipsis />
          </Button>
        }
      />
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            onClick={() => adminAction("approve")}
            type="button"
            size="sm"
            className={
              "border-emerald-300 w-full bg-emerald-300/10 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-500/40 dark:text-emerald-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
            }
            aria-label="Approve"
          >
            Approve
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() => adminAction("reject")}
            type="button"
            size="sm"
            className={
              "border-red-300 w-full bg-red-600/10 text-red-700 hover:bg-red-50 hover:text-red-800 dark:border-red-500/40 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300"
            }
            aria-label="Reject"
          >
            Reject
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={handelUpdate}
            type="button"
            size="sm"
            variant={"secondary"}
            className={"w-full"}
            aria-label="update"
          >
            Update
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={handelDetailsRoute}
            type="button"
            size="sm"
            variant={"outline"}
            className={"w-full"}
            aria-label="details"
          >
            Details
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Button
            onClick={handelDelete}
            type="button"
            variant="outline"
            size="sm"
            className="text-destructive w-full hover:text-destructive"
            aria-label={`Delete`}
          >
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

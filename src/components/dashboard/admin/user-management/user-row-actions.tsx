"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/toast";
import { useSession } from "@/lib/auth-client";
import { UserData } from "@/types/type";
import { EllipsisVerticalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
//
export function UserRowActions({ user }: { user: UserData }) {
  const route = useRouter();
  const session = useSession();
  const handelAdminAction = async (
    action: "delete" | "admin" | "renter" | "provider",
  ) => {
    // if (user._id.toString() !== session.data?.user.id.toString()) {
    //   return toast.add({
    //     type: "error",
    //     description: "Something is wrong",
    //   });
    // }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin-action-user/${user._id}/${action}`,
      {
        headers: {
          Authorization: `Bearer ${session?.data?.session.token}`,
        },
      },
    );
    const result = await res.json();
    if (result.deletedCount > 0) {
      toast.add({
        type: "success",
        description: "Delete Successful",
      });
      route.refresh();
    } else {
      toast.add({
        type: "error",
        description: "Something is wrong",
      });
    }
    if (result.modifiedCount) {
      toast.add({
        type: "success",
        description: "Role Change Success",
      });
      route.refresh();
    } else {
      toast.add({
        type: "error",
        description: "Something is wrong",
      });
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Open user actions"
          >
            <EllipsisVerticalIcon className="text-muted-foreground" />
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem>
          <Button
            onClick={() => handelAdminAction("delete")}
            variant={"destructive"}
            className={"w-full"}
          >
            Delete
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() => handelAdminAction("admin")}
            variant={"outline"}
            className={"w-full"}
          >
            Set Admin
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() => handelAdminAction("renter")}
            variant={"outline"}
            className={"w-full"}
          >
            Set Renter
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            onClick={() => handelAdminAction("provider")}
            variant={"outline"}
            className={"w-full"}
          >
            Set Provider
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

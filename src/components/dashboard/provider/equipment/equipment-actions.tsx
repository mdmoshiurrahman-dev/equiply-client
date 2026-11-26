"use client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useSession } from "@/lib/auth-client";
import { EquipmentApplicationType } from "@/types/type";
import Link from "next/link";

import { useRouter } from "next/navigation";

/** Row action buttons: Update / Delete / View Details — pure UI. */
export function EquipmentActions({ item }: { item: EquipmentApplicationType }) {
  const router = useRouter();
  const handelUpdate = () => {
    router.push(`/dashboard/update/${item._id}`);
  };
  const session = useSession();
  const handelDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete-equipment/${item._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${session.data?.session.token}`,
        },
      },
    );
    const result = await res.json();
    if (result.deletedCount) {
      toast.add({
        type: "success",
        description: "Delete successfully",
      });
      router.refresh();
    } else {
      toast.add({
        type: "error",
        description: "Something is wrong",
      });
    }
  };

  return (
    <div className="flex items-center justify-end gap-1.5 sm:gap-2">
      <Button onClick={handelUpdate} type="button" variant="outline" size="sm">
        Update
      </Button>
      <Button
        onClick={handelDelete}
        type="button"
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-destructive"
      >
        Delete
      </Button>
      <Link href={`/dashboard/equipment-info/${item._id}`}>
        <Button type="button" size="sm">
          View Details
        </Button>
      </Link>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { EllipsisVerticalIcon, EyeIcon, Trash2Icon } from "lucide-react";

import { cn } from "cn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/toast";
import { TableCell, TableRow } from "@/components/ui/table";
import type { EquipmentApplicationType } from "@/types/type";
import { useSession } from "@/lib/auth-client";

export function FavoritesTableRow({
  favorite,
}: {
  favorite: EquipmentApplicationType;
}) {
  const router = useRouter();
  const session = useSession();
  const removeFavorite = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete-fev-item/${favorite._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session.data?.session.token}`,
        },
      },
    );
    const result = await res.json();
    if (result.deletedCount > 0) {
      toast.add({
        type: "success",
        description: "Delete form favorite successful",
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
    <TableRow>
      <TableCell className="px-4 py-3.5 font-semibold first:pl-6">
        {favorite.equipmentName}
      </TableCell>
      <TableCell className="px-4 py-3.5">
        {favorite.equipmentCategory}
      </TableCell>
      <TableCell className="px-4 py-3.5">
        <span className="font-semibold">${favorite.equipmentPrice}</span>
      </TableCell>
      <TableCell className="px-4 py-3.5">{favorite.rentalType}</TableCell>
      <TableCell className="px-4 py-3.5 text-muted-foreground">
        {favorite.equipmentLocation}
      </TableCell>
      <TableCell className="px-4 py-3.5">
        <Badge
          className={cn(
            "h-6 gap-1.5 px-2.5",
            Number(favorite.equipmentQuantity) > 0
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
              : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
          )}
        >
          <span className="size-1.5 rounded-full bg-current" aria-hidden />
          {Number(favorite.equipmentQuantity) > 0 ? "Available" : "Unavailable"}
        </Badge>
      </TableCell>
      <TableCell className="px-4 py-3.5 last:pr-6">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                size="icon-sm"
                className="rounded-md"
                aria-label={`Actions for ${favorite.equipmentName}`}
              >
                <EllipsisVerticalIcon />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem
              onClick={() =>
                router.push(`/dashboard/equipment-info/${favorite._id}`)
              }
            >
              <EyeIcon />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive" onClick={removeFavorite}>
              <Trash2Icon />
              Remove Favorite
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RentalEquipmentPublicInfo } from "@/types/type";
import Link from "next/link";

export function EquipmentCard({
  equipment,
  index,
}: {
  equipment: RentalEquipmentPublicInfo;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{
        duration: 0.4,
        delay: Number(index) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <Card className="flex h-full flex-col justify-between gap-3 rounded-xl border border-border bg-card p-3.5 shadow-xs ring-0 transition-shadow hover:shadow-md">
        {/* Equipment image / visual */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative flex aspect-16/10 w-full items-center justify-center overflow-hidden rounded-lg bg-muted/70 dark:bg-muted/40"
        >
          <Image
            src={equipment.equipmentImage}
            alt={equipment.equipmentName}
            width={1500}
            height={800}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4"
          />
        </motion.div>

        {/* Equipment details */}
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="line-clamp-1 text-base font-bold tracking-tight text-card-foreground">
              {equipment.equipmentName}
            </h3>
            <p className="text-xs text-muted-foreground">
              {equipment.equipmentCategory}
            </p>
          </div>

          {/* Price + Rental type */}
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-base font-bold text-foreground">
              {/* {item.currency} */} $
              {equipment.equipmentPrice.toLocaleString()}
            </p>
            <span className="text-sm font-medium text-foreground">
              {equipment.rentalType}
            </span>
          </div>

          {/* Location + Availability badge */}
          <div className="flex items-center justify-between gap-2">
            <p className="flex min-w-0 items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate text-foreground/85">
                {equipment.equipmentLocation}
              </span>
            </p>

            <Badge
              variant="secondary"
              className={cn(
                "h-5 rounded-full px-2.5 text-[11px] font-medium",
                equipment.equipmentQuantity > 0
                  ? "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300"
                  : "bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
              )}
            >
              {equipment.equipmentQuantity > 0 ? "Available" : "Unavailable"}
            </Badge>
          </div>
        </div>

        {/* Action button */}
        <Link href={`/equipment/details/${equipment._id}`}>
          <Button
            type="button"
            className="mt-1 h-9 w-full rounded-md text-xs font-semibold"
          >
            View Details
          </Button>
        </Link>
      </Card>
    </motion.div>
  );
}

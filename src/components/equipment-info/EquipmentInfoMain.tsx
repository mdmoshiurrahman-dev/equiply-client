import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { EquipmentSummary } from "./EquipmentSummary";
import { EquipmentAbout } from "./EquipmentAbout";
import { EquipmentSpecifications } from "./EquipmentSpecifications";
import { EquipmentOwnerCard } from "./EquipmentOwnerCard";
import { EquipmentRentalTerms } from "./EquipmentRentalTerms";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import type {
  EquipmentApplicationType,
  favoriteExistenceType,
} from "@/types/type";
import { OwnerCardSkeleton } from "./equipment-details-skeleton";
import Image from "next/image";
import { connection } from "next/server";

export async function EquipmentInfoMain({ id }: { id: string }) {
  await connection();
  const session = await loadUserSessionFromServerComponent();
  const token = session?.session?.token;
  const fevRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-favorite/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/equipment-details/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  const favoriteExistence: favoriteExistenceType = await fevRes.json();
  const equipment: EquipmentApplicationType = await res.json();

  return (
    <div className="flex flex-col gap-10 py-6 sm:gap-12 sm:py-8">
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <div
          className={cn(
            "flex aspect-4/3 items-center justify-center overflow-hidden",
            "rounded-xl border border-border bg-muted/40",
          )}
        >
          <Image
            src={equipment.equipmentImage}
            height={800}
            width={800}
            alt="image"
          />
        </div>

        <EquipmentSummary
          favoriteExistence={favoriteExistence}
          session={session}
          equipment={equipment}
        />
      </section>

      <EquipmentAbout equipment={equipment} />
      <EquipmentSpecifications equipment={equipment} />

      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <Suspense fallback={<OwnerCardSkeleton />}>
          <EquipmentOwnerCard equipment={equipment} session={session} />
        </Suspense>
        <EquipmentRentalTerms equipment={equipment} />
      </section>
    </div>
  );
}

export default EquipmentInfoMain;

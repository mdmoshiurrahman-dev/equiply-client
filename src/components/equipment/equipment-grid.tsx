import { RentalEquipmentPublicInfo } from "@/types/type";
import { EquipmentCard } from "./equipment-card";
import { EquipmentNotFound } from "./equipment-not-found";
import { connection } from "next/server";

export async function EquipmentGrid({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  await connection();
  let queryString = "";
  try {
    const searchParamsObj = await searchParams;
    queryString = new URLSearchParams(
      searchParamsObj as Record<string, string>,
    ).toString();
  } catch {
    queryString = "";
  }

  let allRentalEquipments: RentalEquipmentPublicInfo[] = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/all-application-public?${queryString}`,
      {
        signal: AbortSignal.timeout(8000),
      },
    );
    if (res.ok) {
      allRentalEquipments = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch equipment:", error);
  }

  return (
    <section
      aria-labelledby="available-equipment-heading"
      className="space-y-3"
    >
      {/* Header row */}
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="available-equipment-heading"
          className="text-base font-bold tracking-tight text-foreground sm:text-lg"
        >
          Available Equipment
        </h2>
      </div>
      {/* Cards container & grid */}
      <div className="rounded-xl border border-border bg-card/50 p-3 sm:p-4">
        {allRentalEquipments.length !== 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allRentalEquipments.map((equipment, index) => (
              <EquipmentCard
                equipment={equipment}
                index={index}
                key={equipment._id}
              />
            ))}
          </div>
        ) : (
          <EquipmentNotFound />
        )}
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { EquipmentCard } from "@/components/equipment/equipment-card";
import type { RentalEquipmentPublicInfo } from "@/types/type";

export async function FeaturedEquipment() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/latest-rental-equipments`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    console.error("Failed to load featured equipment:");
  }

  const allRentalEquipments: RentalEquipmentPublicInfo[] = await res.json();
  return (
    <section
      aria-labelledby="featured-equipment-heading"
      className="py-14 sm:py-16"
    >
      {/* Section header */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Explore Our Collection
          </p>

          <h2
            id="featured-equipment-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Featured Equipment
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Discover reliable equipment for your next project, available when
            you need it.
          </p>
        </div>

        <a
          href="/equipment"
          className="group flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:text-primary/80"
        >
          Explore All Equipment
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Cards grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {allRentalEquipments.map((equipment, index) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

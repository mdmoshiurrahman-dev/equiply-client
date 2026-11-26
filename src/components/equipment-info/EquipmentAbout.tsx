import { EquipmentApplicationType } from "@/types/type";


export function EquipmentAbout({ equipment }:{equipment:EquipmentApplicationType}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        About This Equipment
      </h2>
      <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
        {equipment.equipmentTerms}
      </p>
    </section>
  );
}

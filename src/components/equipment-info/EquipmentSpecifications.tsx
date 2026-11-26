import { EquipmentApplicationType } from "@/types/type";
export function EquipmentSpecifications({
  equipment,
}: {
  equipment: EquipmentApplicationType;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        Equipment Specifications
      </h2>

      <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border-b border-border pb-3">
          <dt className="text-sm text-muted-foreground">Brand</dt>
          <dd className="mt-2 text-sm font-medium">
            {equipment.equipmentBrand}
          </dd>
        </div>
        <div className="border-b border-border pb-3">
          <dt className="text-sm text-muted-foreground">Model</dt>
          <dd className="mt-2 text-sm font-medium">
            {equipment.equipmentModel}
          </dd>
        </div>
        <div className="border-b border-border pb-3">
          <dt className="text-sm text-muted-foreground">Category</dt>
          <dd className="mt-2 text-sm capitalize font-medium">
            {equipment.equipmentCategory.split('-').join(' ')}
          </dd>
        </div>
      </dl>
    </section>
  );
}

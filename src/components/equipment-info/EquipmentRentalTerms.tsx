import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EquipmentApplicationType } from "@/types/type";

export function EquipmentRentalTerms({
  equipment,
}: {
  equipment: EquipmentApplicationType;
}) {
  return (
    <Card className="gap-4 rounded-xl py-6">
      <CardHeader>
        <CardTitle className="text-lg font-semibold sm:text-xl">
          Rental Terms &amp; Conditions
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <p className="pl-4 text-sm leading-relaxed text-foreground/90 marker:text-muted-foreground">
          {equipment.equipmentTerms}
        </p>
      </CardContent>
    </Card>
  );
}

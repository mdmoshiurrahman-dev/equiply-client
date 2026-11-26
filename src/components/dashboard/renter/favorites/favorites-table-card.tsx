import { Card } from "@/components/ui/card";
import type { EquipmentApplicationType } from "@/types/type";

import { FavoritesTable } from "./favorites-table";

export function FavoritesTableCard({
  favorites,
}: {
  favorites: EquipmentApplicationType[];
}) {
  return (
    <Card className="overflow-hidden rounded-2xl py-0">
      <FavoritesTable favorites={favorites} />
    </Card>
  );
}

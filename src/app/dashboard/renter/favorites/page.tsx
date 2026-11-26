import { FavoritesHeader } from "@/components/dashboard/renter/favorites/favorites-header";
import { FavoritesTableCard } from "@/components/dashboard/renter/favorites/favorites-table-card";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { EquipmentApplicationType } from "@/types/type";

export const metadata = {
  title: "Favorites — Equiply",
  description: "Keep track of equipment you love and want to rent.",
};

export default async function FavoritesPage() {
  const session = await loadUserSessionFromServerComponent();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-fev-equipments`,
    {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
      },
    },
  );
  if (!response.ok) {
    console.error("Failed to load favorites");
  }
  const favorites: EquipmentApplicationType[] = await response.json();
  return (
    <div className="flex flex-col gap-8">
      <FavoritesHeader itemCount={favorites.length} />
      <FavoritesTableCard favorites={favorites} />
    </div>
  );
}

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
  let favorites: EquipmentApplicationType[] = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/get-fev-equipments`, {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
      },
      signal: AbortSignal.timeout(8000),
    });
    if (response.ok) {
      favorites = await response.json();
    }
  } catch (err) {
    console.error("Failed to load favorites:", err);
  }
  return (
    <div className="flex flex-col gap-8">
      <FavoritesHeader itemCount={favorites.length} />
      <FavoritesTableCard favorites={favorites} />
    </div>
  );
}

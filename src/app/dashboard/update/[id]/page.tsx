import { UpdateEquipmentApplication } from "@/components/dashboard/update/update-equipment-application";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { EquipmentApplicationType } from "@/types/type";

export default async function UpdateEquipmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await loadUserSessionFromServerComponent();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/equipment-details/${id}`,
    {
      headers: {
        Authorization: `Bearer ${session.session.token}`,
      },
    },
  );
  if (!res.ok) {
    console.error("Failed to load equipment details for update");
  }
  const equipmentData: EquipmentApplicationType = await res.json();
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold">
          Update Equipment
        </h1>
        <p className="text-sm text-muted-foreground">
          Update your listed equipment details below to get started.
        </p>
      </div>
      <UpdateEquipmentApplication equipmentData={equipmentData} />
    </div>
  );
}

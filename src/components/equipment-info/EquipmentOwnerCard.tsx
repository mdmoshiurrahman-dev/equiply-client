import { Mail, MapPin, Phone } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  EquipmentApplicationType,
  providerProfileDataForPublic,
} from "@/types/type";

export async function EquipmentOwnerCard({
  equipment,
  session,
}: {
  equipment: EquipmentApplicationType;
  session?: { session?: { token?: string } } | null;
}) {
  const token = session?.session?.token;
  let userInfo: providerProfileDataForPublic = {
    name: "Equipment Owner",
    email: "Contact via platform",
    account_type: "provider",
    tel_no: "Not available",
    business_address: equipment.equipmentLocation || "Not specified",
    user_image: "",
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-user-data/${equipment.creatorId}`,
      {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(8000),
      },
    );
    if (res.ok) {
      userInfo = await res.json();
    }
  } catch (err) {
    console.error("Failed to load owner data:", err);
  }
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        Equipment Owner
      </h2>

      <div className="flex items-center gap-4">
        <Avatar size="lg" className="size-16">
          <AvatarImage src={userInfo.user_image} alt={userInfo.name} />
        </Avatar>

        <div className="flex flex-col gap-1">
          <p className="font-semibold">{userInfo.name}</p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Mail className="size-3" />
            {userInfo.email}
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <Phone className="size-3" />
            {userInfo.tel_no}
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="size-3" />
            {userInfo.business_address}
          </p>
        </div>
      </div>
    </section>
  );
}

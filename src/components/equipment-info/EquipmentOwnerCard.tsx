import { Mail, MapPin, Phone } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  EquipmentApplicationType,
  providerProfileDataForPublic,
} from "@/types/type";

export async function EquipmentOwnerCard({
  equipment,
  session,
  jwt,
}: {
  equipment: EquipmentApplicationType;
  session?: { session?: { token?: string } } | null;
  jwt: string | undefined;
}) {
  const token = session?.session?.token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-user-data/${equipment.creatorId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
    },
  );

  if (!res.ok) {
    console.error("Failed to load owner data:");
  }
  const userInfo: providerProfileDataForPublic = await res.json();
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

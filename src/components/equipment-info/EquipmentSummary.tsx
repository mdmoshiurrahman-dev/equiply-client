import { Badge } from "@/components/ui/badge";
import { EquipmentApplicationType } from "@/types/type";
import { BookingDialog } from "../booking/booking-diaglog/bookingDiaglog";
import AddToFavorites from "./AddToFavorites";
import { MapPin } from "lucide-react";
import type { favoriteExistenceType } from "@/types/type";

export async function EquipmentSummary({
  session,
  equipment,
  favoriteExistence,
}: {
  equipment: EquipmentApplicationType;
  session: unknown;
  favoriteExistence: favoriteExistenceType;
}) {
  const details = [
    { label: "Rental Type", value: equipment.rentalType },
    { label: "Available Quantity", value: equipment.equipmentQuantity },
    { label: "Equipment Condition", value: equipment.equipmentCondition },
  ];
  const role = (session as { user?: { role?: string } })?.user?.role;
  const isBookingAble = role !== "admin" && role !== "provider";
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
        {equipment.equipmentCategory}
      </p>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {equipment.equipmentName}
      </h1>

      <div>
        <Badge variant="outline" className="h-6 gap-1 px-2.5">
          <MapPin className="text-muted-foreground" />
          {equipment.equipmentLocation}
        </Badge>
      </div>

      <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
        {equipment.equipmentDescription}
      </p>

      <p className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-bold tracking-tight">
          ${equipment.equipmentPrice}
        </span>
        <span className="text-base text-muted-foreground">per day</span>
      </p>

      <dl className="flex flex-col gap-2">
        {details.map((detail) => (
          <div key={detail.label} className="flex flex-wrap gap-x-2">
            <dt className="text-sm text-muted-foreground">{detail.label}:</dt>
            <dd className="text-sm font-medium">{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <Badge variant="secondary" className="h-6 gap-1 px-2.5">
          <span
            className="size-2 rounded-full bg-emerald-500 dark:bg-emerald-400"
            aria-hidden
          />
          {Number(equipment.equipmentQuantity) > 0
            ? "Available"
            : "Unavailable"}
        </Badge>
      </div>

      <div className="mt-2 flex flex-col gap-3  sm:flex-row">
        {isBookingAble && Number(equipment.equipmentQuantity) > 0 && (
          <BookingDialog equipment={equipment} />
        )}
        {isBookingAble && (
          <AddToFavorites favoriteExistence = {favoriteExistence} id={equipment._id} session={session} />
        )}
      </div>
    </div>
  );
}

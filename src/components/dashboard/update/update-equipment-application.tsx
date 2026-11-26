"use client";
import { CircleAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UpdateEquipmentBasicInformationSection } from "./update-equipment-basic-information-section";
import { UpdateEquipmentSpecificationsSection } from "./update-equipment-specifications-section";
import { UpdateEquipmentRentalInformationSection } from "./update-equipment-rental-information-section";
import { UpdateEquipmentImageSection } from "./update-equipment-image-section";
import { UpdateEquipmentRentalTermsSection } from "./update-equipment-rental-terms-section";
import { uploadImage } from "@/lib/action/uploadImage";
import { EquipmentApplicationType } from "@/types/type";
import { useSession } from "@/lib/auth-client";

export function UpdateEquipmentApplication({
  equipmentData,
}: {
  equipmentData: EquipmentApplicationType;
}) {
  const session = useSession();
  const handelUpdateEquipmentApplication = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const image = formData.get("equipmentImage");
    const hasNewImage = image instanceof File && image.size > 0;

    const imageUrl = hasNewImage
      ? await uploadImage(image as File)
      : equipmentData.equipmentImage;
    const payload = {
      ...data,
      equipmentImage: imageUrl,
    };
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/equipment-application/update/${equipmentData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.session.token}`,
        },
        body: JSON.stringify(payload),
      },
    );
  };
  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handelUpdateEquipmentApplication}
    >
      <UpdateEquipmentBasicInformationSection equipmentData={equipmentData} />
      <UpdateEquipmentSpecificationsSection equipmentData={equipmentData} />
      <UpdateEquipmentRentalInformationSection equipmentData={equipmentData} />
      <UpdateEquipmentImageSection />
      <UpdateEquipmentRentalTermsSection equipmentData={equipmentData} />

      <div className="flex  flex-col-reverse gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-xs text-muted-foreground sm:max-w-xs">
          <CircleAlertIcon className="mt-0.5 size-3.5 shrink-0" />
          Your equipment will be submitted for admin approval before it becomes
          visible to renters.
        </p>
        <div className="flex gap-3">
          <Button
            type="reset"
            variant="outline"
            className="flex-1 sm:flex-none"
          >
            Cancel
          </Button>
          <Button type="submit" className="flex-1 sm:flex-none">
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  );
}

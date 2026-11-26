"use client";
import { CircleAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BasicInformationSection } from "./basic-information-section";
import { SpecificationsSection } from "./specifications-section";
import { RentalInformationSection } from "./rental-information-section";
import { EquipmentImageSection } from "./equipment-image-section";
import { RentalTermsSection } from "./rental-terms-section";
import { useSession } from "@/lib/auth-client";
import { uploadImage } from "@/lib/action/uploadImage";
import { toast } from "@/components/ui/toast";
import { jwtTokenClient } from "@/lib/core/jwtTokenClient";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export function AddEquipmentForm() {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      equipmentName: string;
      equipmentCategory: string;
      equipmentDescription: string;
      equipmentCondition: string;
      rentalType: string;
      rentalPrice: string;
      rentalDeposit: string;
      rentalDuration: string;
      rentalLocation: string;
      rentalTerms: string;
      creationDate: string;
      equipmentTerms: string;
    };
    const imageFile = formData.get("equipmentImage");
    const imageUrl = await uploadImage(imageFile as File);
    const payload = {
      ...data,
      creationDate: new Date(),
      equipmentImage: imageUrl,
    };
    const jwt = await jwtTokenClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/equipment-application`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.session.token}`,
          "jwt-token": `Bearer ${jwt}`,
        },
        body: JSON.stringify(payload),
      },
    );
    const result = await res.json();
    if (result.insertedId) {
      setLoading(false);
      toast.add({
        type: "success",
        title: "Equipment submitted successfully",
        description: "Your equipment has been submitted for admin approval.",
      });
    } else {
      setLoading(false);
      toast.add({
        type: "error",
        title: "Error submitting equipment",
        description:
          result.message ||
          "An error occurred while submitting your equipment.",
      });
    }
  };

  return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-8">
      <BasicInformationSection />
      <SpecificationsSection />
      <RentalInformationSection />
      <EquipmentImageSection />
      <RentalTermsSection />

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
          <Button
            disabled={loading}
            type="submit"
            className="flex-1 sm:flex-none"
          >
            {loading ? <Spinner /> : "Submit Equipment"}
          </Button>
        </div>
      </div>
    </form>
  );
}

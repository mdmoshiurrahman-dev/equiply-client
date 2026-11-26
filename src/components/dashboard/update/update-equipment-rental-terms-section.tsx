import { EquipmentApplicationType } from "@/types/type";
import { UpdateFormField } from "./update-form-field";
import { UpdateFormSection } from "./update-form-section";
import { Textarea } from "@/components/ui/textarea";

export function UpdateEquipmentRentalTermsSection({
  equipmentData,
}: {
  equipmentData: EquipmentApplicationType;
}) {
  return (
    <UpdateFormSection
      step="05"
      title="Rental Terms"
      description="Define the terms and conditions for renting this equipment."
    >
      <UpdateFormField
        label="Terms & Conditions"
        htmlFor="equipment-terms"
        hint="Specify deposit requirements, usage rules, or penalties."
      >
        <Textarea
          defaultValue={equipmentData.equipmentTerms}
          name="equipmentTerms"
          id="equipment-terms"
          placeholder="e.g. A refundable deposit is required. Equipment must be returned in the same condition..."
          className="min-h-24"
        />
      </UpdateFormField>
    </UpdateFormSection>
  );
}

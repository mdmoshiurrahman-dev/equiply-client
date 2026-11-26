import { FormField } from "./form-field";
import { FormSection } from "./form-section";
import { Textarea } from "@/components/ui/textarea";

export function RentalTermsSection() {
  return (
    <FormSection
      step="05"
      title="Rental Terms"
      description="Define the terms and conditions for renting this equipment."
    >
      <FormField
        label="Terms & Conditions"
        htmlFor="equipment-terms"
        hint="Specify deposit requirements, usage rules, or penalties."
      >
        <Textarea
          name="equipmentTerms"
          id="equipment-terms"
          placeholder="e.g. A refundable deposit is required. Equipment must be returned in the same condition..."
          className="min-h-24"
        />
      </FormField>
    </FormSection>
  );
}

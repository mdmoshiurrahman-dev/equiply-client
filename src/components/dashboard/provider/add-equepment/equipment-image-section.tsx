import { FormSection } from "./form-section";
import { Input } from "@/components/ui/input";

export function EquipmentImageSection() {
  return (
    <FormSection
      step="04"
      title="Equipment Image"
      description="Upload a clear image to attract more renters."
    >
      <Input
        required
        name="equipmentImage"
        type="file"
        accept="image/*"
        className="text-sm font-medium text-foreground underline underline-offset-4"
        aria-label="Upload equipment image"
      />
    </FormSection>
  );
}
//

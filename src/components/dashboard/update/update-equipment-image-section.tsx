import { UpdateFormSection } from "./update-form-section";
import { Input } from "@/components/ui/input";
export function UpdateEquipmentImageSection() {
  return (
    <UpdateFormSection
      step="04"
      title="Equipment Image"
      description="Upload a clear image to attract more renters."
    >
      <Input
        name="equipmentImage"
        type="file"
        accept="image/*"
        className="text-sm font-medium text-foreground underline underline-offset-4"
        aria-label="Upload equipment image"
      />
    </UpdateFormSection>
  );
}
//

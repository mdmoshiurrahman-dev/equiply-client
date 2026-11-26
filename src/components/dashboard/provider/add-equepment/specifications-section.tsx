import { FormField } from "./form-field";
import { FormSection } from "./form-section";
import { Input } from "@/components/ui/input";
export const EQUIPMENT_CONDITIONS = [
  "Brand New",
  "Excellent",
  "Good",
  "Fair",
] as const;
export function SpecificationsSection() {
  return (
    <FormSection
      step="02"
      title="Specifications"
      description="Add technical details to help renters understand your equipment."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Brand" htmlFor="equipment-brand">
          <Input name="equipmentBrand" id="equipment-brand" placeholder="e.g. Canon" />
        </FormField>
        <FormField label="Model" htmlFor="equipment-model">
          <Input name="equipmentModel" id="equipment-model" placeholder="e.g. EOS 5D Mark IV" />
        </FormField>
        <FormField label="Condition" htmlFor="equipment-condition">
          <Input
            name="equipmentCondition"
            id="equipment-condition"
            placeholder="e.g. Excellent"
            list="equipment-conditions"
          />
          <datalist id="equipment-conditions">
            {EQUIPMENT_CONDITIONS.map((condition) => (
              <option key={condition} value={condition} />
            ))}
          </datalist>
        </FormField>
      </div>
    </FormSection>
  );
}

import { EquipmentApplicationType } from "@/types/type";
import { UpdateFormField } from "./update-form-field";
import { UpdateFormSection } from "./update-form-section";
import { Input } from "@/components/ui/input";
export const EQUIPMENT_CONDITIONS = [
  "Brand New",
  "Excellent",
  "Good",
  "Fair",
] as const;
export function UpdateEquipmentSpecificationsSection({equipmentData}:{equipmentData:EquipmentApplicationType}) {
  return (
    <UpdateFormSection
      step="02"
      title="Specifications"
      description="Add technical details to help renters understand your equipment."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <UpdateFormField label="Brand" htmlFor="equipment-brand">
          <Input defaultValue={equipmentData.equipmentBrand} name="equipmentBrand" id="equipment-brand" placeholder="e.g. Canon" />
        </UpdateFormField>
        <UpdateFormField label="Model" htmlFor="equipment-model">
          <Input defaultValue={equipmentData.equipmentModel} name="equipmentModel" id="equipment-model" placeholder="e.g. EOS 5D Mark IV" />
        </UpdateFormField>
        <UpdateFormField label="Condition" htmlFor="equipment-condition">
          <Input
            defaultValue={equipmentData.equipmentCondition}
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
        </UpdateFormField>
      </div>
    </UpdateFormSection>
  );
}

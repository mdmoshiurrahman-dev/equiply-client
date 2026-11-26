import { EquipmentApplicationType } from "@/types/type";
import { UpdateFormField } from "./update-form-field";
import { UpdateFormSection } from "./update-form-section";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const RENTAL_TYPES = ["Daily", "Weekly", "Monthly"] as const;
export function UpdateEquipmentRentalInformationSection({
  equipmentData,
}: {
  equipmentData: EquipmentApplicationType;
}) {
  return (
    <UpdateFormSection
      step="03"
      title="Rental Information"
      description="Set your pricing and availability details."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <UpdateFormField label="Location" htmlFor="equipment-location" required>
          <Input
            defaultValue={equipmentData.equipmentLocation}
            name="equipmentLocation"
            id="equipment-location"
            placeholder="e.g. Dhaka, Bangladesh"
          />
        </UpdateFormField>
        <UpdateFormField
          label="Rental Price (BDT)"
          htmlFor="equipment-price"
          required
        >
          <Input
            defaultValue={equipmentData.equipmentPrice}
            name="equipmentPrice"
            id="equipment-price"
            type="number"
            min={0}
            placeholder="e.g. 1500"
          />
        </UpdateFormField>
        <UpdateFormField label="Rental Type" htmlFor="equipment-rental-type">
          <Select defaultValue={equipmentData.rentalType} name="rentalType">
            <SelectTrigger id="equipment-rental-type" className="w-full">
              <SelectValue  />
            </SelectTrigger>
            <SelectContent>
              {RENTAL_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </UpdateFormField>
        <UpdateFormField
          label="Available Quantity"
          htmlFor="equipment-quantity"
        >
          <Input
            defaultValue={equipmentData.equipmentQuantity}
            name="equipmentQuantity"
            id="equipment-quantity"
            type="number"
            min={1}
            placeholder="e.g. 5"
          />
        </UpdateFormField>
      </div>
    </UpdateFormSection>
  );
}

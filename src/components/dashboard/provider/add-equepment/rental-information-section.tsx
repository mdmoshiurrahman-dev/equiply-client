import { FormField } from "./form-field";
import { FormSection } from "./form-section";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const RENTAL_TYPES = ["Daily", "Weekly", "Monthly"] as const;
export function RentalInformationSection() {
  return (
    <FormSection
      step="03"
      title="Rental Information"
      description="Set your pricing and availability details."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Location" htmlFor="equipment-location" required>
          <Input name="equipmentLocation" id="equipment-location" placeholder="e.g. Dhaka, Bangladesh" />
        </FormField>
        <FormField label="Rental Price (BDT)" htmlFor="equipment-price" required>
          <Input
            name="equipmentPrice"
            id="equipment-price"
            type="number"
            min={0}
            placeholder="e.g. 1500"
          />
        </FormField>
        <FormField label="Rental Type" htmlFor="equipment-rental-type">
          <Select name="rentalType">
            <SelectTrigger id="equipment-rental-type" className="w-full">
              <SelectValue placeholder="Select rental type" />
            </SelectTrigger>
            <SelectContent>
              {RENTAL_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField label="Available Quantity" htmlFor="equipment-quantity">
          <Input
            name="equipmentQuantity"
            id="equipment-quantity"
            type="number"
            min={1}
            placeholder="e.g. 5"
          />
        </FormField>
      </div>
    </FormSection>
  );
}

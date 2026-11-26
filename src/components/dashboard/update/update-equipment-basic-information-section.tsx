import { EquipmentApplicationType } from "@/types/type";
import { UpdateFormField } from "./update-form-field";
import { UpdateFormSection } from "./update-form-section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { equipmentCategories } from "./equipmentCategories";

export function UpdateEquipmentBasicInformationSection({
  equipmentData,
}: {
  equipmentData: EquipmentApplicationType;
}) {

  return (
    <UpdateFormSection
      step="01"
      title="Basic Information"
      description="Enter the fundamental details about your equipment."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <UpdateFormField
          label="Equipment Name"
          htmlFor="equipment-name"
          required
        >
          <Input
            defaultValue={equipmentData.equipmentName}
            name="equipmentName"
            id="equipment-name"
            placeholder="e.g. Professional DSLR Camera"
          />
        </UpdateFormField>
        <UpdateFormField label="Category" htmlFor="equipment-category" required>
          <Select defaultValue={equipmentData.equipmentCategory} name="equipmentCategory" items={equipmentCategories}>
            <SelectTrigger className="w-full">
              <SelectValue  className={'capitalize'} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup >
                <SelectLabel>Equipment Category</SelectLabel>
                {equipmentCategories.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </UpdateFormField>
        <UpdateFormField
          label="Description"
          htmlFor="equipment-description"
          required
          className="md:col-span-2"
        >
          <Textarea
            defaultValue={equipmentData.equipmentDescription}
            name="equipmentDescription"
            id="equipment-description"
            placeholder="Provide a detailed description of your equipment..."
            className="min-h-24"
          />
        </UpdateFormField>
      </div>
    </UpdateFormSection>
  );
}

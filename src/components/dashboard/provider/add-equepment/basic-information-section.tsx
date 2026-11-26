import { FormField } from "./form-field";
import { FormSection } from "./form-section";
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
import { equipmentCategories } from "../../update/equipmentCategories";

export function BasicInformationSection() {
  return (
    <FormSection
      step="01"
      title="Basic Information"
      description="Enter the fundamental details about your equipment."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Equipment Name" htmlFor="equipment-name" required>
          <Input
            name="equipmentName"
            id="equipment-name"
            placeholder="e.g. Professional DSLR Camera"
          />
        </FormField>
        <FormField label="Category" htmlFor="equipment-category" required>
          <Select name="equipmentCategory" items={equipmentCategories}>
            <SelectTrigger className="w-full">
              <SelectValue  />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Equipment Category</SelectLabel>
                {equipmentCategories.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <FormField
          label="Description"
          htmlFor="equipment-description"
          required
          className="md:col-span-2"
        >
          <Textarea
            name="equipmentDescription"
            id="equipment-description"
            placeholder="Provide a detailed description of your equipment..."
            className="min-h-24"
          />
        </FormField>
      </div>
    </FormSection>
  );
}

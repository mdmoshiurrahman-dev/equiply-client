"use client";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "./form-field";
import { FormSection } from "./form-section";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldLabel } from "@/components/ui/field";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { uploadImage } from "@/lib/action/uploadImage";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { jwtTokenClient } from "@/lib/core/jwtTokenClient";

const ACCOUNT_TYPE_OPTIONS = [
  { value: "individual", label: "Individual", id: "1" },
  { value: "business", label: "Business / Organization", id: "2" },
];

const EQUIPMENT_CATEGORIES = [
  { label: "Construction Equipment", value: "construction-equipment" },
  { label: "Photography Equipment", value: "photography-equipment" },
  { label: "Vehicles & Transportation", value: "vehicles-transportation" },
  { label: "Agriculture Equipment", value: "agriculture-equipment" },
  { label: "Electronics", value: "electronics" },
  { label: "Event Equipment", value: "event-equipment" },
  { label: "Power & Generators", value: "power-generators" },
  { label: "Industrial Machinery", value: "industrial-machinery" },
  { label: "Medical Equipment", value: "medical-equipment" },
  { label: "Audio & Sound Systems", value: "audio-sound-systems" },
  { label: "Lighting Equipment", value: "lighting-equipment" },
  { label: "Cleaning Equipment", value: "cleaning-equipment" },
  { label: "Gardening & Landscaping", value: "gardening-landscaping" },
  { label: "Office Equipment", value: "office-equipment" },
  {
    label: "Kitchen & Catering Equipment",
    value: "kitchen-catering-equipment",
  },
  { label: "Sports & Fitness Equipment", value: "sports-fitness-equipment" },
  {
    label: "Safety & Protective Equipment",
    value: "safety-protective-equipment",
  },
  { label: "Marine Equipment", value: "marine-equipment" },
  { label: "Tools & Hardware", value: "tools-hardware" },
  { label: "Other Equipment", value: "other-equipment" },
];
const baseApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export function EquipmentOwnerForm({ className }: { className?: string }) {
  const route = useRouter();
  const session = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const fromData = new FormData(e.currentTarget);

    const submissionData = Object.fromEntries(fromData.entries());
    const image = fromData.get("user_image") as File;
    const imageUrl = image.size ? await uploadImage(image) : "";
    const payload = {
      ...submissionData,
      applicationDate: new Date(),
      role: "pending",
      user_image: imageUrl,
    } as {
      name: string;
      email: string;
      tel_no: string;
      nid_tin: string;
      business_address: string;
      account_type: string;
      equipment_category: string;
      price_range: string;
      equipment_description: string;
      applicationDate: Date;
      role: string;
      user_image: string;
    };
    const token = session.data?.session.token;
    if (!token) {
      route.push("/sign-in");
    }

    const jwt = await jwtTokenClient();
    const res = await fetch(`${baseApiUrl}/update-user-data`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    if (result.modifiedCount > 0) {
      setIsLoading(false);
      toast.add({
        type: "success",
        title: "Application Submitted",
        description:
          "Your application has been submitted successfully. We will review it and get back to you.",
      });
      route.push("/");
    } else {
      setIsLoading(false);
      toast.add({
        type: "error",
        title: "Application Failed",
        description:
          "There was an error submitting your application. Please try again later.",
      });
    }
  };
  return (
    <form
      onSubmit={handelFormSubmit}
      className={cn("flex flex-col gap-8", className)}
    >
      <div className="grid gap-8 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <FormSection
            step={1}
            title="Personal Information"
            description="Tell us about yourself and how to reach you."
          >
            <div className="flex flex-col gap-4">
              <FormField label="Full Name" required htmlFor="full-name">
                <Input
                  required
                  id="full-name"
                  name="name"
                  placeholder="e.g. Md. Rakibul Hasan"
                />
              </FormField>

              <FormField label="Email Address" required htmlFor="email">
                <Input
                  disabled={true}
                  id="email"
                  defaultValue={session.data?.user.email}
                  name="email"
                  type="email"
                />
              </FormField>

              <FormField label="Phone Number" required htmlFor="phone">
                <Input
                  required
                  inputMode="tel"
                  name="tel_no"
                  id="phone"
                  placeholder="e.g. 01712345678"
                />
              </FormField>

              <FormField label="NID / TIN Number" required htmlFor="nid">
                <Input
                  required
                  id="nid"
                  name="nid_tin"
                  placeholder="e.g. 1990123456789"
                />
              </FormField>

              <FormField
                label="Business Address"
                required
                htmlFor="business-address"
              >
                <Textarea
                  required
                  name="business_address"
                  id="business-address"
                  rows={3}
                  placeholder="Street, area, city, postal code"
                />
              </FormField>
            </div>
          </FormSection>

          <FormSection
            step={2}
            title="Account Type"
            description="Choose the type of account that best describes you."
          >
            <RadioGroup
              name="account_type"
              defaultValue={"individual"}
              className="w-full flex justify-between"
            >
              {ACCOUNT_TYPE_OPTIONS.map((type, index) => (
                <div key={index} className="flex items-center gap-3">
                  <RadioGroupItem value={type.value} id={type.id} />
                  <Label htmlFor={type.id}>{type.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </FormSection>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          <FormSection
            step={3}
            title="Equipment Details"
            description="List the equipment you want to list for rent."
          >
            <div className="flex flex-col gap-4">
              <FormField
                label="Equipment Categories"
                required
                htmlFor="equipment-categories"
                hint="Select every category you can supply."
              >
                <Select
                  required
                  name="equipment_category"
                  items={EQUIPMENT_CATEGORIES}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {EQUIPMENT_CATEGORIES.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField
                label="Rental Price Range"
                required
                htmlFor="rental-price"
                hint="Daily rate in BDT, e.g. 5000 - 12000"
              >
                <Input
                  required
                  name="price_range"
                  id="rental-price"
                  placeholder="e.g. 5000 - 12000 BDT / day"
                />
              </FormField>

              <FormField
                label="Equipment Description"
                required
                htmlFor="description"
              >
                <Textarea
                  required
                  name="equipment_description"
                  id="description"
                  rows={4}
                  placeholder="Condition, year, availability, delivery area..."
                />
              </FormField>
              <FormField label="Upload Image" required htmlFor="image">
                <Input
                  name="user_image"
                  id="image"
                  type="file"
                  accept="image/*"
                 
                />
              </FormField>
            </div>
          </FormSection>

          <FormSection
            step={4}
            title="Terms & Conditions"
            description="Both items are required to submit the application."
          >
            <Field orientation="horizontal">
              <input
                required
                type="checkbox"
                id="terms-and-conditions"
                className="size-4 shrink-0 cursor-pointer accent-primary"
              />
              <FieldLabel
                htmlFor="terms-and-conditions"
                className="font-normal"
              >
                I agree to the{" "}
                <Link href={""} className="underline">
                  Terms & Conditions
                </Link>
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <input
                required
                type="checkbox"
                id="privacy-and-policy"
                className="size-4 shrink-0 cursor-pointer accent-primary"
              />
              <FieldLabel htmlFor="privacy-and-policy" className="font-normal">
                I agree to the{" "}
                <Link href={""} className="underline">
                  Privacy & Policy
                </Link>
              </FieldLabel>
            </Field>
          </FormSection>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t pt-6">
        <Button
          disabled={isLoading}
          type="submit"
          size="lg"
          className="h-11 w-full cursor-pointer font-semibold"
        >
          {isLoading ? <Spinner /> : "Submit Owner Application"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Your application will be reviewed by the Equiply team. It will take
          Upto 48 hours to approved.
        </p>
      </div>
    </form>
  );
}

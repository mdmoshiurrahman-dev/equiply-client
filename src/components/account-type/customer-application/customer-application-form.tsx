"use client";

import { CircleCheck, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FieldHint } from "./field-hint";
import { FormField } from "./form-field";
import { FormSection } from "./form-section";
import Link from "next/link";
import { uploadImage } from "@/lib/action/uploadImage";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
export function CustomerApplicationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();
  const session = useSession();
  const token = session.data?.session.token;
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      tel_no: string;
      location: string;
      nid_tin: string;
      user_image: string;
      applicationDate: string;
    };
    const image = formData.get("user_image") as File;
    const imageUrl = image.size ? await uploadImage(image) : "";

    const payload = {
      ...data,
      user_image: imageUrl,
      applicationDate: new Date(),
      role: "renter",
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/update-renter-data`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
    );
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
    <Card className="mt-8 w-full max-w-2xl">
      <CardContent>
        <form className="flex flex-col gap-8" onSubmit={handelSubmit}>
          {/* Personal Information */}
          <FormSection
            title="Personal Information"
            description="Your basic details and contact information."
          >
            <div className="flex flex-col gap-5">
              <FormField label="Full Name" required htmlFor="full-name">
                <Input
                  id="full-name"
                  name="name"
                  placeholder="Enter your full name."
                />
              </FormField>

              <FormField
                label="Email Address"
                required
                htmlFor="email"
                hint={
                  <FieldHint icon={CircleCheck}>
                    Connected to your Equiply account.
                  </FieldHint>
                }
              >
                <Input
                  id="email"
                  defaultValue={session.data?.user.email}
                  disabled={true}
                  name="email"
                  type="email"
                />
              </FormField>

              <FormField label="Phone Number" required htmlFor="phone-number">
                <Input
                  name="tel_no"
                  type="number"
                  placeholder="Enter your phone number"
                ></Input>
              </FormField>

              <FormField label="Location (City / Area)" htmlFor="location">
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter your city or area."
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

          <Separator />

          {/* Identity Verification */}
          <FormSection
            title="Identity Verification"
            description="A little identity information helps build confidence and trust within the Equiply community."
          >
            <FormField label="NID Number" required htmlFor="nid-number">
              <Input
                type="number"
                id="nid-number"
                name="nid_tin"
                inputMode="numeric"
                placeholder="Enter your National ID number."
              />
            </FormField>
          </FormSection>
          <div className="flex items-center gap-3">
            <input id="check" type="checkbox" required />
            <label htmlFor="check">
              I confirm that the information provided is accurate and agree to
              the Equiply{" "}
              <Link href={""} className="underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href={""} className="underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          {/* Submit */}
          <div className="flex flex-col gap-3">
            <Button
              disabled={isLoading}
              type="submit"
              size="lg"
              className="h-10 w-full cursor-pointer font-semibold"
            >
              {isLoading ? <Spinner /> : "Submit Renter Information"}
            </Button>
            <FieldHint icon={ShieldCheck} className="justify-center">
              Your information will be handled securely by Equiply.
            </FieldHint>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { EquipmentOwnerForm } from "@/components/account-type/equipment-owner-application/equipment-owner-form";

export const metadata: Metadata = {
  title: "Equipment Owner Application — Equiply",
  description:
    "Apply to list your heavy equipment for rent on Equiply and reach more renters.",
};

export default function EquipmentOwnerApplicationPage() {
  return (
    <section className="flex flex-col items-center py-10 sm:py-14">
      <div className="flex w-full max-w-5xl flex-col items-left">
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Equipment Owner Application
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted-foreground">
          Fill in the details below to list your equipment on Equiply and reach
          thousands of renters.
        </p>
      </div>

      <Card className="mt-8 w-full max-w-5xl">
        <CardContent>
          <EquipmentOwnerForm />
        </CardContent>
      </Card>
    </section>
  );
}

import type { Metadata } from "next";

import { CustomerApplicationForm } from "@/components/account-type/customer-application/customer-application-form";

export const metadata: Metadata = {
  title: "Renter Profile Application — Equiply",
  description:
    "Complete your renter profile so equipment owners know who they are renting to.",
};

export default function CustomerApplicationPage() {
  return (
    <section className="flex flex-col items-center py-10 sm:py-14">
      {/* Page header */}
      <div className="flex w-full max-w-2xl flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&rsquo;s Build Your Trusted Renter Profile
        </h1>
        <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
          Just a few details to help equipment owners know who they&apos;re
          renting to. Complete your information to get started with Equiply.
        </p>
      </div>

      {/* Application form card */}
      <CustomerApplicationForm />
    </section>
  );
}

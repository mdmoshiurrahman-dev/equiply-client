import type { Metadata } from "next";
import { Briefcase, User } from "lucide-react";
import { AccountTypeCard } from "@/components/account-type/account-type-card";

export const metadata: Metadata = {
  title: "Choose Your Account Type — Equiply",
  description: "Select how you want to use Equiply.",
};

export default function AccountTypePage() {
  return (
    <section className="flex flex-col items-center py-14 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Choose Your Account Type
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Select how you want to use Equiply.
      </p>

      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        <AccountTypeCard
          href="/account-type/customer-application"
          title="Renter"
          icon={User}
          buttonLabel="Continue as Renter"
        />
        <AccountTypeCard
          href="/account-type/equipment-owner-application"
          title="Equipment Owner"
          icon={Briefcase}
          buttonLabel="Continue as Equipment Owner"
        />
      </div>
    </section>
  );
}

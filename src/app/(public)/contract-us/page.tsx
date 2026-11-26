import type { Metadata } from "next";
import { ContractHero, ContactInfo } from "@/components/contract-us";

export const metadata: Metadata = {
  title: "Contact Us — Equiply",
  description:
    "Have a question about renting equipment, managing your listings, or using our platform? Reach out and let us know how we can help.",
};

export default function ContractUsPage() {
  return (
    <div>
      <ContractHero />
      <ContactInfo />
    </div>
  );
}

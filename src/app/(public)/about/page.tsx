import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/about-intro";
import { WhoWeAre } from "@/components/about/who-we-are";
import { TheChallenge } from "@/components/about/the-challenge";

export const metadata: Metadata = {
  title: "About Us — Equiply",
  description:
    "Learn how Equiply connects equipment owners with individuals and businesses looking for reliable rental solutions.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutIntro />
      <WhoWeAre />
      <TheChallenge />
    </div>
  );
}

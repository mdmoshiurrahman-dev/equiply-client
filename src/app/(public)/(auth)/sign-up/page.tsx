import type { Metadata } from "next";
import { SignUpCard } from "@/components/auth/sign-up/sign-up-card";

export const metadata: Metadata = {
  title: "Sign Up — Equiply",
  description:
    "Create your Equiply account and find the right equipment for your next project.",
};

export default function SignUpPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <SignUpCard />
    </main>
  );
}

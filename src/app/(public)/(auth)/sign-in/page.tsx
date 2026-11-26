import type { Metadata } from "next";
import { SignInCard } from "@/components/auth/sign-in/sign-in-card";

export const metadata: Metadata = {
  title: "Sign In — Equiply",
  description: "Sign in to your Equiply account to continue.",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <SignInCard />
    </main>
  );
}

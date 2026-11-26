import Link from "next/link";
import { SignUpForm } from "./sign-up-form";
import { cn } from "@/lib/utils";

/** Card shell for the /sign-up page — heading, form, social buttons and sign-in footer. */
export function SignUpCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-2xl border border-border bg-card p-6 sm:p-8",
        className,
      )}
    >
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Create Your Account</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Join Equiply and find the right equipment for your next project.
        </p>
      </header>

      <SignUpForm />

      {/* Footer */}
      <footer className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-semibold text-foreground hover:underline">
          Sign In
        </Link>
      </footer>
    </div>
  );
}

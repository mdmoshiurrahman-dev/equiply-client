import Link from "next/link";
import { SignInForm } from "./sign-in-form";
import { cn } from "@/lib/utils";

/** Card shell for the /sign-in page — heading, form and sign-up footer. */
export function SignInCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-2xl border border-border bg-card p-6 sm:p-8",
        className
      )}
    >
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Sign in to continue to Equiply.
        </p>
      </header>

      <SignInForm />

      {/* Footer */}
      <footer className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-foreground underline underline-offset-2 outline-none hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          Create an account
        </Link>
        .
      </footer>
    </div>
  );
}

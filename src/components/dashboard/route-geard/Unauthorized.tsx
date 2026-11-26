import Link from "next/link";
import { ArrowLeft, LockKeyhole, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Unauthorized() {
  return (
    <section
      aria-labelledby="unauthorized-title"
      className="relative isolate flex min-h-[min(70vh,44rem)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-[8%] bottom-0 size-56 rounded-full bg-destructive/5 blur-3xl" />
      </div>

      <Card className="w-full max-w-xl rounded-2xl border border-border/70 bg-card/95 shadow-xl shadow-foreground/5 ring-0 backdrop-blur">
        <CardContent className="flex flex-col items-center px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="relative mb-7 flex size-24 items-center justify-center rounded-full border border-destructive/15 bg-destructive/5">
            <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
              <ShieldAlert className="size-8" strokeWidth={1.7} />
            </div>
            <span className="absolute -right-1 -bottom-1 flex size-9 items-center justify-center rounded-full border-4 border-card bg-muted text-muted-foreground">
              <LockKeyhole className="size-4" />
            </span>
          </div>

          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            <span className="size-1.5 rounded-full bg-destructive" />
            Error 403 · Access restricted
          </p>

          <h1
            id="unauthorized-title"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            This area is off limits
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            Your account doesn’t have permission to view this page. If you
            think this is a mistake, contact your Equiply administrator.
          </p>

          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link href="/">
              <Button className="w-full gap-2 sm:w-auto">
                <ArrowLeft />
                Back to Equiply
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" className="w-full sm:w-auto">
                Sign in with another account
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

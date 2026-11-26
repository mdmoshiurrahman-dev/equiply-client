import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Left-aligned intro section for the About page. */
export function AboutIntro() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-xl">
        <p className="text-xs font-bold uppercase tracking-wide text-foreground">
          About our platform
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl sm:leading-[1.05] lg:text-7xl">
          Equipment Access Made&nbsp;Simple.
        </h1>

        <div className="mt-8 border-t border-border" />

        <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Finding the right equipment shouldn&apos;t be complicated or
          expensive. Our platform connects equipment owners with individuals
          and businesses looking for reliable rental solutions — all in one
          place.
        </p>

        <Link
          href="/equipment"
          className={cn(buttonVariants({ size: "lg" }), "mt-8")}
        >
          Explore Equipment
        </Link>
      </div>
    </section>
  );
}

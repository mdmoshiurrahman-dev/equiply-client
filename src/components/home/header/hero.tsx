import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeUp } from "./fade-up";

/** Base delay step (ms) between each staggered text reveal. */
const STAGGER_STEP = 100;

/** Entrance delay (ms) for the hero image card. */
const IMAGE_DELAY = 200;

export function Hero() {
  return (
    <section  aria-labelledby="hero-heading" className="py-14  sm:py-16 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy */}
        <div>
          <FadeUp className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Your Equipment Rental Partner
          </FadeUp>

          <FadeUp delay={STAGGER_STEP}>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Rent the Right Equipment.
              <br />
              Get More Done.
            </h1>
          </FadeUp>

          <FadeUp delay={STAGGER_STEP * 2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Find and rent reliable equipment for construction, photography,
              agriculture, transportation, and more. Connect with trusted
              equipment owners and get the tools you need, exactly when you need
              them.
            </p>
          </FadeUp>

          <FadeUp
            delay={STAGGER_STEP * 3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              render={<Link href="/equipment" />}
              nativeButton={false}
              size="lg"
              className="h-12 rounded-lg px-7 text-base"
            >
              Explore Equipment
            </Button>
            <Button
              render={<Link href="#how_it_works" />}
              nativeButton={false}
              variant="secondary"
              size="lg"
              className="h-12 rounded-lg border border-border px-7 text-base"
            >
              How It Works
            </Button>
          </FadeUp>

          <FadeUp
            delay={STAGGER_STEP * 4}
            className="mt-6 text-sm text-muted-foreground"
          >
            Flexible Rentals · Trusted Equipment Owners · Secure Payments
          </FadeUp>
        </div>

        {/* Right — image card */}
        <div
          className="animate-slide-in-right"
          style={{ animationDelay: `${IMAGE_DELAY}ms` }}
        >
          <div className="rounded-2xl border border-border bg-card p-3 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/banner_image.jpeg"
                alt="Excavator working at a construction site"
                fill
                priority
                sizes="(min-width: 1024px) 40rem, 100vw"
                className={cn("animate-float object-cover")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

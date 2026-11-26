/** "Who We Are" section shown at the bottom of the About page. */
export function WhoWeAre() {
  return (
    <section className="border-t border-b border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left: eyebrow + large heading */}
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-foreground">
            Who we are
          </p>
          <h2 className="mt-3 text-5xl font-bold tracking-tight leading-[1.05] sm:text-6xl sm:leading-[1.05] lg:text-7xl">
            A Better Way to Find and Rent Equipment.
          </h2>
        </div>

        {/* Right: supporting paragraphs */}
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            We are an equipment rental marketplace designed to make renting
            and sharing equipment easier.
          </p>
          <p>
            Our platform brings equipment owners and renters together, helping
            people access the tools and machinery they need without the
            responsibility of purchasing and maintaining everything
            themselves.
          </p>
          <p>
            Whether someone needs construction machinery for a project,
            photography equipment for a creative assignment, or event
            equipment for a special occasion, our goal is to make the rental
            process straightforward.
          </p>
        </div>
      </div>
    </section>
  );
}

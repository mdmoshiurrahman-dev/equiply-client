import { Search, CreditCard, Package } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Discover the Right Equipment",
    description:
      "Explore a wide range of equipment and find the perfect match for your project.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Book & Pay Securely",
    description:
      "Choose your rental dates, review the details, and complete your booking with a secure payment.",
  },
  {
    number: "03",
    icon: Package,
    title: "Get Equipped & Get Started",
    description:
      "Get your equipment and focus on what matters most — getting your project done.",
  },
] as const;

export function ProcessSection() {
  return (
    <section
      id="how_it_works"
      aria-labelledby="process-heading"
      className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16"
    >
      {/* Left: section heading */}
      <div className="flex border-b border-zinc-400 flex-col">
        <p  className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">
          The Process
        </p>

        <h2
          id="process-heading"
          className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
        >
          Your Next Project Starts With Three Simple Steps.
        </h2>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          From finding the right equipment to getting started, we&rsquo;ve made
          renting simple, convenient, and straightforward.
        </p>
      </div>

      {/* Right: numbered steps */}
      <ol className="divide-y divide-border border border-border bg-muted/40">
        {STEPS.map((step) => (
          <li
            key={step.number}
            className="flex items-start gap-5 p-6 sm:gap-8 sm:p-8"
          >
            <span className="text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl">
              {step.number}
            </span>

            <step.icon
              aria-hidden="true"
              className="size-6 shrink-0 text-foreground sm:size-7"
            />

            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

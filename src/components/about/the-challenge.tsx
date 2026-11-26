/** "The Challenge" section: numbered 2x2 problem grid on a muted background. */
const challenges = [
  {
    number: "01",
    title: "High Ownership Costs",
    description:
      "Buying equipment can require a significant investment, especially when it is needed only occasionally.",
  },
  {
    number: "02",
    title: "Difficult Discovery",
    description:
      "Finding suitable equipment and reliable rental providers can take time and effort.",
  },
  {
    number: "03",
    title: "Limited Flexibility",
    description:
      "Many people need equipment for a specific project or a limited period rather than owning it permanently.",
  },
  {
    number: "04",
    title: "Unused Equipment",
    description:
      "Equipment owners may have valuable assets that remain unused when they could be available for rental.",
  },
];

export function TheChallenge() {
  return (
    <section className="border-t border-b border-border  py-16 sm:py-20 lg:py-24">
      {/* Heading block */}
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-wide text-foreground">
          The Challenge
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight leading-[1.05] sm:text-5xl sm:leading-[1.05] lg:text-6xl">
          Equipment Should Be Easier to Access.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Buying equipment isn&apos;t always practical. Finding the right
          equipment, the right owner, and a suitable rental period can also be
          difficult. We believe accessing equipment should be simpler.
        </p>
      </div>

      {/* 2x2 numbered grid with cross-shaped dividers */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16">
        {challenges.map((item, i) => (
          <div
            key={item.number}
            className={[
              "py-8 sm:py-10",
              // vertical divider: between columns
              i % 2 === 0 ? "sm:border-r sm:border-border" : "",
              // horizontal divider: between rows
              i < 2 ? "sm:border-b sm:border-border" : "",
            ].join(" ")}
          >
            <p className="text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl">
              {item.number} <span aria-hidden="true">—</span>
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

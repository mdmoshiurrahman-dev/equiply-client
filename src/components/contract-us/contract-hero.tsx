/** Left-aligned "Get in touch" hero section for the Contract Us page. */
export function ContractHero() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-xl">
        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Get in touch
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight leading-[1.05] text-foreground sm:text-6xl sm:leading-[1.05] lg:text-7xl">
          We&apos;re Here
          <br />
          to Help.
        </h1>

        <div className="mt-8 border-t border-border" />

        <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Have a question about renting equipment, managing your listings, or
          using our platform? We&apos;d love to hear from you. Reach out and
          let us know how we can help.
        </p>
      </div>
    </section>
  );
}

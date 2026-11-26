/** "Contact information" section with numbered support channels. */
const channels = [
  {
    number: "01",
    title: "General Inquiries",
    description:
      "Have a question about our platform, services, or how everything works? Get in touch with us for general assistance.",
    email: "support@yourdomain.com",
  },
  {
    number: "02",
    title: "Rental & Booking Support",
    description:
      "Need help with a rental request, booking status, or an existing rental? Reach out for assistance with your rental activities.",
    email: "support@yourdomain.com",
  },
  {
    number: "03",
    title: "Account & Technical Support",
    description:
      "Experiencing an account issue or having trouble using the platform? Contact us for technical assistance.",
    email: "support@yourdomain.com",
  },
];

export function ContactInfo() {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20">
      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
        Contact information
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight leading-[1.1] text-foreground sm:text-5xl sm:leading-[1.1]">
        Find the Right Way to Reach Us.
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
        Whether you have a question about renting equipment, managing your
        listings, or using our platform, we&apos;re here to help you find the
        right support.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {channels.map((channel) => (
          <div
            key={channel.number}
            className="flex flex-col border-t border-b border-border py-8"
          >
            <span className="text-6xl font-bold tracking-tight leading-none text-muted-foreground/60 sm:text-7xl">
              {channel.number}
            </span>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
              {channel.title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-foreground">
              {channel.description}
            </p>

            <a
              href={`mailto:${channel.email}`}
              className="mt-auto pt-6 text-base font-medium underline underline-offset-4 text-foreground hover:text-muted-foreground"
            >
              {channel.email}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-border" />
    </section>
  );
}

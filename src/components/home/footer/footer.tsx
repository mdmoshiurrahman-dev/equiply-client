import Link from "next/link";
import { Logo } from "@/components/home/nav/logo";
interface FooterLink {
  href: string;
  label: string;
}

interface FooterLinkGroup {
  heading: string;
  links: FooterLink[];
}

const linkGroups: FooterLinkGroup[] = [
  {
    heading: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/equipment", label: "All Equipment" },
      { href: "/about", label: "About Us" },
    ],
  },
  {
    heading: "My Account",
    links: [
      { href: "/sign-in", label: "Login" },
      { href: "/sign-up", label: "Register" },
    ],
  },
  {
    heading: "Customer Support",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/privacy", label: "Privacy Policy" },
    ],
  },
];

interface BrandIconProps {
  className?: string;
}

/* Stroke-style social icons (lucide-react no longer ships brand icons). */
function FacebookIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socials = [
  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon },
];

const legalLinks: FooterLink[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const CURRENT_YEAR = new Date().getFullYear();

/* ------------------------------------------------------------------ */
/*  Subsections (private to this file)                                 */
/* ------------------------------------------------------------------ */

function BrandBlock() {
  return (
    <div className="space-y-5">
      <Logo className="text-lg sm:text-xl" />

      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
        Your trusted marketplace for finding and renting the equipment you
        need. Simple, flexible, and reliable equipment rental for every
        project.
      </p>

      <ul className="flex items-center gap-3">
        {socials.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-9 items-center justify-center rounded-md border border-border bg-muted/40 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkColumn({ group }: { group: FooterLinkGroup }) {
  return (
    <nav aria-label={group.heading}>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {group.heading}
      </h2>
      <ul className="mt-4 space-y-1">
        {group.links.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="inline-block py-1.5 text-sm text-foreground/80 transition-colors hover:text-foreground sm:text-base"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BottomBar() {
  return (
    <div className="border-t border-border bg-muted/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-5 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p>© {CURRENT_YEAR} Equiply. All rights reserved.</p>

        <ul className="flex items-center gap-6">
          {legalLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <BrandBlock />
          {linkGroups.map((group) => (
            <LinkColumn key={group.heading} group={group} />
          ))}
        </div>
      </div>

      <BottomBar />
    </footer>
  );
}

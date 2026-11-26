import type { NavLinkItem } from "@/types/type";

/** Default navigation links — override by passing `links` to the Nav component. */
export const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/equipment", label: "All Equipment" },
  { href: "/about", label: "About Us" },
  { href: "/contract-us", label: "Contact Us" },
];

/** Auth-related links used on the right side of the navbar. */
export const authLinks: NavLinkItem[] = [
  { href: "/sign-in", label: "Login" },
  { href: "/sign-up", label: "Register" },
];

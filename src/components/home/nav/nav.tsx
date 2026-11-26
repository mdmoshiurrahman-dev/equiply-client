"use client";

import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import { authLinks, navLinks } from "./nav-data";
import type { NavLinkItem } from "@/types/type";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import LogOut from "@/components/auth/logout/LogOut";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/components/ui/toast";

interface NavProps {
  logo?: ReactNode;
  /** Main center links (defaults to `navLinks` from ./nav-data). */
  links?: NavLinkItem[];
  /** Replace the right-side actions (defaults to Login link + Register button). */
  actions?: ReactNode;
  className?: string;
}

export function Nav({ logo, links = navLinks, actions, className }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const userSession = useSession();
  const login = authLinks[0];
  const register = authLinks[1];
  const role = userSession.data?.user.role;
  const defaultActions = (
    <div className="flex items-center gap-3 sm:gap-4">
      <ThemeToggle />
      {userSession.isPending ? (
        <>
          <Skeleton className="ml-1 h-4 w-12 sm:ml-2 sm:w-14" />
          <Skeleton className="h-9 w-24 rounded-lg px-5" />
        </>
      ) : !userSession.data?.user ? (
        <>
          <NavLink
            href={login.href}
            label={login.label}
            className="ml-1 sm:ml-2"
          />
          <Link href={register.href}>
            <Button size="lg" className="h-9 rounded-lg px-5">
              {register.label}
            </Button>
          </Link>
        </>
      ) : (
        <LogOut />
      )}
    </div>
  );

  const showForApproval = (): ReactNode => {
    toast.add({
      type: "warning",
      title: "Please wait until your process approve",
      description: "If you think something is wrong please contract us",
    });
    return null;
  };

  return (
    <header className={cn("w-full", className)}>
      <nav
        aria-label="Main navigation"
        className="border-b border-border dark:bg-black bg-background"
      >
        {/* Bar */}
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
          {/* Left — logo */}
          <div className="flex items-center">{logo ?? <Logo />}</div>

          <ul className="hidden items-center gap-4 lg:gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  active={link.href === pathname}
                />
              </li>
            ))}
            {userSession.isPending ? (
              <li aria-hidden="true">
                <Skeleton className="h-4 w-20" />
              </li>
            ) : (
              userSession.data?.user &&
              role && (
                <li>
                  {role === "admin" ||
                  role === "provider" ||
                  role === "renter" ? (
                    <NavLink
                      label="Dashboard"
                      active={pathname === `/dashboard/${role}`}
                      href={`/dashboard/${role}`}
                    />
                  ) : (
                    <button
                      onClick={showForApproval}
                      className="inline-flex cursor-pointer items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      Dashboard
                    </button>
                  )}
                </li>
              )
            )}
          </ul>

          {/* Right — actions (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              {actions ?? defaultActions}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div
              className="flex flex-col gap-1 border-t border-border px-4 py-4"
              onClick={() => setMenuOpen(false)}
            >
              {links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={link.href === pathname}
                  className="rounded-md px-3 py-2.5 hover:bg-muted"
                />
              ))}
              {userSession.data?.user && (
                <NavLink
                  label="Dashboard"
                  active={pathname === `/dashboard/${role}`}
                  className="rounded-md px-3 py-2.5 hover:bg-muted"
                  href={`/dashboard/${role}`}
                />
              )}
            </div>
            <div className="mt-3 flex gap-3 items-center border-t border-border py-4">
              <ThemeToggle className="ml-6" /> <LogOut />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

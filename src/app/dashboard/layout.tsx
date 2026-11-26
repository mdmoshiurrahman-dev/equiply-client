import type { Metadata } from "next";
import { AppSidebar } from "@/components/dashboard/sidebar/appSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toast";
import Link from "next/link";
import { Contact, EqualSquareIcon, Home, Info } from "lucide-react";
import { ThemeToggle } from "@/components/home/nav/theme-toggle";

export const metadata: Metadata = {
  title: "Dashboard — Equiply",
  description: "Manage your Equiply account.",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider
        style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset className="min-w-0">
          <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center border-b bg-white px-4 dark:bg-[#141414] dark:text-white sm:px-6">
            <SidebarTrigger />
            <div className="border-l flex flex-1 items-center justify-between  border-black dark:border-white pl-5 ml-5">
              <div className="flex gap-5">
                <Link href={"/"}>
                  <span className="text-sm  font-medium">
                    <Home className="inline" size={"16"} />
                  </span>
                </Link>
                <Link href={"/equipment"}>
                  <span className="text-sm  font-medium">
                    <EqualSquareIcon className="inline" size={"16"} />
                  </span>
                </Link>
                <Link href={"/about"}>
                  <span className="text-sm  font-medium">
                    <Info className="inline" size={"16"} />
                  </span>
                </Link>
                <Link href={"/contract-us"}>
                  <span className="text-sm  font-medium">
                    <Contact className="inline" size={"16"} />
                  </span>
                </Link>
              </div>
              <ThemeToggle />
            </div>
          </header>
          <div className="flex-1 p-4 sm:p-6">{children}</div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
}

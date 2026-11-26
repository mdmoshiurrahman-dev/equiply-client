import type { Metadata } from "next";
import { Nav } from "@/components/home/nav/nav";
import { Toaster } from "@/components/ui/toast";
import { Footer } from "@/components/home/footer/footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Equiply — Rent the Right Equipment",
  description: "Find and rent reliable equipment from trusted owners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={" "}>
        <Nav />
      </Suspense>
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

import type { Metadata } from "next";
import { EquipmentInfoMain } from "@/components/equipment-info/EquipmentInfoMain";
import { Suspense } from "react";
import { EquipmentDetailsSkeleton } from "@/components/equipment-info/equipment-details-skeleton";

export const metadata: Metadata = {
  title: "Equipment Details — Equiply",
  description:
    "View equipment details, rental pricing, specifications, owner info and rental terms.",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

async function EquipmentDetailsContent({ params }: PageProps) {
  const { id } = await params;
  return <EquipmentInfoMain id={id} />;
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<EquipmentDetailsSkeleton />}>
      <EquipmentDetailsContent params={params} />
    </Suspense>
  );
}

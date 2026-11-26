import { Suspense } from "react";
import { Hero } from "@/components/home/header/hero";
import { FeaturedEquipment } from "@/components/home/feature/featured-equipment";
import { FeaturedEquipmentSkeleton } from "@/components/home/feature/featured-equipment-skeleton";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ReviewSection } from "@/components/home/review/review-section";
import { ProcessSection } from "@/components/home/process-section";
import CategorySectionMain from "@/components/home/categories/CategorySectionMain";
import { CategorySectionSkeleton } from "@/components/home/categories/category-section-skeleton";

export default function Home() {
  return (
    <>
      <Hero />

      <Suspense fallback={<FeaturedEquipmentSkeleton />}>
        <FeaturedEquipment />
      </Suspense>

      <Suspense fallback={<CategorySectionSkeleton />}>
        <CategorySectionMain />
      </Suspense>

      <WhyChooseUs />

      <ReviewSection />
      {/* The process — bottom of the customer stories section */}
      <div className="my-16 sm:my-24">
        <ProcessSection />
      </div>
    </>
  );
} 
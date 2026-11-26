import { Suspense } from "react";
import { ReviewForm } from "./review-form";
import ReviewCarousel from "./review-carousel";
import { ReviewCarouselSkeleton } from "./review-carousel-skeleton";
export function ReviewSection() {
  return (
    <div aria-label="Customer reviews" className="mt-16 sm:mt-24">
      <Suspense fallback={<ReviewCarouselSkeleton />}>
        <ReviewCarousel />
      </Suspense>

      <div className="mt-12 grid grid-cols-1  sm:mt-14 lg:grid-cols-2 lg:gap-8">
        <ReviewForm />
      </div>

    </div>
  );
}

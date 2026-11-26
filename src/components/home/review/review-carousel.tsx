import React from "react";
import { ReviewCarouselChild } from "./ReviewCarouselChild";
import { IReview } from "@/types/type";


const ReviewCarousel = async () => {
  let reviews: IReview[] = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-reviews`,
      {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (res.ok) {
      reviews = await res.json();
    }
  } catch (err) {
    console.error("Failed to load reviews:", err);
  }
  return <ReviewCarouselChild reviews={reviews} />;
};

export default ReviewCarousel;

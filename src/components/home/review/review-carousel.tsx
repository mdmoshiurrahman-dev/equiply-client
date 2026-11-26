import React from "react";
import { ReviewCarouselChild } from "./ReviewCarouselChild";
import { IReview } from "@/types/type";

const ReviewCarousel = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-reviews`,
    {
      next: { revalidate: 60 },
    },
  );
  if (!res.ok) {
    console.error("Failed to load reviews:");
  }
  const reviews: IReview[] = await res.json();
  return <ReviewCarouselChild reviews={reviews} />;
};

export default ReviewCarousel;

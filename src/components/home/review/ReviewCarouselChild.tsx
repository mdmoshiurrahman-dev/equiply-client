"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { StarRating } from "./star-rating";
import { IReview } from "@/types/type";

const CARDS_PER_PAGE = 3;

function ReviewerMeta({ review }: { review: IReview }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <Avatar className="size-10">
        <AvatarImage src={review.reviewerImage} alt={review.name} />
      </Avatar>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-foreground">
          {review.name}
        </p>
        <p className="truncate text-sm text-muted-foreground">
          {new Date(review.reviewDate).toLocaleDateString("en-GB")}
        </p>
      </div>
    </div>
  );
}
function ReviewCard({ review }: { review: IReview }) {
  return (
    <figure className="flex flex-col rounded-xl border border-border bg-muted/40 p-5">
      <StarRating rating={review.rating} />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
        {review.review}
      </blockquote>

      <figcaption className="mt-5">
        <ReviewerMeta review={review} />
      </figcaption>
    </figure>
  );
}

export function ReviewCarouselChild({ reviews }: { reviews: IReview[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [page, setPage] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      if (reviews.length === 0) return;
      setPage(((next % reviews.length) + reviews.length) % reviews.length);
    },
    [reviews.length],
  );

  const visibleCards =
    reviews.length === 0
      ? []
      : Array.from(
          { length: Math.min(CARDS_PER_PAGE, reviews.length) },
          (_, offset) => reviews[(page + offset) % reviews.length],
        );

  return (
    <div aria-labelledby="customer-stories-heading">
      {/* Section header */}
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">
        Customer Stories
      </p>

      <h2
        id="customer-stories-heading"
        className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
      >
        Real Experiences. Real Results.
      </h2>

      <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
        See what people say about renting equipment through our platform.
      </p>

      {/* Featured quote card — keyed remount drives the fade-in */}
      <div className="mt-8 sm:mt-10" aria-live="polite">
        {/* <FeaturedCard review={featured} /> */}
      </div>

      {/* Prev / next controls */}
      <div className="mt-5 flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-10 rounded-full border-border bg-background"
          aria-label="Previous reviews"
          onClick={() => goTo(page - 1)}
        >
          <ArrowLeft />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-10 rounded-full border-border bg-background"
          aria-label="Next reviews"
          onClick={() => goTo(page + 1)}
        >
          <ArrowRight />
        </Button>
      </div>

      {/* Small review cards — sliding window of 3 */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map((review, index) => (
          <motion.div
            key={`key-value-${page}-${review._id}`}
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              delay: shouldReduceMotion ? 0 : index * 0.06,
            }}
          >
            <ReviewCard review={review} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** Rating value out of 5 (fractional values round down visually). */
  rating: number;
  className?: string;
}

/** Static 5-star row used on review cards. */
export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
      className={cn("flex items-center gap-1", className)}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < Math.round(rating);

        return (
          <Star
            key={index}
            aria-hidden="true"
            className={cn(
              "size-4",
              isFilled
                ? "fill-foreground text-foreground"
                : "fill-transparent text-foreground/25",
            )}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

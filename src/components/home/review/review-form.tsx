"use client";

import { useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { useSession } from "@/lib/auth-client";
import { Spinner } from "@/components/ui/spinner";
import { jwtTokenClient } from "@/lib/core/jwtTokenClient";

/** Clickable 5-star rating picker for the form. */
function RatingPicker({
  rating,
  onRate,
}: {
  rating: number;
  onRate: (value: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const shown = hovered || rating;

  return (
    <div
      role="radiogroup"
      aria-label="Your rating"
      className="flex items-center gap-1"
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        const isFilled = index < shown;

        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={rating === value}
            aria-label={`${value} star${value > 1 ? "s" : ""}`}
            onClick={() => onRate(value)}
            onMouseEnter={() => setHovered(value)}
            className="rounded p-0.5 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <Star
              aria-hidden="true"
              className={cn(
                "size-5",
                isFilled
                  ? "fill-foreground text-foreground"
                  : "fill-transparent text-foreground/25",
              )}
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}

export function ReviewForm() {
  const session = useSession();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const reviewData = Object.fromEntries(formData.entries());
    const payload = {
      ...reviewData,
      rating,
      reviewerName: session.data?.user.name,
      reviewerImage: session.data?.user.image,
    };

    const jwt = await jwtTokenClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-retting`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${session.data?.session.token}`,
          "jwt-token": `Bearer ${jwt}`,
        },
        body: JSON.stringify(payload),
      },
    );
    const result = await res.json();
    if (result.insertedId) {
      setLoading(false);
      toast.add({
        type: "success",
        description: "Your review is submitted successfully",
      });
    } else {
      setLoading(false);
      toast.add({
        type: "error",
        description: "Something is wrong",
      });
    }
  }

  const signUpToastHandler = () => {
    toast.add({
      type: "warning",
      description: "Please sign in to review",
    });
  };

  return (
    <Card className="h-full rounded-2xl ring-border">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Share Your Story</CardTitle>
        <CardDescription>
          Rented equipment through Equiply? Tell others how it went.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="review-name">Name</Label>
              <Input
                required
                id="review-name"
                name="name"
                placeholder="Alex Morgan"
                autoComplete="name"
                className="bg-muted/50"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="review-rating">Your rating</Label>
            <RatingPicker rating={rating} onRate={setRating} />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="review-quote">Your review</Label>
            <Textarea
              required
              id="review-quote"
              name="review"
              placeholder="What did you rent, and how was the experience?"
              rows={4}
              className="bg-muted/50"
            />
          </div>
          <Button
            disabled={loading}
            type={`${!session.data ? "button" : "submit"}`}
            size="lg"
            className="mt-1 w-full"
            onClick={() => {
              if (!session.data) signUpToastHandler();
            }}
          >
            {loading ? <Spinner /> : <span>Submit Review</span>}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

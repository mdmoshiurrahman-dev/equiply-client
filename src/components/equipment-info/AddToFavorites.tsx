"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import type { favoriteExistenceType } from "@/types/type";
import { jwtTokenClient } from "@/lib/core/jwtTokenClient";

const AddToFavorites = ({
  session,
  id,
  favoriteExistence,
}: {
  id: string;
  session: unknown;
  favoriteExistence: favoriteExistenceType;
}) => {
  const [fallback, setFallback] = useState(favoriteExistence.found);
  const handelFavorite = async () => {
    setFallback(!fallback);
    const jwt = await jwtTokenClient();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/add-to-favorite`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${(session as { session?: { token?: string } })?.session?.token}`,
          "jwt-token": `Bearer ${jwt}`,
        },
        body: JSON.stringify({ id }),
      },
    );
    await res.json();
  };

  return (
    <>
      <Button
        onClick={handelFavorite}
        size="lg"
        variant="outline"
        className="h-12 flex-1 py-2 rounded-lg px-8 sm:flex-none"
      >
        {fallback ? (
          <span>
            <Heart
              fill="currentColor"
              strokeWidth={0}
              className="text-red-500 size-6"
            />
          </span>
        ) : (
          <span>
            <Heart className="size-6" data-icon="inline" />
          </span>
        )}
      </Button>
    </>
  );
};

export default AddToFavorites;

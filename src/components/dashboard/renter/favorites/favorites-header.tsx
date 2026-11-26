import { Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function FavoritesHeader({ itemCount }: { itemCount: number }) {
  return (
    <div className="flex flex-col gap-2 border-b pb-6">
      <Badge className="h-7 w-fit gap-1.5 rounded-lg px-3 text-sm font-semibold">
        <Heart className="fill-current" aria-hidden />
        {String(itemCount).padStart(2, "0")} Items Saved
      </Badge>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Favorite Equipment
      </h1>
      <p className="text-sm text-muted-foreground sm:text-base">
        Keep track of equipment you love and want to rent.
      </p>
    </div>
  );
}

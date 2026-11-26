"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  availabilityOption,
  categoryOption,
  priceRangeOption,
  rentalTypeOption,
  sortByOption,
} from "./data";
import { useRouter, useSearchParams } from "next/navigation";

export function EquipmentFilters() {
  const router = useRouter();
  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    router.push(`/equipment?search=${encodeURIComponent(searchQuery)}`);
  };
  const searchParams = useSearchParams();
  const handelFilterChange = (
    key: string,
    value: string | undefined | null,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`/equipment?${params.toString()}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
      aria-label="Filter equipment"
      className="grid grid-cols-1 gap-3"
    >
      {/* Search input */}

      <form className="flex items-center" onSubmit={handelSearch}>
        <Input
          name="search"
          type="search"
          aria-label="Search by equipment name or location"
          placeholder="Search by equipment name or location..."
          className="h-9 bg-background rounded-r-none"
        />
        <Button
          type="submit"
          className="h-9 cursor-pointer rounded-l-none w-20 p"
        >
          <Search className="size-5 h-9 inline" />
        </Button>
      </form>

      <div>
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <div className="grid gap-1.5">
            <Label
              htmlFor="category"
              className="text-xs font-medium text-foreground"
            >
              Category
            </Label>
            <Select
              items={categoryOption}
              value={searchParams.get("category") ?? null}
              onValueChange={(value: string | undefined | null) => {
                handelFilterChange("category", value);
              }}
            >
              <SelectTrigger id="category" className="h-9 w-full bg-background">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categoryOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="rental-type"
              className="text-xs font-medium text-foreground"
            >
              Rental type
            </Label>
            <Select
              items={rentalTypeOption}
              value={searchParams.get("rental_type") ?? null}
              onValueChange={(value: string | undefined | null) => {
                handelFilterChange("rental_type", value);
              }}
            >
              <SelectTrigger
                id="rental-type"
                className="h-9 w-full bg-background"
              >
                <SelectValue placeholder="Select a rental type" />
              </SelectTrigger>
              <SelectContent>
                {rentalTypeOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="price-range"
              className="text-xs font-medium text-foreground"
            >
              Price range
            </Label>
            <Select
              items={priceRangeOption}
              value={searchParams.get("price_range") ?? null}
              onValueChange={(value: string | undefined | null) => {
                handelFilterChange("price_range", value);
              }}
            >
              <SelectTrigger
                id="price-range"
                className="h-9 w-full bg-background"
              >
                <SelectValue placeholder="Select a price range" />
              </SelectTrigger>
              <SelectContent>
                {priceRangeOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="availability"
              className="text-xs font-medium text-foreground"
            >
              Availability
            </Label>
            <Select
              items={availabilityOption}
              value={searchParams.get("availability") ?? null}
              onValueChange={(value: string | undefined | null) => {
                handelFilterChange("availability", value);
              }}
            >
              <SelectTrigger
                id="availability"
                className="h-9 w-full bg-background"
              >
                <SelectValue placeholder="Select availability" />
              </SelectTrigger>
              <SelectContent>
                {availabilityOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="sort-by"
              className="text-xs font-medium text-foreground"
            >
              Sort by
            </Label>
            <Select
              items={sortByOption}
              value={searchParams.get("sort_by") ?? null}
              onValueChange={(value: string | undefined | null) => {
                handelFilterChange("sort_by", value);
              }}
            >
              <SelectTrigger id="sort-by" className="h-9 w-full bg-background">
                <SelectValue placeholder="Select a sorting option" />
              </SelectTrigger>
              <SelectContent>
                {sortByOption.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          size={"sm"}
          className={"mt-3"}
          variant={"secondary"}
          onClick={() => {
            router.push("/equipment");
          }}
        >
          Clear
        </Button>
      </div>
    </motion.section>
  );
}

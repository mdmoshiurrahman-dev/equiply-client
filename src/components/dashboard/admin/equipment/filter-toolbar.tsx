"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EQUIPMENT_CATEGORIES } from "./data";

const STATUS_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "pending", label: "Pending" },
  { value: "approve", label: "Approved" },
  { value: "reject", label: "Rejected" },
] as const;

const SORT_OPTIONS = [
  { value: "recently-added", label: "Recently Added" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "quantity-desc", label: "Quantity: High to Low" },
] as const;

interface FilterSelectProps {
  label: string;
  defaultValue: string;
  options: readonly { value: string; label: string }[];
}

function FilterSelect({ label, defaultValue, options }: FilterSelectProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm text-muted-foreground md:inline">
        {label}
      </span>
      <Select items={options} defaultValue={defaultValue}>
        <SelectTrigger className="w-full min-w-36 md:w-auto">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export function FilterToolbar() {
  return (
    <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
      {/* Search */}
      <div className="relative w-full sm:w-72">
        <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search equipment by name..."
          className="bg-background pl-8"
          aria-label="Search equipment by name"
        />
      </div>

      {/* Category / Status / Sorting */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 xl:flex xl:items-center xl:gap-4">
        <FilterSelect
          label="Category"
          defaultValue="all"
          options={[
            { value: "all", label: "All Categories" },
            ...EQUIPMENT_CATEGORIES.map((category) => ({
              value: category,
              label: category,
            })),
          ]}
        />
        <FilterSelect
          label="Status"
          defaultValue="all"
          options={STATUS_OPTIONS}
        />
        <FilterSelect
          label="Sorting"
          defaultValue="recently-added"
          options={SORT_OPTIONS}
        />
      </div>
    </div>
  );
}

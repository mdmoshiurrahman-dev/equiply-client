"use client";

import {
  getSharePercent,
  type EquipmentCategorySlice,
} from "./equipment-category-data";

interface CategoryLegendProps {
  /** Category data slices */
  data?: EquipmentCategorySlice[];
  /** Index of the highlighted slice, or null when nothing is active. */
  activeIndex?: number | null;
  /** Called when the highlighted slice changes (hover on chart or legend). */
  onActiveIndexChange?: (index: number | null) => void;
}

export function CategoryLegend({
  data = [],
  activeIndex,
  onActiveIndexChange,
}: CategoryLegendProps) {
  const totalEquipment = data.reduce((sum, slice) => sum + slice.value, 0);

  return (
    <ul className="flex flex-col gap-1">
      {data.map((slice, index) => {
        const share = getSharePercent(slice.value, totalEquipment);
        const isActive = activeIndex === index;

        return (
          <li key={slice.name}>
            <button
              type="button"
              onMouseEnter={() => onActiveIndexChange?.(index)}
              onMouseLeave={() => onActiveIndexChange?.(null)}
              onFocus={() => onActiveIndexChange?.(index)}
              onBlur={() => onActiveIndexChange?.(null)}
              className={`flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                isActive ? "bg-accent" : "hover:bg-accent/50"
              }`}
            >
              <span
                aria-hidden
                className="mt-1.5 size-3 shrink-0 rounded-sm"
                style={{ backgroundColor: slice.color }}
              />
              <span className="min-w-0">
                <span className="block font-medium text-foreground">
                  {slice.name}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {slice.value} | {Math.round(share)}%
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

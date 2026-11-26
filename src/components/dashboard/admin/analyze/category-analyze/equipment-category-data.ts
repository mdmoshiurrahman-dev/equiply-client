import { TopSixCategory } from "@/types/type";

export interface EquipmentCategorySlice {
  /** Category name shown in the legend and the chart tooltip. */
  name: string;
  /** Number of registered equipment units in this category. */
  value: number;
  /** Slice color (used by both the chart and the legend dot). */
  color: string;
}

export const equipmentCategoryColors: Record<number, string> = {
  0: "#5CB985",
  1: "#4D96E0",
  2: "#F0A550",
  3: "#9B6BC9",
  4: "#E8737E",
  5: "#6EC6C4",
};

export function transformCategoryData(topSixCategory: TopSixCategory[]): EquipmentCategorySlice[] {
  if (!Array.isArray(topSixCategory)) return [];
  return topSixCategory.map((x, index) => {
    return {
      name: x._id ? x._id.split("-").map((i) => i.toUpperCase()).join(" ") : "Unknown",
      value: x.totalEquipment || 0,
      color: equipmentCategoryColors[index] || "#6EC6C4",
    };
  });
}

export async function fetchEquipmentCategoryData(): Promise<EquipmentCategorySlice[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top-six-category`,
      { signal: AbortSignal.timeout(8000) }
    );
    if (!res.ok) return [];
    const topSixCategory: TopSixCategory[] = await res.json();
    return transformCategoryData(topSixCategory);
  } catch (err) {
    console.error("Failed to fetch equipment category data:", err);
    return [];
  }
}

export function getSharePercent(value: number, total: number): number {
  if (total <= 0) return 0;
  return (value / total) * 100;
}

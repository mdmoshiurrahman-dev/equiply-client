import type { AdminEquipment, EquipmentStats } from "@/types/type";

/**
 * Placeholder dataset for the equipment management table.
 * Swap this out with real API data later — the components are fully
 * props-driven and only expect the `AdminEquipment` shape from @/types/type.
 */

const CATEGORIES = [
  "Power Tools",
  "Generators",
  "Cameras",
  "Excavators",
  "Compressors",
  "Ladders",
] as const;

const EQUIPMENT_NAMES = [
  "Cordless Drill",
  "Diesel Generator",
  "DSLR Camera Kit",
  "Mini Excavator",
  "Air Compressor",
  "Extension Ladder",
  "Angle Grinder",
  "Portable Generator",
  "Mirrorless Camera",
  "Plate Compactor",
  "Impact Wrench",
  "Step Ladder",
];

const NAME_SUFFIXES = ["MK II", "Pro", "Max", "Lite", "Plus"];

const OWNERS = [
  { name: "James Strald", email: "james.strald@equiply.com" },
  { name: "Jorive Owner" },
  { name: "Karkert Name", email: "karkert@equiply.com" },
  { name: "Johan Saker" },
  { name: "Jolien Owner", email: "jolien@equiply.com" },
  { name: "Jorden Name" },
  { name: "Jokan Owner", email: "jokan@equiply.com" },
  { name: "Amelia Hart" },
];

const PRICES = [25, 40, 55, 80, 120, 150, 95, 60];

const STATUS_CYCLE = [
  "pending",
  "approve",
  "approve",
  "reject",
  "reject",
  "approve",
  "pending",
  "approve",
  "reject",
  "approve",
] as const;

const TOTAL_RECORDS = 124;

export const EQUIPMENT_CATEGORIES: readonly string[] = CATEGORIES;

export const MOCK_EQUIPMENT: AdminEquipment[] = Array.from(
  { length: TOTAL_RECORDS },
  (_, i) => {
    const baseName = EQUIPMENT_NAMES[i % EQUIPMENT_NAMES.length];
    const suffix = i >= EQUIPMENT_NAMES.length
      ? NAME_SUFFIXES[Math.floor(i / EQUIPMENT_NAMES.length) % NAME_SUFFIXES.length]
      : "";

    return {
      _id: `eq-${String(i + 1).padStart(3, "0")}`,
      name: `${baseName}${suffix ? ` ${suffix}` : ""}`,
      category: CATEGORIES[i % CATEGORIES.length],
      ownerName: OWNERS[i % OWNERS.length].name,
      ownerEmail: i % 5 < 2 ? OWNERS[i % OWNERS.length].email : undefined,
      rentalPrice: PRICES[i % PRICES.length],
      availableQuantity: (i * 7) % 45,
      status: STATUS_CYCLE[i % STATUS_CYCLE.length],
    };
  },
);

export const EQUIPMENT_STATS: EquipmentStats = {
  total: MOCK_EQUIPMENT.length,
  pending: MOCK_EQUIPMENT.filter((item) => item.status === "pending").length,
  approved: MOCK_EQUIPMENT.filter((item) => item.status === "approve").length,
};

import type { ApplicationStat } from "@/types/type";

export const applicationStats: ApplicationStat[] = [
  { label: "Pending Applications", value: 24 },
]

export const APPLICATION_STATUS_FILTERS = [
  "All Applications",
  "Pending",
  "Approved",
  "Rejected",
] as const

/** Visually highlighted filter tab until active state is wired up. */
export const ACTIVE_STATUS_FILTER = "All Applications"

export const ROWS_PER_PAGE_OPTIONS = ["5 rows", "10 rows", "25 rows", "50 rows"]

export const DEFAULT_ROWS_PER_PAGE = "10 rows"

export const PAGINATION_PAGES: (number | "ellipsis")[] = [
  1,
  2,
  3,
  "ellipsis",
  16,
]

/** Visually highlighted page until pagination state is wired up. */
export const ACTIVE_PAGE = 1

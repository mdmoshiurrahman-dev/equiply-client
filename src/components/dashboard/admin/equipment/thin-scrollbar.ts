/**
 * Reusable Tailwind class strings for a thin, subtle scrollbar.
 *
 * - `thinScrollbar` — apply to any element that scrolls.
 * - `thinScrollbarTable` — targets the shadcn <Table>'s internal
 *   `[data-slot=table-container]` wrapper, since className passed to
 *   <Table> lands on the <table> element itself.
 */

const SCROLLBAR_TRACK =
  "[&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/40";

export const thinScrollbar =
  "[scrollbar-width:thin] [scrollbar-color:var(--border)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 " +
  SCROLLBAR_TRACK;

export const thinScrollbarTable =
  "[&_[data-slot=table-container]]:[scrollbar-width:thin] [&_[data-slot=table-container]]:[scrollbar-color:var(--border)_transparent] [&_[data-slot=table-container]]:[&::-webkit-scrollbar]:h-1.5 [&_[data-slot=table-container]]:[&::-webkit-scrollbar-track]:bg-transparent [&_[data-slot=table-container]]:[&::-webkit-scrollbar-thumb]:rounded-full [&_[data-slot=table-container]]:[&::-webkit-scrollbar-thumb]:bg-border [&_[data-slot=table-container]]:[&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground/40";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { EquipmentApplicationType } from "@/types/type";

import { FavoritesTableRow } from "./favorites-table-row";

const columns = [
  "Equipment",
  "Category",
  "Rental Price",
  "Rental Type",
  "Location",
  "Availability",
  "Actions",
] as const;

export function FavoritesTable({
  favorites,
}: {
  favorites: EquipmentApplicationType[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b bg-primary hover:bg-primary">
          {columns.map((column) => (
            <TableHead
              key={column}
              className="h-12 px-4 text-sm font-semibold text-primary-foreground first:pl-6 last:pr-6"
            >
              {column}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {favorites.length === 0 ? (
          <TableRow className="hover:bg-transparent">
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center text-muted-foreground"
            >
              No favorites saved yet.
            </TableCell>
          </TableRow>
        ) : (
          favorites.map((favorite) => (
            <FavoritesTableRow key={favorite._id} favorite={favorite} />
          ))
        )}
      </TableBody>
    </Table>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { thinScrollbarTable } from "./thin-scrollbar";
import { StatusBadge } from "./status-badge";
import { EquipmentActions } from "./action-buttons";
import { EquipmentApplicationType } from "@/types/type";

const TABLE_HEADS = [
  "Equipment Name",
  "Category",
  "Rental Price",
  "Quantity",
  "Status",
  "Actions",
] as const;

export function EquipmentTable({
  equipment,
}: {
  equipment: EquipmentApplicationType[];
}) {
  return (
    <Table className={`min-w-5xl ${thinScrollbarTable}`}>
      <TableHeader>
        <TableRow className="bg-muted/50 hover:bg-muted/50">
          {TABLE_HEADS.map((head) => (
            <TableHead
              key={head}
              className="h-11 px-3 last:text-end last:pr-6 first:pl-6"
            >
              {head}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {equipment.map((item) => (
          <TableRow key={item._id}>
            <TableCell className="px-3 pl-6 font-semibold">
              {item.equipmentName}
            </TableCell>
            <TableCell className="px-3 capitalize text-muted-foreground">
              {item.equipmentCategory.split("-").join(" ")}
            </TableCell>
            <TableCell className="px-3">
              ${item.equipmentPrice}/{item.rentalType}
            </TableCell>
            <TableCell className="px-3">{item.equipmentQuantity}</TableCell>
            <TableCell className="px-3">
              <StatusBadge status={item.status} />
            </TableCell>
            <TableCell className="px-3 pr-6 text-end">
              <EquipmentActions item={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

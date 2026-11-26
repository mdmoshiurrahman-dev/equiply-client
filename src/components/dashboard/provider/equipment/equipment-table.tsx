import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "./status-badge";
import { EquipmentActions } from "./equipment-actions";
import { EquipmentApplicationType } from "@/types/type";
const thinScrollbarClasses = [
  "[&_[data-slot=table-container]]:[scrollbar-width:thin]",
  "[&_[data-slot=table-container]]:[scrollbar-color:var(--border)_transparent]",
  "[&_[data-slot=table-container]::-webkit-scrollbar]:h-1.5 [&_[data-slot=table-container]::-webkit-scrollbar]:w-1.5",
  "[&_[data-slot=table-container]::-webkit-scrollbar-track]:bg-transparent",
  "[&_[data-slot=table-container]::-webkit-scrollbar-thumb]:rounded-full [&_[data-slot=table-container]::-webkit-scrollbar-thumb]:bg-border",
].join(" ");

export function EquipmentTable({
  equipmentList,
}: {
  equipmentList: EquipmentApplicationType[];
}) {
  return (
    <div className={thinScrollbarClasses}>
      <Table className="min-w-[820px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="h-12 pl-6 font-semibold">
              Equipment Name
            </TableHead>
            <TableHead className="h-12 px-3 font-semibold">Category</TableHead>
            <TableHead className="h-12 px-3 font-semibold">
              Rental Price
            </TableHead>
            <TableHead className="h-12 px-3 font-semibold">
              Available Quantity
            </TableHead>
            <TableHead className="h-12 px-3 font-semibold">Status</TableHead>
            <TableHead className="h-12 text-center px-3  font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {equipmentList.length === 0 ? (
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={6}
                className="py-16 text-center text-sm text-muted-foreground"
              >
                No equipment found. Try a different search or status filter.
              </TableCell>
            </TableRow>
          ) : (
            equipmentList.map((item) => (
              <TableRow key={item._id} className="text-sm">
                <TableCell className="py-4 pl-6 font-semibold">
                  {item.equipmentName}
                </TableCell>
                <TableCell className="px-3">{item.equipmentCategory}</TableCell>
                <TableCell className="px-3">{item.equipmentPrice}</TableCell>
                <TableCell className="px-3">{item.equipmentQuantity}</TableCell>
                <TableCell className="px-3">
                  <StatusBadge status={item.status} />
                </TableCell>
                <TableCell className="px-3">
                  <EquipmentActions item = {item} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

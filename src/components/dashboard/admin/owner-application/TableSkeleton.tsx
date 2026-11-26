import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const TableSkeleton = () => {
  return (
    <Table className="w-full text-sm">
      <TableHeader>
        <TableRow className="bg-muted/50 hover:bg-muted/50">
          <TableHead className="h-11 pl-6">Applicant Name</TableHead>
          <TableHead className="px-3">Email Address</TableHead>
          <TableHead className="px-3">Phone Number</TableHead>
          <TableHead className="px-3">Location</TableHead>
          <TableHead className="px-3">Applied Date</TableHead>
          <TableHead className="px-3 text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {Array.from({ length: 4 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell className="pl-6">
              <Skeleton className="h-5 w-32" />
            </TableCell>

            <TableCell className="px-3">
              <Skeleton className="h-5 w-40" />
            </TableCell>

            <TableCell className="px-3">
              <Skeleton className="h-5 w-28" />
            </TableCell>

            <TableCell className="px-3">
              <Skeleton className="h-5 w-24" />
            </TableCell>

            <TableCell className="px-3">
              <Skeleton className="h-5 w-24" />
            </TableCell>

            <TableCell className="px-3">
              <div className="flex justify-center gap-1.5">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-8 w-8 rounded-md" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;

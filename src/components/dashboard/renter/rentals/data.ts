import { CircleCheck, Clock, Package } from "lucide-react";

import type { RentalBooking, RentalStat } from "@/types/type";

// Placeholder data — will be replaced by the API once functionality is wired up.
export const rentalBookings: RentalBooking[] = [
  {
    id: "r-001",
    equipmentName: "DSLR Camera",
    startDate: "2026-11-25",
    endDate: "2026-11-28",
    bookingDate: "2026-11-22",
    totalAmount: 3000,
    paymentStatus: "paid",
    bookingStatus: "approved",
  },
  {
    id: "r-002",
    equipmentName: "Industrial Generator",
    startDate: "2026-11-27",
    endDate: "2026-12-02",
    bookingDate: "2026-11-22",
    totalAmount: 5000,
    paymentStatus: "pending",
    bookingStatus: "pending",
  },
  {
    id: "r-003",
    equipmentName: "Electric Drill",
    startDate: "2026-11-10",
    endDate: "2026-11-12",
    bookingDate: "2026-11-08",
    totalAmount: 800,
    paymentStatus: "paid",
    bookingStatus: "completed",
  },
];

export const rentalStats: RentalStat[] = [
  {
    label: "Total Rentals",
    value: rentalBookings.length,
    icon: Package,
  },
  {
    label: "Pending Rentals",
    value: rentalBookings.filter((booking) => booking.bookingStatus === "pending")
      .length,
    icon: Clock,
  },
  {
    label: "Completed Rentals",
    value: rentalBookings.filter(
      (booking) => booking.bookingStatus === "completed"
    ).length,
    icon: CircleCheck,
  },
];

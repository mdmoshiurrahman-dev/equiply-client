import type { RentalPaymentDetail } from "@/types/type";

/** Placeholder record until the details endpoint is wired up. */
export const mockRentalPaymentDetail: RentalPaymentDetail = {
  rentalId: "RENTAL-9F7E-3B2A",
  equipmentName: "Heavy-Duty Concrete Mixer (200L)",
  equipmentId: "EQ-CMIX-001A",
  pricePerUnit: 4500,
  requiredQuantity: 2,
  renterName: "Karim Ahmed",
  renterEmail: "karim.ahmed@email.co",
  renterContactNumber: "+880 1712 345678",
  rentalStartDate: "2023-11-15",
  rentalEndDate: "2023-11-22",
  rentalDurationDays: 7,
  deliveryAddress: "Plot 12, Road 5, Block C, Banani, Dhaka 1213",
  additionalNotes: "Please deliver before 9 AM.",
  totalAmount: 63000,
  paymentStatus: "paid",
  paymentDate: "2023-10-24",
  paymentRequestId: "TXN-1122-3344-5586",
};

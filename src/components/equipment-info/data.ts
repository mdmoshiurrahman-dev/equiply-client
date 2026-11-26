import type { EquipmentInfoData } from "@/types/type";

/**
 * Mock data for the equipment detail page.
 * Replace the `mockEquipment` object with real data later — the UI
 * components only consume these props, so nothing else needs to change.
 */

export const mockEquipment: EquipmentInfoData = {
  id: "1",
  category: "Photography Equipment",
  name: "Canon EOS 90D",
  location: "Dhaka, Bangladesh",
  description:
    "A professional DSLR camera designed for high-quality photography and video production. Ideal for professional photographers, content creators, and photography enthusiasts.",
  currency: "৳",
  pricePerDay: 1200,
  rentalType: "Daily",
  availableQuantity: "4 units",
  condition: "Excellent",
  isAvailable: true,
  about:
    "Equipment must be returned in the same condition, it's realistically well to realistic-spaced reascription. Reralstis: s calculates rental period is the realcd on type. Any damage during the rental period is the mos creators, and photography enthusiasts.",
  specs: [
    { label: "Brand", value: "Canon" },
    { label: "Model", value: "EOS 90D" },
    { label: "Category", value: "Photography Equipment" },
    { label: "Condition", value: "Excellent" },
  ],
  owner: {
    name: "Rahim Ahmed",
    role: "Equipment Provider",
    location: "Dhaka, Bangladesh",
    avatarUrl: undefined,
  },
  rentalTerms: {
    numbered: ["Equipment must be returned in the same condition."],
    bullets: [
      "Rental duration is calculated according to the selected rental type.",
      "Any damage during the rental period is the renter's responsibility.",
      "Equipment must be returned within the agreed rental period.",
    ],
  },
};

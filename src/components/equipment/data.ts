export const TOTAL_EQUIPMENT_COUNT = 24;
export const PAGINATION_PAGES = [1, 2, 3] as const;

export const categoryOption = [
  { label: "All Categories", value: "all-categories" },
  { label: "Electrical Equipment", value: "electrical-equipment" },
  { label: "Photography", value: "photography" },
  { label: "Construction", value: "construction" },
  { label: "Agricultural Equipment", value: "agricultural-equipment" },
  { label: "Audio & Video", value: "audio-video" },
  { label: "Medical Equipment", value: "medical-equipment" },
];

export const rentalTypeOption = [
  { label: "All Rental Types", value: "all-rental-types" },
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];
export const priceRangeOption = [
  { label: "All Prices", value: "all-prices" },
  { label: "Under ৳1,000", value: "0-1000" },
  { label: "৳1,000 – ৳3,000", value: "1000-3000" },
  { label: "৳3,000 – ৳5,000", value: "3000-5000" },
  { label: "৳5,000 – ৳10,000", value: "5000-10000" },
  { label: "৳10,000 – ৳20,000", value: "10000-20000" },
  { label: "Above ৳20,000", value: "20000-999999999" },
];

export const availabilityOption = [
  { label: "All Availability", value: "all-availability" },
  { label: "Available", value: "available" },
  { label: "Unavailable", value: "unavailable" },
];

export const sortByOption = [
  { label: "Recently Added", value: "recently-added" },
  { label: "Price: Low to High", value: "price-low-to-high" },
  { label: "Price: High to Low", value: "price-high-to-low" },
];

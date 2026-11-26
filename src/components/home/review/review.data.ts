import type { Review } from "@/types/type";

/** Reviews shown in the large featured quote card (cycles with the carousel). */
export const FEATURED_REVIEWS: Review[] = [
  {
    id: "featured-1",
    quote:
      "Finding the right equipment was simple, and the rental experience was smooth from start to finish.",
    name: "Alex Morgan",
    role: "Construction Project Manager",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "featured-2",
    quote:
      "Renting heavy machinery used to take days of phone calls. Now it takes minutes, and every booking is transparent.",
    name: "James Carter",
    role: "Site Engineer",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=59",
  },
  {
    id: "featured-3",
    quote:
      "Verified owners and secure payments give us total peace of mind on every single project.",
    name: "Priya Rahman",
    role: "Operations Manager",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=45",
  },
];

/** Reviews shown in the smaller card row (slides one card per page). */
export const CARD_REVIEWS: Review[] = [
  {
    id: "card-1",
    quote:
      "The equipment owner was reliable, and the entire process felt secure and straightforward.",
    name: "Sarah Wilson",
    role: "Event Planner",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "card-2",
    quote:
      "Booking equipment for our event was easier than expected. I would definitely use it again.",
    name: "Michael Chang",
    role: "Operations Director",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=53",
  },
  {
    id: "card-3",
    quote:
      "Equiply's platform saved us weeks of searching. The excavator was in perfect condition.",
    name: "David Lee",
    role: "Site Supervisor",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: "card-4",
    quote:
      "Great selection of gear at fair prices. Support responded to my question within minutes.",
    name: "Amina Haque",
    role: "Photographer",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/150?img=26",
  },
  {
    id: "card-5",
    quote:
      "Flexible rental periods made it easy to plan around our harvest schedule without any hassle.",
    name: "Tanvir Hasan",
    role: "Farm Manager",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=33",
  },
];

/** Number of carousel pages (one step moves the card row by a single card). */
export const REVIEW_PAGE_COUNT = CARD_REVIEWS.length;

import type {
  RoleFilterOption,
  User,
  UserRole,
} from "@/types/type";

export const USER_ROLES = [
  "Customer",
  "Owner",
  "Admin",
] as const satisfies readonly UserRole[];

export const ROLE_FILTER_OPTIONS = [
  "All Roles",
  ...USER_ROLES,
] as const satisfies readonly RoleFilterOption[];

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alice Green",
    email: "registered@address.com",
    role: "Customer",
    joinedLabel: "Joined 2022 12:48 PM",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob.smith@customer.com",
    role: "Owner",
    joinedLabel: "Joined 2022 12:44 PM",
  },
  {
    id: "3",
    name: "Catherine Jones",
    email: "catherine.jones@bobdress.com",
    role: "Admin",
    joinedLabel: "Joined 2022 12:48 PM",
  },
  {
    id: "4",
    name: "Alice Green",
    email: "registered@tgmail.com",
    role: "Owner",
    joinedLabel: "Joined 2022 12:48 PM",
  },
  {
    id: "5",
    name: "Catherine Jones",
    email: "registeredaddress.com",
    role: "Admin",
    joinedLabel: "Joined 2022 12:42 PM",
  },
  {
    id: "6",
    name: "Bob Smith",
    email: "registered@smith.com",
    role: "Admin",
    joinedLabel: "Joined 2022 12:48 PM",
  },
  {
    id: "7",
    name: "Alice Green",
    email: "registered@address.com",
    role: "Admin",
    joinedLabel: "Joined 2022 12:48 PM",
  },
];

/** Derived initials for the avatar fallback, e.g. "Alice Green" -> "AL". */
export function getUserInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

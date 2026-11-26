import type {
  RoleFilterOption,
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

/** Derived initials for the avatar fallback, e.g. "Alice Green" -> "AL". */
export function getUserInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

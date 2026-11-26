import {
  CalendarCheck,
  ChartGantt,
  ClipboardList,
  FileCheck,
  Heart,
  Package,
  PlusCircle,
  Settings,
  UserRound,
  Users,
} from "lucide-react";

import type {
  DashboardRole,
  SidebarSection,
} from "@/types/type";

export const sidebarLinks: Record<DashboardRole, SidebarSection[]> = {
  admin: [
    {
      label: "Management",
      links: [
        { label: "User Management", href: "/dashboard/admin", icon: Users },
        {
          label: "Owner Applications",
          href: "/dashboard/admin/owner-applications",
          icon: FileCheck,
        },
        {
          label: "Equipment Management",
          href: "/dashboard/admin/equipment",
          icon: Package,
        },
        {
          label: "Rental Management",
          href: "/dashboard/admin/rentals",
          icon: CalendarCheck,
        },
         {
          label: "Analyze",
          href: "/dashboard/admin/analyze",
          icon: ChartGantt
        },
      ],
    },
    {
      label: "Preferences",
      links: [
        {
          label: "Account Settings",
          href: "/dashboard/profile",
          icon: Settings,
        },
      ],
    },
  ],
  renter: [
    {
      label: "Rentals",
      links: [
        {
          label: "My Rentals",
          href: "/dashboard/renter",
          icon: CalendarCheck,
        },
        {
          label: "Favorites",
          href: "/dashboard/renter/favorites",
          icon: Heart,
        },
      ],
    },
    {
      label: "Preferences",
      links: [
        {
          label: "My Profile",
          href: "/dashboard/profile",
          icon: UserRound,
        },
      ],
    },
  ],
  provider: [
    {
      label: "Listings",
      links: [
        {
          label: "Add Equipment",
          href: "/dashboard/provider",
          icon: PlusCircle,
        },
        {
          label: "My Listings",
          href: "/dashboard/provider/equipment",
          icon: Package,
        },
      ],
    },
    {
      label: "Rentals",
      links: [
        {
          label: "Rental Requests",
          href: "/dashboard/provider/rentals",
          icon: ClipboardList,
        },
      ],
    },
    {
      label: "Preferences",
      links: [
        {
          label: "My Profile",
          href: "/dashboard/profile",
          icon: UserRound,
        },
      ],
    },
  ],
};

export const roleLabels: Record<DashboardRole, string> = {
  admin: "Administrator",
  renter: "Renter",
  provider: "Provider",
};


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type { SidebarSection } from "@/types/type";

export function SidebarNav({ sections }: { sections: SidebarSection[] }) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <nav aria-label="Dashboard navigation">
      {sections?.map((section) => (
        <SidebarGroup
          key={section.label}
          className="border-b border-sidebar-border px-3 py-6 last:border-b-0"
        >
          <SidebarGroupLabel className="mb-3 px-3 text-xs font-semibold tracking-wide text-sidebar-foreground/55 uppercase">
            {section.label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {section.links.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href;

                return (
                  <SidebarMenuItem
                    key={href}
                    className={
                      isActive
                        ? "before:absolute before:inset-y-0 before:-left-3 before:w-1 before:rounded-r-full before:bg-sidebar-foreground"
                        : undefined
                    }
                  >
                    <SidebarMenuButton
                      render={
                        <Link
                          href={href}
                          aria-current={isActive ? "page" : undefined}
                        />
                      }
                      isActive={isActive}
                      onClick={() => setOpenMobile(false)}
                      className="h-10 gap-4 rounded-lg px-3 text-[15px] font-normal text-sidebar-foreground/60 hover:text-sidebar-foreground data-active:font-medium [&_svg]:size-6"
                    >
                      <Icon aria-hidden="true" strokeWidth={1.7} />
                      <span>{label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </nav>
  );
}

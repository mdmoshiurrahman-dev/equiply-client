"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, Settings, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { toast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";

type SidebarUserDetails = {
  name: string;
  email?: string;
  role: string;
  avatarUrl?: string;
};

export function SidebarUser({
  user,
  profileHref,
}: {
  user: SidebarUserDetails;
  profileHref: string;
}) {
  const router = useRouter();
  const { isMobile, setOpenMobile } = useSidebar();

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setOpenMobile(false);
          router.push("/sign-in");
          router.refresh();
        },
        onError: () => {
          toast.add({ title: "Could not sign out", type: "error" });
        },
      },
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="group flex w-full items-center gap-3 rounded-lg p-2 text-left outline-none transition-colors hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          />
        }
      >
        <Avatar className="size-11">
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt="" />}
          <AvatarFallback className="bg-neutral-200 text-neutral-700">
            <UserRound className="size-7" aria-hidden="true" />
          </AvatarFallback>
        </Avatar>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="truncate text-base font-medium text-sidebar-foreground">
            {user.name}
          </span>
          <span className="truncate text-sm text-sidebar-foreground/55">
            {user.role}
          </span>
        </span>
        <ChevronDown
          className="size-4 shrink-0 text-sidebar-foreground/55 transition-transform group-data-[popup-open]:rotate-180"
          aria-hidden="true"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side={isMobile ? "top" : "right"}
        sideOffset={8}
        className="w-56"
      >
        <div className="truncate px-2 py-1.5 text-xs text-muted-foreground">
          {user.email}
        </div>

        <DropdownMenuItem
          render={<Link href={profileHref} />}
          onClick={() => setOpenMobile(false)}
        >
          <Settings />
          Account settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

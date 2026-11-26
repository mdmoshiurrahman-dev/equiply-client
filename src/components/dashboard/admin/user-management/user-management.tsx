import { UserData } from "@/types/type";
import { UsersTable } from "./users-table";

export function UserManagement({userDataInfo}:{userDataInfo:UserData[]}) {
  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          User Management
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage registered users and control their platform roles.
        </p>
      </header>
      {/* <UserFilters /> */}
      <UsersTable userDataInfo = {userDataInfo} />
    </div>
  );
}

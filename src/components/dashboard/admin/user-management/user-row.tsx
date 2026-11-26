import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { getUserInitials } from "./data/users";
import { UserRowActions } from "./user-row-actions";
import { UserData } from "@/types/type";
import { Badge } from "@/components/ui/badge";

export function UserRow({ user }: { user: UserData }) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2.5">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getUserInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{user.name}</span>
        </div>
      </TableCell>
      <TableCell className="text-muted-foreground">{user.email}</TableCell>
      <TableCell>
        <Badge variant="secondary">{user.role}</Badge>
      </TableCell>
      <TableCell>
        {new Date(user.applicationDate).toLocaleDateString("en-GB", {
          timeZone: "UTC",
        })}
      </TableCell>
      <TableCell className="text-right">
        <UserRowActions user  ={user} />
      </TableCell>
    </TableRow>
  );
}

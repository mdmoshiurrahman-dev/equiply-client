import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserRow } from "./user-row";
import { UserData } from "@/types/type";

export function UsersTable({userDataInfo}:{userDataInfo:UserData[]}) {
  return (
    <section className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <div className="px-4 pt-4 pb-3 sm:px-6">
        <h2 className="text-lg font-semibold">Users Table</h2>
      </div>
      <div className="px-3 pb-4 sm:px-4">
        {/* Only the table scrolls horizontally on small screens, never the page. */}
        <div className="overflow-hidden rounded-lg border">
          <Table className="min-w-[860px]">
            <TableHeader>
              <TableRow>
                <TableHead className="px-3">User</TableHead>
                <TableHead className="px-3">Email</TableHead>
                <TableHead className="px-3">Role</TableHead>
                <TableHead className="px-3">Joined Date</TableHead>
                <TableHead className="px-3 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userDataInfo.map((user) => (
                <UserRow key={user._id} user={user} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="border-t">
        {/* <UsersTablePagination /> */}
      </div>
    </section>
  );
}

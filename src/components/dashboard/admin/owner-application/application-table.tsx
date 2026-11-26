import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActionButtons } from "./application-action";
import { loadUserSessionFromServerComponent } from "@/lib/core/loadUserSessionFromServerComponent";
import { jwtToken } from "@/lib/core/jwtToken";
import { UserApplication } from "@/types/type";
import NoApplications from "./NoApplicationFallback";

export async function ApplicationsTable() {
  const session = await loadUserSessionFromServerComponent();
  const jwt = await jwtToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-all-applicant-data`,
    {
      headers: {
        authorization: `Bearer ${session?.session.token}`,
        "jwt-token": `Bearer ${jwt}`,
      },
      signal: AbortSignal.timeout(8000),
    },
  );
  if (!res.ok) {
    console.error("Failed to fetch applicant data:");
  }

  const ownerApplications: UserApplication[] = await res.json();
  return ownerApplications.length > 0 ? (
    <Table className="min-w-5xl  text-sm">
      <TableHeader>
        <TableRow className="bg-muted/50 hover:bg-muted/50">
          <TableHead className="h-11 pl-6 ">Applicant Name</TableHead>
          <TableHead className="px-3 ">Email Address</TableHead>
          <TableHead className="px-3 ">Phone Number</TableHead>
          <TableHead className="px-3 ">Applied Date</TableHead>
          <TableHead className="px-3 text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {ownerApplications.map((application) => (
          <TableRow key={application._id}>
            <TableCell className="pl-6  font-semibold">
              {application.name}
            </TableCell>
            <TableCell className="px-3">{application.email}</TableCell>
            <TableCell className="px-3 ">{application.tel_no}</TableCell>
            <TableCell className="px-3 ">
              {new Date(application.applicationDate).toLocaleDateString(
                "en-GB",
              )}
            </TableCell>
            <TableCell className="px-3 flex justify-center items-center gap-1.5">
              <ActionButtons application={application} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    <NoApplications />
  );
}

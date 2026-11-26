import { RoleGuard } from "@/components/dashboard/role-guard";

const RenterLayout = ({ children }: { children: React.ReactNode }) => (
  <RoleGuard role="renter">{children}</RoleGuard>
);

export default RenterLayout;

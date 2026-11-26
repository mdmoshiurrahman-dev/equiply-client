import { RoleGuard } from "@/components/dashboard/role-guard";

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <RoleGuard role="admin">{children}</RoleGuard>
);

export default AdminLayout;

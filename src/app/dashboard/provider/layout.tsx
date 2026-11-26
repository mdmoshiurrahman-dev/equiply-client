import { RoleGuard } from "@/components/dashboard/role-guard";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => (
  <RoleGuard role="provider">{children}</RoleGuard>
);

export default ProviderLayout;
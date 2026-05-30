// Server component — prevents static pre-rendering of all /admin routes
export const dynamic = "force-dynamic";

import AdminClientLayout from "./AdminClientLayout";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminClientLayout>{children}</AdminClientLayout>;
}

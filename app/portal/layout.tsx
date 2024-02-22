import { Resizable } from "../components/ui/resizable/resizable";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Resizable>{children}</Resizable>
    </div>
  );
}

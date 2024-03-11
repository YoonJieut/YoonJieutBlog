import { AdminSideNav } from "../../components/ui/Organism/SideNav/AdminSideNav";
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="adminRoot flex w-screen h-screen overflow-hidden">
      <AdminSideNav />
      <main className="w-full h-full">{children}</main>
    </div>
  );
}

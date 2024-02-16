export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="adminRoot flex w-screen, h-screen">
      <section className="outline outline-1 w-1/12 h-full">
        sidebar area
      </section>
      <main className="w-4/5 h-full">{children}</main>
    </div>
  );
}

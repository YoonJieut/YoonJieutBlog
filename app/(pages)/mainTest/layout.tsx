import MainFooter from "@/app/components/ui/Organism/Footer/MainFooter";

export default function MainTestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div
          id="MainTestRoot"
          className="w-screen h-screen overflow-hidden flex flex-col p-2 space-y-2"
        >
          {children}
          <MainFooter />
        </div>
      </body>
    </html>
  );
}

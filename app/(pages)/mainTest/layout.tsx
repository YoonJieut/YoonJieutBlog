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
          id="MainRoot"
          className="w-screen h-screen overflow-hidden flex flex-col p-2 space-y-[10px]"
        >
          {children}
          <MainFooter />
        </div>
      </body>
    </html>
  );
}

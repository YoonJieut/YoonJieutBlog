import FooterTest from "@/app/components/ui/Organism/Footer/FooterTest";

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
          <FooterTest />
        </div>
      </body>
    </html>
  );
}

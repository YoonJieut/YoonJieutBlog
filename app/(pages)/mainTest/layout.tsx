import FooterTest from "@/app/components/ui/testUi/FooterTest";

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
          className="w-screen h-screen overflow-hidden flex flex-col"
        >
          {children}
          <FooterTest />
        </div>
      </body>
    </html>
  );
}

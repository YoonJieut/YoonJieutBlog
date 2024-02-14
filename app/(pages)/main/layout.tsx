import IntroduceLayout from "@/app/components/main/IntroduceLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mainPageRoot w-screen h-screen p-3">
      <IntroduceLayout />
      <main className="outline outline-1">{children}</main>
      <footer className="outline outline-1">푸터</footer>
    </div>
  );
}

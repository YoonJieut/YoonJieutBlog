import IntroduceLayout from "@/app/components/main/IntroduceLayout";
import MenuNav from "../../components/main/MenuNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mainPageRoot w-screen p-3">
      <IntroduceLayout />
      <main className="outline outline-1">{children}</main>
      <MenuNav />
    </div>
  );
}

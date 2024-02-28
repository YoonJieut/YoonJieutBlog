import FlowAni from "../../components/animation/FlowAni";
import LargeText from "../../components/ui/LargeText";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mainPageRoot w-screen h-screen overflow-x-hidden p-3 ">
      <main className="outline outline-1 flex flex-col space-y-40">
        {children}
      </main>
    </div>
  );
}

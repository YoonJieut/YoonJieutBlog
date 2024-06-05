import MainFooter from "@/app/components/ui/Organism/Footer/MainFooter";
import IntroduceLayout from "@/app/components/ui/Page/introduce/IntroduceLayout";

export default function MainLayout() {
  return (
    <html lang="ko">
      <body>
        <div
          id="MainRoot"
          className="w-screen h-screen overflow-hidden flex flex-col p-2 space-y-[10px]"
        >
          <IntroduceLayout />
          <MainFooter />
        </div>
      </body>
    </html>
  );
}

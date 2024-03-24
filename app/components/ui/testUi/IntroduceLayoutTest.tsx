import Section from "@/app/components/ui/atom/Basic/Section";
import DotLine from "@/app/components/ui/design/dotLine";
import MainBanner from "../Molecules/Title/MainBanner";
import WelcomePart from "../Molecules/etc/WelcomePart";
import IntroImgCard from "@/app/components/ui/Molecules/ImgCard/IntroImgCard";
// component/main/IntroduceLayoutTest.tsx
// 위쪽 상단, 자신을 소개하는 레이아웃입니다.

export default function IntroduceLayoutTest() {
  return (
    <div className="introLayout w-full h-full flex justify-between overflow-hidden">
      <Section className="leftImgSection w-4/5 h-full bg-basic relative">
        {/* 배경 flowAni */}
        <WelcomePart />
        {/* z-10의 가리는 여백 디자인 */}
        <div className="SpaceDiv w-full h-4/7 bg-basic absolute bottom-0 left-0  z-20"></div>
      </Section>
      <Section className="rightImgSection w-1/5 h-full bg-main-1 relative flex flex-col">
        <div className="rightTop w-full relative h-3/7">
          {/* YoonJieut 메인 배너 자리 */}
          {/* todo : 마우스 올라가면 텍스트 겹치는 애니메이션 */}
          <MainBanner />
        </div>
        <div className="w-full h-[4px] bg-basic relative">
          <DotLine />
        </div>
        <div className="rightBottom w-full relative h-4/7 p-9">
          {/* 이미지 카드 파트 */}
          <IntroImgCard />
        </div>
      </Section>
    </div>
  );
}

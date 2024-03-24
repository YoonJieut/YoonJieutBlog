import Section from "@/app/components/ui/atom/Basic/Section";
import DotLine from "@/app/components/ui/design/dotLine";
import Image from "next/image";
import MainBanner from "../Molecules/Title/MainBanner";
import WelcomePart from "../Molecules/etc/WelcomePart";
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
          <div className="flex flex-col items-end gap-4">
            <Image
              src="/images/kakao-talk-202402182120487351.png"
              alt="개인 포트폴리오 사이트입니다."
              width={150}
              height={244}
            />
            <p className="text-[12px] leading-5 w-44 text-right">
              안녕하세요! <br />
              입체적인 <br />
              노력을 아끼지 않는 <br />
              프론트엔드 개발자 윤준현입니다.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

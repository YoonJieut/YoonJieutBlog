// component/main/IntroduceLayoutTest.tsx
// 위쪽 상단, 자신을 소개하는 레이아웃입니다.

import Section from "../Atom/Basic/Section";
import DotLine from "../design/dotLine";
// todo position 써서 마무리하라
export default function IntroduceLayoutTest() {
  return (
    <div className="introLayout w-full h-full flex justify-between overflow-hidden">
      <Section className="leftImgSection w-full h-full bg-basic"></Section>
      <Section className="rightImgSection w-1/5 h-full bg-main-1 relative flex flex-col">
        <div className="w-full relative h-3/7 "></div>
        <div className="w-full h-[5px] bg-basic"></div>
        <DotLine />
        <div className="w-full relative h-4/7 "></div>
      </Section>
    </div>
  );
}

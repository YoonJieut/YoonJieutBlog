import Section from "@/app/components/ui/Atom/Basic/Section";
import DotLine from "@/app/components/ui/design/dotLine";
// component/main/IntroduceLayoutTest.tsx
// 위쪽 상단, 자신을 소개하는 레이아웃입니다.

export default function IntroduceLayoutTest() {
  return (
    <div className="introLayout w-full h-full flex justify-between overflow-hidden">
      <Section className="leftImgSection w-4/5 h-full bg-basic relative">
        {/* 배경 flowAni */}
        <div
          className="absolute z-20 left-[-154px] top-[18rem]"
          style={{
            transform: "rotate(-40deg)",
            transformOrigin: "left top",
          }}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <p
              key={index}
              className={`WelcomeTxt homemadeApple text-[12.5rem]`}
              style={{
                lineHeight: "1.1",
                width: "fit-content",
                height: "fit-content",
                whiteSpace: "nowrap", // Add this line to remove line breaks
                marginLeft: `${(index + 1) * 12}rem`,
                opacity: `${(Array.from({ length: 4 }).length - index) * 0.1}`,
              }}
            >
              Welcome Welcome
            </p>
          ))}
        </div>
        {/* z-10의 가리는 여백 디자인 */}
        <div className="SpaceDiv w-full h-4/7 bg-basic absolute bottom-0 left-0 Testing z-10"></div>
      </Section>
      <Section className="rightImgSection w-1/5 h-full bg-main-1 relative flex flex-col">
        <div className="w-full relative h-3/7 "></div>
        <div className="w-full h-[5px] bg-basic"></div>
        <DotLine />
        <div className="w-full relative h-4/7 "></div>
      </Section>
    </div>
  );
}

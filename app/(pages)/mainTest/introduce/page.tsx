import Image from "next/image";
import Link from "next/link";
import Section from "@/app/components/ui/Atom/Basic/Section";
import IntroMenu from "@/app/components/ui/Molecules/Menu/IntroMenu";
import IntrodcueCircle from "@/app/components/ui/design/IntroduceCircle";
import portfolioMetaData from "@/app/_constants/portfolio/portfolioMessage";
export default function IntroduceTestPage() {
  return (
    <main className="h-full w-full flex px-[100px] border border-sub-1 overflow-hidden">
      <Section className="leftIntro flex items-center w-1/2 h-full">
        <Link href="/mainTest/aboutme">
          <Image
            src={"/images/kakao-talk-202402182120487351.png"}
            alt="웹 개발자 윤준현입니다."
            width={200}
            height={200}
          />
        </Link>
      </Section>
      <Section className="rightIntro relative w-1/2 h-full">
        {/* todo : 버튼에 따라 이미지가 달라져야 한다. */}
        {/* 컴포넌트화 해야한다. */}
        <div className="content w-full h-full flex flex-col items-end gap-14 mt-[140px]">
          <IntroMenu />
          <IntrodcueCircle />
        </div>
      </Section>
    </main>
  );
}

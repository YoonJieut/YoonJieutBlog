import Section from "@/app/components/ui/Atom/Basic/Section";
import Image from "next/image";
import Link from "next/link";
import IntroMenu from "@/app/components/ui/Molecules/Menu/IntroMenu";
import IntrodcueCircle from "../../../components/ui/design/IntroduceCircle";

export default function IntroduceTestPage() {
  return (
    <main className="h-full w-full flex px-[100px] border border-sub-1 overflow-hidden">
      <Section className="leftIntro flex items-center w-1/2 h-full">
        <Link href="/mainTest/aboutme">
          <Image
            src={"/images/kakao-talk-202402182120487351.png"}
            alt="웹 개발자 윤준현입니다."
            width={150}
            height={200}
          />
        </Link>
      </Section>
      <Section className="rightIntro relative w-1/2 h-full">
        {/* todo : 버튼에 따라 이미지가 달라져야 한다. */}
        {/* 컴포넌트화 해야한다. */}
        <div className="content w-full h-full flex flex-col items-end gap-14 mt-[140px]">
          <IntroMenu></IntroMenu>
          <div className="rightAlignImgCard flex flex-col justify-end items-end gap-4 Testing">
            <Image
              src="/images/entry.png"
              alt="이미지 설명"
              width={450}
              height={220}
              className="ImageCardImg Testing flex justify-end"
            />
            <div className="ImageCardTextArea max-w-[600px]">
              <p className="text-right leading-7 text-[14px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Ratione facere eaque error, inventore harum enim ab assumenda
                placeat possimus officia! Libero distinctio, fugit vero
                consectetur sapiente officiis a nulla placeat.
              </p>
            </div>
          </div>
          <IntrodcueCircle />
        </div>
      </Section>
    </main>
  );
}

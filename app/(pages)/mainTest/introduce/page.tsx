import Section from "@/app/components/ui/Atom/Basic/Section";
import Image from "next/image";
import Link from "next/link";
import IntroduceLayout from "../../../components/ui/Temp/IntroduceLayout";

export default function IntroduceTestPage() {
  return (
    <main className="h-full w-full flex px-[100px] Testing">
      <Section className="leftIntro flex items-center h-full">
        <Link href={"/mainTest/aboutme"}>
          <Image
            src={"/images/kakao-talk-202402182120487351.png"}
            alt="웹 개발자 윤준현입니다."
            width={150}
            height={200}
          />
        </Link>
      </Section>
      <Section className="rightIntro relative h-full flex flex-col">
        <IntroduceTestPage />
        {/* <LargeImgCard /> */}
      </Section>
    </main>
  );
}

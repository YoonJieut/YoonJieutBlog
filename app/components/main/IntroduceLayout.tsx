// component/main/IntroduceLayout.tsx
// 위쪽 상단, 자신을 소개하는 레이아웃입니다.

// todo : 이미지 경로 설정할 것

import Image from "next/image";
import LargeText from "../ui/LargeText";

export default function IntroduceLayout() {
  return (
    <div className="introLayout w-full h-screen flex justify-between outline outline-1 mb-3 overflow-hidden">
      <div className="introLeft w-1/6 h-full flex-col flex OutLine relative">
        <div className="introTextArea w-full h-1/4 absolute left-full flex items-end">
          안녕하세요! 저는 윤준현이라고 합니다. <br />
          현재 프론트엔드 개발자 지망생이며 <br />
          주로 쓰는 기술은 Reat, Next.js, express 등 입니다.
        </div>
        <div className="w-full h-1/3"></div>
        <div className="imgCardArea w-3/4 h-1/3 OutLine self-end">
          <Image src="" alt="Profile" width={150} height={250} />
          <div className="w-full h-fit">
            <h2 className="text-left w-full mb-2">나를 소개합니다.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="OutLine w-5/6 h-1/4 self-end flex items-end">
        <LargeText />
        <LargeText />
      </div>
    </div>
  );
}

// component/main/IntroduceLayout.tsx
// 위쪽 상단, 자신을 소개하는 레이아웃입니다.

// todo : 이미지 경로 설정할 것

import Image from "next/image";

export default function IntroduceLayout() {
  return (
    <div className="introLayout w-full h-screen flex justify-between items-center outline outline-1 mb-3 overflow-x-hidden">
      <div className="w-1/6 h-full"></div>
      <div className="introLeft w-1/6 h-[450px] flex-col flex justify-center items-start">
        <Image src="" alt="Profile" width={300} height={400} />
        <div className="w-full h-fit">
          <h2 className="text-left w-full mb-2">나를 소개합니다.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="introRight w-5/6 h-[450px] flex justify-end items-center "></div>
    </div>
  );
}

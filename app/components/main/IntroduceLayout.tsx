// component/main/IntroduceLayout.tsx
// 위쪽 상단, 자신을 소개하는 레이아웃입니다.

// todo : 이미지 경로 설정할 것

import Image from "next/image";

export default function IntroduceLayout() {
  return (
    <div className="introLayout flex justify-between items-center outline outline-1 mb-3 overflow-x-hidden">
      <div className="introLeft w-1/2 h-[450px] flex justify-center items-center">
        <Image src="" alt="Profile" width={300} height={400} />
      </div>
      <div className="introRight w-1/2 h-[450px] flex justify-center items-center flex-col">
        <h3 className="text-left w-full mb-2">나를 소개합니다.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus placeat dolorem quos nulla. Ipsam eos molestiae
          explicabo amet pariatur cupiditate magni, fugit rerum id omnis facilis
          facere, nulla itaque aut.
        </p>
      </div>
    </div>
  );
}

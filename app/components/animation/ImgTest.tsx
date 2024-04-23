"use client";

import { useEffect, useRef, useState } from "react";

// todo : 해당 컴포넌트에는 프로필 이미지에 관련된 애니메이션 효과를 구현한다.
// 1. 부모 div가 존재합니다.
// 2. 사진 영역 div가 존재합니다.
// 3. 이 사진 영역에 이미지가 존재합니다. 이 이미지는 고정되어 있습니다.
// 4. 이 사진영역을 위에 div가 따로 존재합니다. 이 div를 통해서만 이미지가 보여야 합니다.
// 5. 보여지는 div는 부모 div의 마우스에 따라 이동되게 됩니다.

export default function ImgTest() {
  return (
    <div className="w-full h-full absolute overflow-hidden pointer-events-none Testing">
      <img
        src="/images/kakao-talk-202402182120487351.png"
        alt="Follow the Mouse"
        className="absolute"
      />
    </div>
  );
}

// UnnderBarAni.tsx
// children에 있는 길이에 맞춰 호버 했을 때, 언더바 애니메이션이 생성됩니다.

"use client";

import React, { useRef, useEffect } from "react";

type UnderBarAniProps = {
  children: React.ReactNode;
};

// ? style-in-jsx를 활용하면 내부에 스타일 태그 생성 가능

// * JS를 활용한 언더바 애니메이션
// 조건 : 자식 노드를 활용한다.
// 1. MOUSEENTER 할 때, 0~100% 길이로 언더바가 생성된다.
// 2. MOUSELEAVE 할 때, 100%~0 길이로 언더바가 사라진다.

// * 구현 방법
// 1. children을 인지한다.
// 2. 길이를 측정한다.
// 3. 마우스 enter, leave 이벤트를 생성한다.
// 4. 애니메이션을 생성한다. (width를 0에서 100%로 변경하고 그와 반대로 실행)

const UnderBarAni = () => {
  return <>helloWorld</>;
};
export default UnderBarAni;

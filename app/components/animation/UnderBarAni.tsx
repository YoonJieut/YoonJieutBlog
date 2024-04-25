// UnnderBarAni.tsx
// children에 있는 길이에 맞춰 호버 했을 때, 언더바 애니메이션이 생성됩니다.

"use client";

import { useEffect, useRef } from "react";

type UnderBarAniProps = {
  children: React.ReactNode;
};

// ? style-in-jsx를 활용하면 내부에 스타일 태그 생성 가능

// * JS를 활용한 언더바 애니메이션
// 조건 : 자식 노드를 활용한다.
// 1. MOUSEENTER 할 때, 0~100% 길이로 언더바가 생성된다.
// 2. MOUSELEAVE 할 때, 100%~0 길이로 언더바가 사라진다.

// * 구현 방법
// 마우스 enter, leave 이벤트를 생성한다.
// 애니메이션을 생성한다. (width를 0에서 100%로 변경하고 그와 반대로 실행)

const UnderBarAni: React.FC<UnderBarAniProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      console.log("container - ", container);
      console.dir(container);
      const underline = container.children[
        container.children.length - 1
      ] as HTMLElement;
      console.log("underline - ", underline);
    }
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {children}
      <div className="underlineAnimation"></div>
      <style jsx>{`
        .underlineAnimation {
          position: absolute;
          bottom: -5;
          left: 0;
          height: 2px;
          background-color: black;
          width: 0;
          transition: width 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};
export default UnderBarAni;

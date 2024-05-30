// UnnderBarAni.tsx
// children에 있는 길이에 맞춰 호버 했을 때, 언더바 애니메이션이 생성됩니다.

"use client";

import { useEffect, useRef } from "react";
import { ChildrenProps } from "@/app/_interfaces/common/CommomProps";

// ? style-in-jsx를 활용하면 내부에 스타일 태그 생성 가능
// 오늘은 이것을 활용해서 작업해본다.

// * JS를 활용한 언더바 애니메이션
// 조건 : 자식 노드를 활용한다.
// 1. MOUSEENTER 할 때, 0~100% 길이로 언더바가 생성된다.
// 2. MOUSELEAVE 할 때, 100%~0 길이로 언더바가 사라진다.

// * 구현 방법
// 마우스 enter, leave 이벤트를 생성한다.
// 애니메이션을 생성한다. (width를 0에서 100%로 변경하고 그와 반대로 실행)

/**
 * 하위 컴포넌트에 마우스 호버 시 밑줄 애니메이션을 적용하는 컴포넌트입니다.
 * span으로 이루어져 있습니다.
 *
 * @param {React.FC<ChildrenProps>} props - 하위 컴포넌트를 감싸는 컨테이너 컴포넌트에 전달되는 속성들입니다.
 * @returns {React.ReactElement} - 밑줄 애니메이션을 적용한 컨테이너 컴포넌트를 반환합니다.
 * @example
 * ```tsx
 * "use client"
 * import React from 'react';
 * import UnderBarAni from './UnderBarAni';
 *
 * const ExampleComponent = () => {
 *   return (
 *     <UnderBarAni>
 *       Example Content
 *     </UnderBarAni>
 *   );
 * };
 * ```
 */

const UnderBarAni: React.FC<ChildrenProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    console.dir(container);
    if (container) {
      const underline = container.children[
        container.children.length - 1
      ] as HTMLElement;

      const handleMouseEnter = () => {
        console.log("handleMouseEnter");
        underline.style.width = "100%";
        console.log(underline.style.width);
      };
      const handleMouseLeave = () => {
        console.log("handleMouseEnter");
        underline.style.width = "0";
        console.log(underline.style.width);
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <span
      className="UnderBarContainer relative pb-[2px] cursor-pointer w-fit"
      ref={containerRef}
    >
      {children}
      <span className="underlineAnimation bg-main-1"></span>
      <style jsx>{`
        .underlineAnimation {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0;
          transition: width 0.3s ease-in-out;
        }
      `}</style>
    </span>
  );
};
export default UnderBarAni;

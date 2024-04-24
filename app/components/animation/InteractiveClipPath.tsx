"use client";

///images/kakao-talk-202402182120487351.png
// todo : 해당 컴포넌트에는 프로필 이미지에 관련된 애니메이션 효과를 구현한다.
// 1. 부모 div가 존재합니다.
// 2. 사진 영역 div가 존재합니다.
// 3. 이 사진 영역에 이미지가 존재합니다. 이 이미지는 고정되어 있습니다.
// 4. 이 사진영역을 위에 div가 따로 존재합니다. 이 div를 통해서만 이미지가 보여야 합니다.
// 5. 보여지는 div는 부모 div의 마우스에 따라 이동되게 됩니다.

// todo2 : 이미지 링크 태그를 추가해야 한다.

import { MouseEvent, useRef, useState } from "react";

const InteractiveClipPath: React.FC = () => {
  const svgAreaRef = useRef<SVGSVGElement>(null);
  const [mouseRect, setMouseRect] = useState({ x: 0, y: 0 });

  const moveRect = (event: MouseEvent<SVGSVGElement>) => {
    if (svgAreaRef.current) {
      const svgPoint = getSVGPoint(event, svgAreaRef.current);
      const moveDistance = 4;
      const offsetX = svgPoint.x < 100 ? moveDistance : -moveDistance;
      const offsetY = svgPoint.y < 100 ? moveDistance : -moveDistance;
      setMouseRect({ x: offsetX, y: offsetY });
    }
  };

  const resetRect = () => {
    setMouseRect({ x: 0, y: 0 });
  };

  const getSVGPoint = (
    event: MouseEvent<SVGSVGElement>,
    svg: SVGSVGElement
  ) => {
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const screenCTM = svg.getScreenCTM();
    if (screenCTM) {
      const inverseCTM = screenCTM.inverse();
      return pt.matrixTransform(inverseCTM);
    }
    return { x: 0, y: 0 };
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        ref={svgAreaRef}
        width="150"
        height="200"
        viewBox="0 0 150 200"
        onMouseMove={moveRect}
        onMouseLeave={resetRect}
      >
        <defs>
          <clipPath id="clipRect">
            <rect
              id="mouseRect"
              x={mouseRect.x}
              y={mouseRect.y}
              width="150"
              height="200"
            />
          </clipPath>
        </defs>
        <image
          clipPath="url(#clipRect)"
          href="/images/kakao-talk-202402182120487351.png"
          width="150"
          height="200"
        />
      </svg>
    </div>
  );
};

export default InteractiveClipPath;

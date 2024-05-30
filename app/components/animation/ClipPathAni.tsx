"use client";
// InteractiveClipPath.tsx
import React, { useRef, useState, useEffect } from "react";
import SvgAnimationController from "@/app/_services/SvgAnimationController";

const ClipPathAni: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 5, y: 0 });
  const [controller, setController] = useState<SvgAnimationController | null>(
    null
  );

  useEffect(() => {
    if (svgRef.current) {
      const newController = new SvgAnimationController(svgRef.current);
      setController(newController);
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg
        ref={svgRef}
        width="160"
        height="200"
        viewBox="0 0 160 200"
        onMouseMove={(e) => controller?.moveRect(e, setMousePosition)}
        onMouseLeave={() => controller?.resetRect(setMousePosition)}
      >
        <defs>
          <clipPath id="clipRect">
            <rect
              id="mouseRect"
              width="150"
              height="200"
              x={mousePosition.x}
              y={mousePosition.y}
            />
          </clipPath>
        </defs>
        <image
          clipPath="url(#clipRect)"
          href="/images/kakao-talk-202402182120487351.png"
          width="150"
          height="200"
          x="5"
        />
      </svg>
    </div>
  );
};

export default ClipPathAni;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IntroImgCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const parentDiv = document.getElementById("parentDiv");
    parentDiv?.addEventListener("mousemove", handleMouseMove);

    return () => {
      parentDiv?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parentDivStyles = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  };

  return (
    <div
      id="parentDiv"
      className="flex flex-col items-end gap-4"
      style={parentDivStyles}
    >
      <div id="childDiv">
        <Image
          src="/images/kakao-talk-202402182120487351.png"
          alt="개인 포트폴리오 사이트입니다."
          width={150}
          height={244}
        />
        <p className="text-[12px] leading-5 w-44 text-right">
          안녕하세요! <br />
          입체적인 <br />
          노력을 아끼지 않는 <br />
          프론트엔드 개발자 윤준현입니다.
        </p>
      </div>
    </div>
  );
};

export default IntroImgCard;

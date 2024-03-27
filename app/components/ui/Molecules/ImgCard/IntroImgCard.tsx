"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IntroImgCard = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const parentDiv = document.getElementById("parentDiv");
      if (parentDiv) {
        // const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // 마우스 위치에 따른 이미지 오프셋 계산
        let offsetX = (event.clientX - centerX) / 50;
        let offsetY = (event.clientY - centerY) / 50;

        // 오프셋 범위 제한
        offsetX = Math.max(-5, Math.min(5, offsetX));
        offsetY = Math.max(-5, Math.min(5, offsetY));

        // 오프셋 업데이트
        setOffset({ x: -offsetX, y: -offsetY }); // 마우스의 반대 방향으로 이동
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const childDivStyles = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: "transform 0.1s ease-out", // 부드러운 이동 효과
  };

  return (
    <div id="parentDiv" className="flex flex-col items-end gap-4 relative">
      <div
        id="childDiv"
        className="flex flex-col items-end gap-3"
        style={childDivStyles}
      >
        <Image
          src="/images/kakao-talk-202402182120487351.png"
          alt="개인 포트폴리오 사이트입니다."
          width={150}
          height={244}
        />
        <p className="text-[12px] leading-5 w-44 text-right">
          안녕하세요! <br />
          입체적인 노력을 아끼지 않는 <br />
          프론트엔드 개발자 윤준현입니다.
        </p>
      </div>
    </div>
  );
};

export default IntroImgCard;

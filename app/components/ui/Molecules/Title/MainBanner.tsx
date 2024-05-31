// MainBanner component
"use client";
import React, { useState } from "react";

const MainBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
    console.log("isHovered", !isHovered);
  };

  return (
    <div className="mainBannerOuter absolute right-2 bottom-0 w-[870px] h-[205px]">
      <div
        className="w-full h-full relative z-50"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <p
          className="mainBanner text-[16rem] koulen leading-[0.8] tracking-tight absolute right-10px bottom-0 z-30 font-sub-1"
          style={{ pointerEvents: "none" }} // 마우스 이벤트 무시
        >
          <a href="/main/introduce" className="block w-full h-full">
            YoonJieut
          </a>
        </p>
      </div>

      {isHovered ? (
        <p className="mainBannerRed text-[16rem] koulen leading-[0.8] tracking-tight absolute z-10 font-point opacity-10 transition-all duration-200 right-0 bottom-0">
          YoonJieut
        </p>
      ) : (
        <p className="mainBannerRed text-[16rem] koulen leading-[0.8] tracking-tight absolute z-10 font-point opacity-10 transition-all duration-200 right-2 bottom-4">
          YoonJieut
        </p>
      )}

      {isHovered ? (
        <p className="mainBannerGhost text-[16rem] koulen leading-[0.8] tracking-tight absolute z-20 font-sub-1 opacity-5 transition-all duration-200 right-0 bottom-0">
          YoonJieut
        </p>
      ) : (
        <p className="mainBannerGhost text-[16rem] koulen leading-[0.8] tracking-tight absolute z-20 font-sub-1 opacity-5 transition-all duration-200 right-3 bottom-3">
          YoonJieut
        </p>
      )}
    </div>
  );
};

export default MainBanner;

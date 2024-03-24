// MainBanner component
"use client";
import React, { useState } from "react";

const MainBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
    console.log("isHovered", isHovered);
  };

  return (
    <div
      className="mainBannerOuter absolute right-0 bottom-0 w-fit h-fit Testing"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <p className="mainBanner text-[16rem] koulen leading-[0.8] tracking-tight absolute right-0 bottom-0 z-50 font-sub-1">
        <a href="/" className="inline-block">
          YoonJieut
        </a>
      </p>

      <p
        className={`mainBannerRed text-[16rem] koulen leading-[0.8] tracking-tight absolute z-30 font-point opacity-10 transition-all duration-200 ${
          isHovered ? "right-0 bottom-0" : "right-2 bottom-4"
        }`}
      >
        YoonJieut
      </p>

      <p
        className={`mainBannerGhost text-[16rem] koulen leading-[0.8] tracking-tight absolute z-40 font-sub-1 opacity-5 transition-all duration-200 ${
          isHovered ? "right-0 bottom-0" : "right-3 bottom-3"
        }`}
      >
        YoonJieut
      </p>
    </div>
  );
};

export default MainBanner;

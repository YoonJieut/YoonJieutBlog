"use client";

import Image from "next/image";
import ImgUrl from "@/app/_constants/common/ImgUrl.json";
import IntroduceMessage from "@/app/_constants/introduce/IntroduceMessage.json";
import React from "react";

const IntroImgCard = () => {
  const formattedSub = IntroduceMessage.mainPage.introduceSub
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    <div id="parentDiv" className="flex flex-col items-end gap-4 relative">
      <div id="childDiv" className="flex flex-col items-end gap-3">
        <Image
          src={ImgUrl.profileUrl}
          alt="개인 포트폴리오 사이트입니다."
          width={IntroduceMessage.mainPage.width}
          height={IntroduceMessage.mainPage.height}
        />
        {formattedSub}
      </div>
    </div>
  );
};

export default IntroImgCard;

"use client";

import React from "react";
// import Image from "next/image";
// import ImgUrl from "@/app/_constants/common/ImgUrl.json";
import IntroduceMessage from "@/app/_constants/introduce/IntroduceMessage.json";
import ClipPathAni from "@/app/components/animation/ClipPathAni";

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
    <div className="parentDiv flex flex-col items-end gap-4 relative">
      <div className="childDiv flex flex-col items-end gap-3 text-[13px] text-right p-2">
        {/* <Image
          src={ImgUrl.profileUrl}
          alt="개인 포트폴리오 사이트입니다."
          width={IntroduceMessage.mainPage.width}
          height={IntroduceMessage.mainPage.height}
        /> */}
        <ClipPathAni />
        {formattedSub}
      </div>
    </div>
  );
};

export default IntroImgCard;

import React from "react";
import EntryShadowBar from "./EntryShadowBar";

const EntryFont: React.FC = () => {
  return (
    <div className="w-full relative h-[4.813rem] text-left text-[4.75rem] koulen font-main-1 ml-10">
      <div className="absolute top-[0rem] left-[0rem] tracking-[-0.04em] leading-[101%] -z-10">
        <p>yoonJiuet 개발자 포트폴리오</p>
      </div>
      <EntryShadowBar />
      <div className="absolute top-[0rem] left-[0rem] tracking-[-0.04em] leading-[101%] koulean z-10">
        <p>yoonJiuet</p>
      </div>
    </div>
  );
};

export default EntryFont;

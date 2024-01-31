import React from "react";

export const CustomInputArea = (): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-[37px] relative">
      <img
        className="relative w-[98.31px] h-[138px]"
        alt="Text cursor"
        src="text-cursor.png"
      />
      <div className="relative w-fit font-normal text-[#cdcdcd] text-[90px] tracking-[0] leading-[normal]">
        관리자 특별 커맨드
      </div>
    </div>
  );
};

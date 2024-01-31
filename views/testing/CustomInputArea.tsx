"use client";
import React from "react";

export const CustomInputArea = (): JSX.Element => {
  return (
    <div className="items-center gap-[37px] relative flex">
      <img
        className="relative w-[98.31px] h-[138px]"
        alt="Text cursor"
        src="/images/textCursor.png"
      />
      <div className="relative w-fit font-normal text-[#cdcdcd] text-[90px] tracking-tighter leading-normal">
        관리자 특별 커맨드
      </div>
    </div>
  );
};

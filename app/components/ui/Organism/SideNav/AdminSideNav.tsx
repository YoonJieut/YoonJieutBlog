"use client";
import { useRouter } from "next/router";
import { useState } from "react";

export const AdminSideNav = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  if (click === true) {
    router.push("/");
  }

  return (
    <div className="relative w-[337px] h-full bg-[#f1f1f11a] my-[10px]">
      <div
        className="absolute top-[28px] right-[20px] koulen font-normal text-[#d1d1d14c] text-[129px] tracking-[-5.16px] leading-[130.3px] whitespace-nowrap pointer"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        onClick={handleClick}
      >
        ADMIN
      </div>
    </div>
  );
};

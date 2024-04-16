"use client";

import Link from "next/link";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import useMenuNavigation from "@/app/_hook/portfolio/useMenuNavigation";
import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";

const MenuComp = () => {
  const { currentMenu, prevIndex, nextIndex } = useMenuNavigation();

  return (
    <>
      <div className="w-full flex justify-between mt-20">
        <Link href={portfolioMetaData[prevIndex].path}>이전 페이지</Link>
        <Link href={portfolioMetaData[nextIndex].path}>다음 페이지</Link>
      </div>
      <H1 text={currentMenu} />
    </>
  );
};

export default MenuComp;

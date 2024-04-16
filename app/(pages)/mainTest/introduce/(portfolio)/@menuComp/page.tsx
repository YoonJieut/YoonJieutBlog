"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import H1 from "@/app/components/ui/Atom/Basic/H1";

const MenuComp = () => {
  const [currentMenu, setCurrentMenu] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = usePathname();

  useEffect(() => {
    const currentPath = router.split("/").pop() ?? "";
    const nowIndex = portfolioMetaData.findIndex(
      (data) => data.name.toLowerCase() === currentPath?.toLowerCase()
    );

    if (nowIndex !== -1) {
      setCurrentMenu(currentPath);
      setCurrentIndex(nowIndex);
    }
  }, [router]);

  const prevIndex =
    currentIndex === 0 ? portfolioMetaData.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === portfolioMetaData.length - 1 ? 0 : currentIndex + 1;

  return (
    <>
      <div className="w-full flex justify-between mt-20">
        <Link href={portfolioMetaData[prevIndex].path}>이전 페이지</Link>
        <Link href={portfolioMetaData[nextIndex].path}>다음 페이지</Link>
      </div>
      <H1 text={currentMenu} />
      <H1 text={currentIndex.toString()} />
      <H1 text={prevIndex.toString()} />
      <H1 text={nextIndex.toString()} />
    </>
  );
};

export default MenuComp;

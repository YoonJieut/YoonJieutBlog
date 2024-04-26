import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import portfolioMetaData from "@/app/_constants/portfolio/portfolioMessage";
import urlParamMaker from "@/app/utils/urlParamMaker";

/**
 * 현재 경로를 바탕으로 메뉴 네비게이션 정보를 제공하는 훅.
 * @returns { object } 현재 메뉴, 현재 인덱스, 이전 인덱스, 다음 인덱스를 반환.
 */
const useMenuNavigation = () => {
  const [currentMenu, setCurrentMenu] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = usePathname();

  useEffect(() => {
    const currentPath = urlParamMaker(router) ?? "";
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

  return { currentMenu, currentIndex, prevIndex, nextIndex };
};

export default useMenuNavigation;

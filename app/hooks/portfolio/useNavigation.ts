"use client";
import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface handleClickProps {
  handlePrevClick: () => void | undefined;
  handleNextClick: () => void | undefined;
}

/**
 * 페이지 이동을 위한 커스텀 훅입니다.
 * @param slut - 현재 페이지의 이름을 나타내는 문자열입니다.
 * @example
 * const { handlePrevClick, handleNextClick } = useNavigation('YoonJieut');
 */

function useNavigation(slut: string | undefined) {
  const router = useRouter();
  const { currentPageIndex, setCurrentPageIndex } = useState(0);
  console.log(slut);
  // console.log("router - ", router);
  if (typeof slut === "string") {
    const currentPageIndex = portfolioMetaData.findIndex(
      (item) => item.name.toLowerCase() === slut.toLowerCase()
    );
    console.log("현재 주소의 index는? - ", currentPageIndex);
    if (currentPageIndex === -1) {
      console.error("오류 발생 ! : 위 파라미터는 없는 url입니다.");
      return;
    }
    const prevPageIndex =
      currentPageIndex > 0
        ? currentPageIndex - 1
        : portfolioMetaData.length - 1;
    const nextPageIndex =
      currentPageIndex < portfolioMetaData.length - 1
        ? currentPageIndex + 1
        : 0;

    const handlePrevClick: handleClickProps["handlePrevClick"] = () => {
      if (prevPageIndex !== null) {
        console.log("Prevbtn activate!");
        router.push(`${portfolioMetaData[nextPageIndex].path}`);
      }
    };
    const handleNextClick: handleClickProps["handleNextClick"] = () => {
      console.log("Nextbtn activate!");
      if (nextPageIndex !== null) {
        router.push(`${portfolioMetaData[nextPageIndex].path}`);
      }
    };

    return { handlePrevClick, handleNextClick };
  } else {
    console.error("slut이 undefined 입니다.", slut);
  }
}

export default useNavigation;

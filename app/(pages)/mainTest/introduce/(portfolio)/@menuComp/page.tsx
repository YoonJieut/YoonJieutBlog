"use client";

import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import urlParamMaker from "@/app/utils/urlParamMaker";
import { useEffect, useState } from "react";

// 해당 컴포넌트는 pf 페이지의 왼쪽 섹션에 해당하며 병렬 로딩을 구현했다.

// // todo1 : 현재의 url을 참고하여 현재 메뉴를 표시한다.
// 1. 현재 url에서 "/"을 기준으로 맨 뒤의 문자열을 가져온다.
// 2. 가져온 문자열을 컴포넌트에 업데이트 한다.
// todo2 : 이전, 다음 버튼을 클릭하면 이전, 다음 메뉴로 이동한다.
// 1. 가져온 문자열을 기준으로 현재 메뉴의 index를 반환해본다.
// 2. portfolioMetaData에 맞춰서 이전, 다음 메뉴로 리디렉션한다.
// 3. 맨 뒤로 가면 처음으로 돌아오는 로직을 추가한다. (0에서 뒤로 가면 마지막으로 간다 그리고 마지막에서 앞으로 가면 처음으로 간다.)

const MenuComp = () => {
  const [url, setUrl] = useState("");
  const [currentMenu, setCurrentMenu] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClickable(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // 현재 url에 따라 인덱스를 반환한다.
  useEffect(() => {
    // 랜더링 되면, 현재 주소를 상태로 저장한다.
    setUrl(window.location.href);

    const param = urlParamMaker(url);
    setCurrentMenu(param as string); // 타입에러 : 타입을 string으로 강제로 변환했다.

    // 현재 param을 기준으로 현재 메뉴의 index를 반환한다.
    const nowIndex = portfolioMetaData.findIndex(
      (data) => data.name.toLowerCase() === param
    );
    // 찾은 url이 없을 때, 오류 처리
    if (nowIndex === -1) {
      setCurrentIndex(0);
      return;
    }
    console.log("nowIndex", nowIndex);
    setCurrentIndex(nowIndex);
  }, [url]);

  // 현재 인덱스에 따른 다음, 이전 인덱스를 반환.
  useEffect(() => {
    console.log("MenuComp useEffect3");
    const prev =
      currentIndex == 0 ? portfolioMetaData.length - 1 : currentIndex - 1;
    const next =
      currentIndex === portfolioMetaData.length - 1 ? 0 : currentIndex + 1;
    setPrevIndex(prev);
    setNextIndex(next);
    console.log("prev", prev);
    console.log("next", next);
  }, [currentIndex]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isClickable) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="w-full flex justify-between mt-20">
        <a href={portfolioMetaData[prevIndex].path} onClick={handleLinkClick}>
          이전 페이지
        </a>
        <a href={portfolioMetaData[nextIndex].path} onClick={handleLinkClick}>
          다음 페이지
        </a>
      </div>
      <H1 text={currentMenu} />
      <H1 text={currentIndex.toString()} />
      <H1 text={prevIndex.toString()} />
      <H1 text={nextIndex.toString()} />
      <div>{portfolioMetaData[currentIndex].path}</div>
      <div>{portfolioMetaData[prevIndex].path}</div>
      <div>{portfolioMetaData[nextIndex].path}</div>
    </>
  );
};
export default MenuComp;

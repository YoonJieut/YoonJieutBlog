"use client";

import Div from "@/app/components/ui/Atom/Basic/Div";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import StackOuter from "@/app/components/ui/design/StackOuter";
import useNavigation from "@/app/hooks/portfolio/useNavigation";
import urlParamMaker from "@/app/utils/urlParamMaker";

// todo : 해당 레이아웃의 병렬 컴포넌트가 실행 될 때 마다 url을 검사하여 현재 index를 판단, 이전, 다음 버튼을 누르면 해당 페이지로 이동

const MenuComp = () => {
  console.log("MenuComp");
  // 현재 url에서 path를 추출하여 현재 index를 커스텀 훅에 제공한다.
  // const urlString = typeof window !== "undefined" ? window.location.href : "";
  const urlString = window.location.href;
  const nowPath = urlParamMaker(urlString);
  console.log(nowPath);
  const { handlePrevClick, handleNextClick } = useNavigation(nowPath);

  return (
    <>
      <button onClick={handlePrevClick}>이전 페이지</button>
      <button onClick={handleNextClick}>다음 페이지</button>
      {/* <ArrowBtns prevOnClick={prevClick} nextOnClick={nextClick} /> */}
      <Div className="flex flex-col gap-2 mt-40">
        <H1
          text="YOONJIEUT"
          className="koulen font-normal text-8xl leading-tight"
        />
        <Div className="StackFlexBox flex space-x-2 ">
          <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
          <StackOuter divClassName="rounded-full">NextJS</StackOuter>
          <StackOuter divClassName="rounded-full">Express</StackOuter>
        </Div>
      </Div>
    </>
  );
};
export default MenuComp;

"use client";

import Div from "@/app/components/ui/Atom/Basic/Div";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import StackOuter from "@/app/components/ui/design/StackOuter";
import urlParamMaker from "@/app/utils/urlParamMaker";
import { useEffect } from "react";

// todo : 해당 레이아웃의 병렬 컴포넌트가 실행 될 때 마다 url을 검사하여 현재 index를 판단, 이전, 다음 버튼을 누르면 해당 페이지로 이동

const MenuCompDefault = () => {
  useEffect(() => {
    const url = window.location.href;
    const param = urlParamMaker(url);
    console.log("param", param);
  }, []);

  return (
    <>
      <Div className="flex flex-col gap-2">
        <H1 text="YOONJIEUT" className="koulen font-normal text-8xl" />
        <Div className="StackFlexBox flex space-x-2 ">
          <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
          <StackOuter divClassName="rounded-full">NextJS</StackOuter>
          <StackOuter divClassName="rounded-full">Express</StackOuter>
        </Div>
      </Div>
    </>
  );
};
export default MenuCompDefault;

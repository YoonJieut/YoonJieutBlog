"use client";

import { useState } from "react";

// todo : 해당 레이아웃의 병렬 컴포넌트가 실행 될 때 마다 url을 검사하여 현재 index를 판단, 이전, 다음 버튼을 누르면 해당 페이지로 이동

const MenuComp = () => {
  console.log("MenuComp");
  // const { nowUrl, setNowUrl } = useState("");

  const handlePrevClick = () => {
    console.log("handlePrevClick");
  };
  const handleNextClick = () => {
    console.log("handleNextClick");
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            handlePrevClick;
          }}
        >
          이전 페이지
        </button>

        <button onClick={handleNextClick}>다음 페이지</button>
      </div>
    </>
  );
};
export default MenuComp;

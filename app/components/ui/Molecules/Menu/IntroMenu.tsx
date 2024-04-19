"use client";

import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import { useState } from "react";
import IntroMenuImage from "@/app/components/ui/Molecules/ImgCard/IntroMenuImage";
import IntroMenuList from "@/app/components/ui/Molecules/Lists/IntroMenuList";

// // todo 이 코드의 단점을 개선
// // 1. LI컴포넌트를 2번 렌더링 한다.
// // 2. 코드가 한군데에 모여있다.
// // 3. 에러 처리를 개선해야 한다.

const IntroMenu = () => {
  // portfolioMetaData가 비어있지 않은 경우 첫 번째 아이템을, 비어있는 경우 기본값을 설정
  const [selectedItem, setSelectedItem] = useState(
    portfolioMetaData[0] || {
      name: "",
      path: "",
      stack: [],
      introduce: { imgUrl: "", content: "" },
    }
  );

  // 메타데이터에서 쓰인 아이템을 클릭했을 때, 해당 아이템을 선택하는 함수
  const handleItemClick = (item: (typeof portfolioMetaData)[number]) => {
    console.log("item : ", item);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="IntroMenu flex justify-end w-full gap-4 Li Testing">
        <div className="w-1/4">
          <h1 className="koulen text-start titleTypo text-[80px]">Intro</h1>
        </div>
        {/* menulist 자리 */}
        <IntroMenuList
          items={portfolioMetaData}
          onItemClick={handleItemClick}
        />
      </div>
      <IntroMenuImage item={selectedItem} />
    </>
  );
};

export default IntroMenu;

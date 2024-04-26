"use client";

import portfolioMetaData from "@/app/_constants/portfolio/portfolioMessage";
import { useState } from "react";
import IntroMenuList from "@/app/components/ui/Molecules/Lists/IntroMenuList";
import IntroMenuImage from "@/app/components/ui/Molecules/ImgCard/IntroMenuImage";

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
      <div className="IntroMenu flex justify-end w-full gap-4 Li">
        <div className="w-1/4">
          <h1 className="koulen text-start titleTypo text-[80px] pointer-events-none">
            Intro
          </h1>
        </div>
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

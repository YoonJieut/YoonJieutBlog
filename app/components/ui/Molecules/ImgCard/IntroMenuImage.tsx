// Introduce 메뉴 리스트의 이미지 분자 컴포넌트입니다.

import { PortfolioMetaData } from "@/app/_interfaces/common/MetaDataProp";
import Image from "next/image";

export default function IntroMenuImage({ item }: { item: PortfolioMetaData }) {
  return (
    <div className="rightAlignImgCard flex flex-col justify-end items-end gap-4 ">
      {/* todo : 기본값을 에러 사진으로 대체해야 한다. */}
      <Image
        src={item.imgUrl || "/images/entry.png"}
        alt="이미지 설명"
        width={450}
        height={220}
        className="ImageCardImg flex justify-end"
      />
      <div className="ImageCardTextArea max-w-[600px]">
        <p className="text-right leading-6 text-[14px]">
          {item.introduce.content || "설명이 없습니다."}
        </p>
      </div>
    </div>
  );
}

import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import Li from "@/app/components/ui/Atom/Basic/Li";
import Ul from "@/app/components/ui/Atom/Basic/Ul";
import Image from "next/image";

const IntroMenu = () => {
  return (
    <div className="IntroMenu flex justify-end w-full gap-4 Li Testing">
      <div className="w-1/4">
        <h1 className="koulen text-start titleTypo text-[80px]">Intro</h1>
      </div>
      <Ul className="flex items-start justify-start gap-12 koulen text-4xl ">
        {portfolioMetaData.map((item, index) => (
          <Li key={index} className="Li typo">
            {item.name}
          </Li>
        ))}
      </Ul>
      {/* 이미지 카드 파트 */}
      <div className="rightAlignImgCard flex flex-col justify-end items-end gap-4 TeWsting">
        <Image
          src={
            portfolioMetaData[0]?.introduce?.imgUrl || "사진 주소가 없습니다."
          }
          alt="이미지 설명"
          width={450}
          height={220}
          className="ImageCardImg Testing flex justify-end"
        />
        <div className="ImageCardTextArea max-w-[600px]">
          <p className="text-right leading-7 text-[14px]">
            {portfolioMetaData[0]?.introduce?.content || "내용이 없습니다."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroMenu;

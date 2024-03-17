import type { NextPage } from "next";

const LargeImgCard: NextPage = () => {
  return (
    <div className="imgAndTextAreaCard absolute top-[calc(50%_-_155px)] left-[calc(50%_-_380px)] w-[46.438rem] h-[19.383rem]">
      <Image src={imgUrl} alt={imgTitle} width={imgWidth} height={imgHeight} />
      <div className="textArea absolute h-[25.08%] top-[74.92%] right-[3.103rem] leading-[198%] inline-block w-[43.334rem]">
        <p className="m-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio neque
          tenetur blanditiis nam eveniet aspernatur doloremque ipsam,
          consequatur earum distinctio! Perferendis repellat, consequuntur
          laborum suscipit at quo sed nobis repellendus.
        </p>
      </div>
    </div>
  );
};

export default LargeImgCard;

import Image from "next/image";
import Div from "@/app/components/ui/atom/Basic/Div";
import Ul from "@/app/components/ui/atom/Basic/Ul";
import Li from "@/app/components/ui/atom/Basic/Li";

interface ImgCardProps {
  imgUrl: string;
  imgAlt: string;
  imgTitle?: string;
  imgSub?: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
  className?: string;
  fill?: boolean;
}

/**
 * 이미지 카드 컴포넌트입니다.
 *
 *
 * @param {string} imgUrl - 이미지 URL
 * @param {number} imgAlt - 이미지 설명
 * @param {string} imgTitle - 이미지 제목
 * @param {string} imgSub - 이미지 부제목
 * @param {number} imgWidth - 이미지 너비
 * @param {number} imgHeight - 이미지 높이
 * @param {string} className? - 추가 클래스명
 * @param {boolean} fill? - 이미지 꽉 채우기 여부 있으면 Width, Height 무시
 * @example
 * ```tsx
 * <ImgCard imgUrl="/path/to/image.jpg" imgAlt="이미지 설명" imgTitle="이미지 제목" imgSub="이미지 부제목" imgWidth={300} imgHeight={200} className="custom-class" />
 * ```
 *
 * ```
 *{ fill 속성을 사용할 때 }
 * <ImgCard imgUrl="/path/to/image.jpg" imgAlt="이미지 설명" imgTitle="이미지 제목" imgSub="이미지 부제목" fill={true} className="custom-class" />
 * ```
 */

const ImgCard: React.FC<ImgCardProps> = ({
  imgUrl,
  imgTitle,
  imgSub,
  imgAlt,
  imgWidth,
  imgHeight,
  className,
  fill,
}) => {
  const classNameProps = className ? `${className}` : "imgCard";
  return (
    <Div className={classNameProps}>
      {fill ? (
        <Div className="imgArea relative w-full h-full">
          <Image src={imgUrl} alt={imgAlt} priority={true} fill />
        </Div>
      ) : (
        <Div className="imgArea relative w-full">
          <Image
            src={imgUrl}
            alt={imgAlt}
            // priority={true}
            width={Number(imgWidth)}
            height={Number(imgHeight)}
          />
        </Div>
      )}

      <Ul className="imgSubBar flex justify-between items-center h-8 text-[12px] -mt-1">
        <Li className="imgSubBarTitle text-left opacity-45  active:opacity-100 duration-200">
          {imgTitle}
        </Li>
        <Li className="imgSubBarSub text-right opacity-45 active:opacity-100 duration-200">
          {imgSub}
        </Li>
      </Ul>
    </Div>
  );
};
export default ImgCard;

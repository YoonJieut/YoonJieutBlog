import Image from "next/image";
import Div from "@/app/components/ui/atom/Basic/Div";
import Ul from "@/app/components/ui/atom/Basic/Ul";
import Li from "@/app/components/ui/atom/Basic/Li";

interface ImgCardProps {
  imgUrl: string;
  imgTitle?: string;
  imgSub?: string;
  imgAlt: string;
  imgWidth: string | number;
  imgHeight: string | number;
  className?: string;
}

/**
 * 이미지 카드 컴포넌트입니다.
 * @param {string} imgUrl - 이미지 URL
 * @param {string} imgTitle - 이미지 제목
 * @param {string} imgSub - 이미지 부제목
 * @param {number} imgAlt - 이미지 설명
 * @param {number} imgWidth - 이미지 너비
 * @param {number} imgHeight - 이미지 높이
 * @param {string} className? - 추가 클래스명
 * @example
 * ```tsx
 * <ImgCard imgUrl="/path/to/image.jpg" imgTitle="이미지 제목" imgSub="이미지 부제목" imgWidth={300} imgHeight={200} className="custom-class" />
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
}) => {
  const classNameProps = `imgCard ${className}`;
  return (
    <Div className={classNameProps}>
      <Div className="imgArea flex justify-center items-center">
        <Image
          src={imgUrl}
          alt={imgAlt}
          width={Number(imgWidth)}
          height={Number(imgHeight)}
        />
      </Div>
      <Ul className="imgSubBar flex justify-between items-center h-8 border-t border-t-zinc-900">
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

import Image from "next/image";

interface ImgCardProps {
  imgUrl: string;
  imgTitle: string;
  imgSub: string;
  imgWidth: string | number;
  imgHeight: string | number;
  className?: string;
}

/**
 * 이미지 카드 컴포넌트입니다.
 * @param {string} imgUrl - 이미지 URL
 * @param {string} imgTitle - 이미지 제목
 * @param {string} imgSub - 이미지 부제목
 * @param {number} imgWidth - 이미지 너비
 * @param {number} imgHeight - 이미지 높이
 * @param {string} className - 추가 클래스명
 * @example
 * ```tsx
 * <ImgCard imgUrl="/path/to/image.jpg" imgTitle="이미지 제목" imgSub="이미지 부제목" imgWidth={300} imgHeight={200} className="custom-class" />
 * ```
 */

const ImgCard: React.FC<ImgCardProps> = ({
  imgUrl,
  imgTitle,
  imgSub,
  imgWidth,
  imgHeight,
  className,
}) => {
  const classNameProps = `imgCard ${className}`;
  return (
    <div className={classNameProps}>
      <div className="imgArea flex justify-center items-center">
        <Image
          src={imgUrl}
          alt={imgTitle}
          width={imgWidth}
          height={imgHeight}
        />
      </div>
      <ul className="imgSubBar flex justify-between items-center h-8 border-t border-t-zinc-900">
        <li className="imgSubBarTitle text-left opacity-45  active:opacity-100 duration-200">
          {imgTitle}
        </li>
        <li className="imgSubBarSub text-right opacity-45 active:opacity-100 duration-200">
          {imgSub}
        </li>
      </ul>
    </div>
  );
};
export default ImgCard;

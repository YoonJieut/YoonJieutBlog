import { ImageProps } from "@/app/_interfaces/common/CommomProps";
import Image from "next/image";

interface RightAlignImgCardProps extends ImageProps {
  content: string;
}

/**
 * 이미지를 오른쪽 정렬한 카드 컴포넌트입니다.
 * @component
 * @example
 * ```tsx
 * <RightAlignImgCard
 *   imgUrl="/images/entry.png"
 *   imgAlt="이미지 설명"
 *   imgWidth={420}
 *   imgHeight={220}
 *   className="ImageCardImg flex justify-end"
 * />
 * ```
 */
const RightAlignImgCard: React.FC<RightAlignImgCardProps> = ({
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
  className,
  content,
}) => {
  return (
    <div
      className={`rightAlignImgCard flex flex-col justify-end items-end gap-5 ${className}`}
    >
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={Number(imgWidth)}
        height={Number(imgHeight)}
      />
      <div className="ImageCardTextArea max-w-[600px]">
        <p className="text-right leading-8 text-[14px]">{content}</p>
      </div>
    </div>
  );
};

export default RightAlignImgCard;

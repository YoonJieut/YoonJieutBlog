import {
  ChildrenProps,
  ClassNameProps,
} from "@/app/_interfaces/common/CommomProps";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";

interface ImgAndSubProps extends ChildrenProps, ClassNameProps {
  imgClass: string;
}

/**
 * 이미지카드와 부가 설명을 포함하는 컨테이너 컴포넌트입니다.
 *
 * @param {string} imgClass - 이미지카드에 적용할 CSS 클래스 이름 주로 넓이를 지정합니다. (예: w-3/8)
 * @param {ReactNode} children - 컨테이너 오른쪽에 표시할 자식 요소
 * @returns {JSX.Element} - 이미지카드와 부가 설명 컨테이너 컴포넌트
 *
 * @example
 * ```tsx
 * <ImgAndSub imgClass="custom-img" >
 *   <p>부제목 내용</p>
 * </ImgAndSub>
 * ```
 */

const ImgAndSub = ({ imgClass, children }: ImgAndSubProps) => {
  return (
    <div className="w-full flex justify-between">
      <ImgCard
        imgUrl="/images/textCursor.png"
        imgTitle="이미지 제목"
        imgSub="이미지 부제목"
        imgAlt=""
        imgWidth={250}
        imgHeight={250}
        className={imgClass}
      />

      <div className="imgSubTextArea w-2/5">{children}</div>
    </div>
  );
};

export default ImgAndSub;

import {
  ChildrenProps,
  ClassNameProps,
} from "@/app/_interfaces/common/CommomProps";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";

interface ImgAndSubProps extends ChildrenProps, ClassNameProps {
  imgClass: string;
}

/**
 * 이미지와 부제목을 포함하는 컨테이너 컴포넌트입니다.
 *
 * @param {string} imgClass - 이미지에 적용할 CSS 클래스 이름
 * @param {ReactNode} children - 이미지 아래에 표시할 자식 요소
 * @returns {JSX.Element} - 이미지와 부제목을 포함하는 컨테이너 컴포넌트
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
        imgWidth={250}
        imgHeight={250}
        className={imgClass}
      />

      <div className="imgSubTextArea">{children}</div>
    </div>
  );
};

export default ImgAndSub;

import { OnClickProps } from "@/app/_interfaces/common/CommomProps";
import Btn from "../../Atom/Basic/Btn";
import Div from "../../Atom/Basic/Div";

/**
 * 좌우 화살표 버튼 컴포넌트입니다.
 * @param {ArrowBtnsProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 화살표 버튼 컴포넌트 JSX 요소
 * @example
 * // 사용 예시
 * <ArrowBtns prevOnClick={handlePrevClick} nextOnClick={handleNextClick} />
 */
const ArrowBtns = ({
  prevOnClick,
  nextOnClick,
}: {
  prevOnClick?: OnClickProps["onClick"];
  nextOnClick?: OnClickProps["onClick"];
}) => {
  return (
    <Div className="w-56 h-8 flex justify-between items-center">
      <Btn content="<" className="text-5xl Imbue" onClick={prevOnClick} />
      <Btn content=">" className="text-5xl Imbue" onClick={nextOnClick} />
    </Div>
  );
};

export default ArrowBtns;

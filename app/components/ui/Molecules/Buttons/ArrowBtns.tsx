// import { OnClickProps } from "@/app/_interfaces/common/CommomProps";
import Btn from "@/app/components/ui/atom/Basic/Btn";
import Div from "@/app/components/ui/atom/Basic/Div";

/**
 * 좌우 화살표 버튼 컴포넌트입니다.
 * @param {ArrowBtnsProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 화살표 버튼 컴포넌트 JSX 요소
 * @example
 * // 사용 예시
 * <ArrowBtns prevOnClick={handlePrevClick} nextOnClick={handleNextClick} />
 */
// todo : onClick 이벤트 타입 정의
const ArrowBtns: React.FC = ({
  prevOnClick,
  nextOnClick,
}: {
  prevOnClick?: any;
  nextOnClick?: any;
}) => {
  return (
    <Div className="w-60 flex gap-24 text-[9.982rem] justify-between items-center koulen font-sub-1">
      <Btn
        content="<"
        className="relative tracking-[-0.04em] leading-[101%]"
        onClick={prevOnClick}
      />
      <Btn
        content=">"
        className="relative tracking-[-0.04em] leading-[101%]"
        onClick={nextOnClick}
      />
    </Div>
  );
};

export default ArrowBtns;

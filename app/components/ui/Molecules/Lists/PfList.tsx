import H3 from "../../atom/Basic/H3";
import Li from "../../atom/Basic/Li";
import Ul from "../../atom/Basic/Ul";
import StackOuter from "../../design/StackOuter";

interface PortfolioTempProps {
  index: number;
  stackArray: string[];
  children: React.ReactNode;
}

/**
 * 포트폴리오 리스트 컴포넌트입니다.
 * @param {number} index - 인덱스 값
 * @param {string[]} stackArray - 스택 배열
 * @param {React.ReactNode} children - 자식 요소
 * @example
 * // 사용 예시
 * <PfList index={1} stackArray={['React', 'TypeScript']} >
 *   <div>내용</div>
 * </PfList>
 */
const PfList: React.FC<PortfolioTempProps> = ({
  index,
  stackArray,
  children,
}) => {
  return (
    <div className=" flex w-3/4">
      {/* clamp() 함수를 사용하여 텍스트 크기가 반응형으로 조절되도록 설정합니다. */}
      <div className=" flex-1 text-[clamp(2rem,15vw,15rem)] font-bold leading-tight flex items-center justify-end Ambue">
        {index}
      </div>

      <div className=" w-2/3 h-full flex flex-col gap-4 p-4 justify-center">
        <H3 text="프로젝트1" />
        {children}
        <Ul className="flex gap-3">
          {stackArray.map((item, index) => (
            <Li key={index}>
              <StackOuter divClassName="rounded-full">{item}</StackOuter>
            </Li>
          ))}
        </Ul>
      </div>
    </div>
  );
};

export default PfList;

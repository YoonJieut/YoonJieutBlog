import Div from "@/app/components/ui/atom/Basic/Div";

// ! 단순 태그나 라벨은 p태그로 seo로 영향을 줄 것 같진 않다. 그러나 선택은 주도록 함
interface StackOuterProps {
  pText?: string;
  divClassName?: string;
  children: React.ReactNode;
}

/**
 * StackOuter 컴포넌트는 자식 요소들을 감싸는 외부 컨테이너입니다.
 *
 * @param pText? - StackOuter 컴포넌트 위에 표시할 텍스트입니다.
 * @param divClassName? - StackOuter 컴포넌트의 div 요소에 추가할 클래스 이름입니다.
 * @param children - StackOuter 컴포넌트의 자식 요소들입니다.
 * @returns StackOuter 컴포넌트를 반환합니다.
 *
 * @example
 * ```tsx
 * <StackOuter pText="Hello, World!" divClassName="customClass">
 *   <div>Child Component 1</div>
 * </StackOuter>
 * ```
 */
const StackOuter: React.FC<StackOuterProps> = ({
  pText,
  divClassName,
  children,
}) => {
  const divClass = `stackOuter border flexCenter py-[3px] px-[10px] ${divClassName}`;
  return (
    <Div className={divClass}>
      {pText && <p>{pText}</p>}
      {children}
    </Div>
  );
};

export default StackOuter;

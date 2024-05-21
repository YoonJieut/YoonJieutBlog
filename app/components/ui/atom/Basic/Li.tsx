import { OnClickProps } from "@/app/_interfaces/common/CommomProps";

interface DivProps extends OnClickProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

// Li 컴포넌트 정의
/**
 * 리스트 아이템 컴포넌트입니다.
 *
 * @component
 * @example
 * ```tsx
 * // 사용 예시
 * <Li className="customLi" onClick={handleClick}>
 *   List Item
 * </Li>
 * ```
 *
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 리스트 아이템 내용
 * @param {string} [props.className=""] - 추가적인 클래스 이름
 * @param {Function} props.onClick - 클릭 이벤트 핸들러 함수
 * @returns {React.ReactElement} 리스트 아이템 컴포넌트
 */
const Li: React.FC<DivProps> = ({ children, className = "", onClick }) => {
  // 기본 스타일 초기화 및 사용자 정의 클래스 적용
  const liStyle = {
    margin: 0,
    padding: 0,
    listStyleType: "none", // 기본 리스트 스타일 제거
  };

  return (
    <li className={`listItem ${className}`} style={liStyle} onClick={onClick}>
      {children}
    </li>
  );
};
export default Li;

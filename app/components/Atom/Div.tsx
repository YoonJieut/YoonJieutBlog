import React from "react";

interface DivProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}
/**
/**
 * 커스텀 div 컴포넌트입니다.
 *
 * @component
 * @example
 * ```tsx
 * <Div>
 *   이것은 커스텀 div 컴포넌트입니다.
 * </Div>
 * ```
 *
 * @param {Object} props - 컴포넌트 props입니다.
 * @param {React.ReactNode} props.children - div의 내용입니다.
 * @param {string} props.className - div의 CSS 클래스 이름입니다.
 * @returns {JSX.Element} 렌더링된 div 요소입니다.
 */
const Div: React.FC<DivProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Div;

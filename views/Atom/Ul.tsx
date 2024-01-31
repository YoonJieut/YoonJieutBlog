import React from "react";

interface UlProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

/**
 * Ul 컴포넌트는 ul 요소를 렌더링하는 React 함수 컴포넌트입니다.
 * @param {Object} props - Ul 컴포넌트의 속성
 * @param {React.ReactNode} props.children - ul 요소 내부에 표시될 자식 요소
 * @param {string} props.className - ul 요소에 적용될 클래스 이름
 * @returns {React.ReactElement} ul 요소를 렌더링한 React 엘리먼트
 * @example
 * ```tsx
 * <Ul className="list">
 *   <li>Item 1</li>
 *   <li>Item 2</li>
 *   <li>Item 3</li>
 * </Ul>
 * ```
 */
const Ul: React.FC<UlProps> = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

export default Ul;

import React from "react";

interface DivProps {
  children: React.ReactNode;
  className?: string; // Add className prop
}

/**
 * 리스트 아이템 컴포넌트입니다.
 * @example
 * ```tsx
 * <Li>리스트 아이템</Li>
 * ```
 *
 *
 * @param {React.FC<DivProps>} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {string} props.className - 클래스 이름
 * @returns {React.ReactElement} 리스트 아이템 컴포넌트
 *
 *
 */
const Li: React.FC<DivProps> = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};

export default Li;

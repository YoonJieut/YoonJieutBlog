import Link from "next/link";

interface LiLinkProps {
  children: React.ReactNode;
  className?: string; // Add className prop
  href: string;
}

/**
 * 리스트 아이템 컴포넌트입니다.
 * @example
 * ```tsx
 * <LiLink href="/pf/1">yoonjieut</LiLink>
 * ```
 *
 *
 * @param {React.FC<DivProps>} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 자식 요소
 * @param {string} props.className - 클래스 이름
 * @param {string} props.href - 링크 주소
 * @returns {React.ReactElement} 리스트 아이템 컴포넌트
 *
 *
 */
// Li 컴포넌트 정의
const LiLink: React.FC<LiLinkProps> = ({ href, children, className = "" }) => {
  // 기본 스타일 초기화 및 사용자 정의 클래스 적용
  const liStyle = {
    margin: 0,
    padding: 0,
    listStyleType: "none", // 기본 리스트 스타일 제거
  };

  return (
    <li className={`listItem ${className}`} style={liStyle}>
      <Link href={href}>{children}</Link>
    </li>
  );
};
export default LiLink;

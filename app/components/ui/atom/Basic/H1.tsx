interface H1Props {
  text: string;
  className?: string;
}

/**
 * H1 컴포넌트는 제목 1 수준의 텍스트를 표시하는 역할을 합니다.
 *
 * @param {object} props - H1 컴포넌트의 속성
 * @param {string} props.text - 표시할 텍스트
 * @param {string} props.className - 추가할 클래스 이름
 *
 * @example
 * // 사용 예시
 * <H1 text="제목입니다." className="text-red-500" />
 */
const H1: React.FC<H1Props> = ({ text, className }) => {
  return <h1 className={`text-4xl font-bold ${className}`}>{text}</h1>;
};

export default H1;

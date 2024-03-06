interface H3Props {
  text: string;
  className?: string;
}

/**
 * H3 컴포넌트는 제목 3 수준의 텍스트를 표시하는 역할을 합니다.
 *
 * @param {object} props - H3 컴포넌트의 속성
 * @param {string} props.text - 표시할 텍스트
 * @param {string} props.className - 추가할 클래스 이름
 *
 * @example
 * // 사용 예시
 * <H3 text="제목입니다." className="text-red-500" />
 */
const H3: React.FC<H3Props> = ({ text, className }) => {
  return <h3 className={`text-2xl font-bold ${className}`}>{text}</h3>;
};

export default H3;

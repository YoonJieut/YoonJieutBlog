interface H5Props {
  text: string;
  className?: string;
}

/**
 * H5 컴포넌트는 제목 5 수준의 텍스트를 표시하는 역할을 합니다.
 *
 * @param {object} props - H5 컴포넌트의 속성
 * @param {string} props.text - 표시할 텍스트
 * @param {string} props.className - 추가할 클래스 이름
 *
 * @example
 * // 사용 예시
 * <H5 text="제목입니다." className="text-blue-500" />
 */
const H5: React.FC<H5Props> = ({ text, className }) => {
  return <h5 className={`text-xl font-semibold ${className}`}>{text}</h5>;
};

export default H5;

/**
 * @description 포트폴리오 요약을 표시하는 컴포넌트입니다.
 * @param {string} title - 요약의 제목입니다.
 * @param {React.ReactNode} children - 요약 내용입니다.
 * @returns {JSX.Element} - TextPfSummary 컴포넌트를 반환합니다.
 */
const TextPfSummary = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start gap-1 text-left text-[1rem] text-lightgray">
      <b className="relative tracking-[-0.05em] leading-[101%]">{title}</b>
      <div className="relative text-[0.75rem] tracking-[-0.05em] leading-[114%]">
        <p className="m-0">{children}</p>
      </div>
    </div>
  );
};

export default TextPfSummary;

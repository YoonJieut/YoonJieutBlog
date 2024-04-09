import type { NextPage } from "next";
import TextPfSummary from "./TextPfSummary";
import StackOuter from "@/app/components/ui/design/StackOuter";

type PfSummaryCompProps = {
  className?: string;
  title: string;
  summary: string;
  stackArray: string[];
  children: React.ReactNode;
};

/**
 * 포트폴리오 요약 컴포넌트
 * @param {PfSummaryCompProps} props - 컴포넌트의 속성
 * @returns {JSX.Element} - 포트폴리오 요약 컴포넌트 JSX 요소
 */
const PfSummaryComp: NextPage<PfSummaryCompProps> = ({
  className,
  title,
  summary,
  stackArray,
  children,
}) => {
  const renderTags = (array: string[]): JSX.Element[] => {
    return array.map((item, index) => (
      <StackOuter key={index}>{item}</StackOuter>
    ));
  };

  const custom = `pfSummaryComp flex flex-col gap-3 ${className}`;

  return (
    <div className={custom}>
      <TextPfSummary title={title}>{summary}</TextPfSummary>
      <div className="flex gap-3">{renderTags(stackArray)}</div>
      <div className="">{children}</div>
    </div>
  );
};

export default PfSummaryComp;

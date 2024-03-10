/**
 * DotLine 컴포넌트는 점으로 이루어진 수평 라인입니다.
 */
const DotLine: React.FC = () => {
  const dotColor1 = "#4B4B4B";
  const dotColor2 = "#D1D1D1";

  return (
    <div className="detailLine flex gap-4">
      <div className={`w-1 h-1 bg-${dotColor1}`}></div>
      <div className={`w-1 h-1 bg-${dotColor1}`}></div>
      <div className={`w-1 h-1 bg-${dotColor2}`}></div>
      <div className={`w-1 h-1 bg-${dotColor2}`}></div>
      <div className={`w-1 h-1 bg-${dotColor2}`}></div>
      <div className={`w-1 h-1 bg-${dotColor2}`}></div>
    </div>
  );
};

export default DotLine;

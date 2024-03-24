const DotLine: React.FC = () => {
  // const dotColor1 = "#4B4B4B";
  // const dotColor2 = "#D1D1D1";
  // const custom = `detailLine ${className} flex gap-4`;

  return (
    <div className="detailLine flex gap-[14px] absolute top-0 right-0 z-30 w-[401px] h-1">
      <div className="w-[4px] h-1 bg-main"></div>
      <div className="w-[4px] h-1 bg-main"></div>
      <div className="w-[4px] h-1 bg-sub-1"></div>
      <div className="w-[4px] h-1 bg-sub-1"></div>
      <div className="w-[4px] h-1 bg-sub-1"></div>
      <div className="w-full h-1 bg-sub-1"></div>
    </div>
  );
};

export default DotLine;

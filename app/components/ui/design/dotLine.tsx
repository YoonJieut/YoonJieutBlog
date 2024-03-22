const DotLine: React.FC = () => {
  // const dotColor1 = "#4B4B4B";
  // const dotColor2 = "#D1D1D1";
  // const custom = `detailLine ${className} flex gap-4`;

  return (
    <div className="detailLine flex gap-[14px] absolute top-[373px] left-[-22px] z-30 w-[500px] h-1">
      <div className="w-[4px] h-1 bg-main"></div>
      <div className="w-[4px] h-1 bg-main"></div>
      <div className="w-[4px] h-1 bg-sub-1"></div>
      <div className="w-[4px] h-1 bg-sub-1"></div>
      <div className="w-[4px] h-1 bg-sub-1"></div>
      <div className="w-[400px] h-1 bg-sub-1"></div>
    </div>
  );
};

export default DotLine;

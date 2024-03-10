import StackOuter from "../../design/StackOuter";
import ArrowBtns from "../Buttons/ArrowBtns";

interface PfInfoProps {
  title: string;
  stackArray: string[];
}

const PfInfo: React.FC<PfInfoProps> = ({ title, stackArray }) => {
  return (
    <div className="flex flex-col pb-10 px-[20px] box-border ">
      <ArrowBtns />
      <div className="flex flex-col gap-3 font-sub-1">
        <div className="text-[6.25rem] typo">{title}</div>
        <div className="flex gap-3">
          {stackArray.map((item, index) => (
            <StackOuter divClassName="rounded-full" key={index}>
              {item}
            </StackOuter>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PfInfo;

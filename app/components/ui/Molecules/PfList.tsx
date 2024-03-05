import H3 from "../Atom/H3";
import Li from "../Atom/Li";
import Ul from "../Atom/Ul";
import StackOuter from "./StackOuter";

interface PortfolioTempProps {
  // Define the props for the component here
}

const PfList: React.FC<PortfolioTempProps> = () => {
  return (
    <div className="OutLine flex w-full h-1/3">
      <div className="OutLine w-1/3 text-9xl text-right">1</div>
      <div className="OutLine w-2/3 h-full flex flex-col gap-4 p-4">
        <H3 text="프로젝트1" />
        <p>프로젝트 설명</p>
        <Ul className="flex gap-3">
          {[1, 2, 3].map((item) => (
            <Li key={item}>
              <StackOuter divClassName="rounded-full">stack{item}</StackOuter>
            </Li>
          ))}
        </Ul>
      </div>
    </div>
  );
};

export default PfList;

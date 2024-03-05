import Div from "@/app/components/ui/Atom/Div";

interface StackOuterProps {
  pText: string;
  divClassName: string;
}

const StackOuter: React.FC<StackOuterProps> = ({ pText, divClassName }) => {
  const divClass = `stackOuter border ${divClassName}`;
  return (
    <Div className={divClass}>
      <p>{pText}</p>
    </Div>
  );
};

export default StackOuter;

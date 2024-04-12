import Div from "@/app/components/ui/Atom/Basic/Div";
import H1 from "@/app/components/ui/Atom/Basic/H1";
import StackOuter from "@/app/components/ui/design/StackOuter";

const menuCompdefault = () => {
  return (
    <>
      <p>이건 기본 defualt 페이지 입니다.</p>
      <Div className="flex flex-col gap-2">
        <H1 text="YOONJIEUT" className="koulen font-normal text-8xl" />
        <Div className="StackFlexBox flex space-x-2 ">
          <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
          <StackOuter divClassName="rounded-full">NextJS</StackOuter>
          <StackOuter divClassName="rounded-full">Express</StackOuter>
        </Div>
      </Div>
    </>
  );
};
export default menuCompdefault;

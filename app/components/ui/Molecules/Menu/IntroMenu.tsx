import Li from "@/app/components/ui/Atom/Basic/Li";
import Ul from "@/app/components/ui/Atom/Basic/Ul";

const IntroMenu = () => {
  return (
    <div className="IntroMenu flex justify-end w-full gap-4 Li Testing">
      <div className="w-1/4">
        <h1 className="koulen text-start titleTypo text-[80px]">Intro</h1>
      </div>
      <Ul className="flex items-start justify-start gap-12 koulen text-4xl ">
        <Li className="Li typo">YoonJieut</Li>
        <Li className="Li typo">ERP</Li>
        <Li className="Li typo">CHAT NOVEL</Li>
      </Ul>
    </div>
  );
};

export default IntroMenu;

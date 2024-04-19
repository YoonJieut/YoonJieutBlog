import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import Li from "@/app/components/ui/Atom/Basic/Li";
import Ul from "@/app/components/ui/Atom/Basic/Ul";

const IntroMenu = () => {
  return (
    <div className="IntroMenu flex justify-end w-full gap-4 Li Testing">
      <div className="w-1/4">
        <h1 className="koulen text-start titleTypo text-[80px]">Intro</h1>
      </div>
      <Ul className="flex items-start justify-start gap-12 koulen text-4xl ">
        {portfolioMetaData.map((item, index) => (
          <Li key={index} className="Li typo">
            {item.name}
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default IntroMenu;

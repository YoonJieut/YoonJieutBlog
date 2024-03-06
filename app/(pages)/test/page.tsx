import TextAlignRight from "@/app/components/ui/Molecules/Text/TextAlignRight";
import TextAlignLeft from "../../components/ui/Molecules/Text/TextAlignLeft";
import ImgAndSub from "../../components/ui/Organism/Container/ImgAndSub";

const TestPage = () => {
  return (
    <div className="text flex flex-col">
      <TextAlignLeft />
      <TextAlignRight />
      <ImgAndSub />
    </div>
  );
};

export default TestPage;

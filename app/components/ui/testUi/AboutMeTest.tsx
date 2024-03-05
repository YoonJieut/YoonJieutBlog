import H1 from "../Atom/H1";
import H3 from "../Atom/H3";
import Section from "../Atom/Section";
import DetailLine from "../DetailLine";
import Div from "../Atom/Div";
import TextArea from "../Molecules/TextArea";
const AboutMeTest: React.FC = () => {
  return (
    <div className="aboutMe flex gap-2 w-full h-full">
      <Section className="w-1/4 h-full OutLine p-4">
        <TextArea h1Text="윤준현 :)" textAreaClassName="flex flex-col gap-2">
          <p>010 - 4412 - 3007</p>
          <p>현 재 지 역 : 대전</p>
          <p>yoonjieut@Gmail</p>
          <p>GitHub: YoonJieut</p>
        </TextArea>

        <H3 text="학력" />
        <DetailLine className="w-1/6" />
      </Section>
      <Section className="w-1/4 h-full OutLine"> </Section>
      <Section className="w-1/4 h-full OutLine"> </Section>
      <Section className="w-1/4 h-full OutLine"> </Section>
    </div>
  );
};

export default AboutMeTest;

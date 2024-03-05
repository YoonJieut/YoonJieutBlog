import H5 from "../Atom/H5";
import Section from "../Atom/Section";
import TextArea from "../Molecules/TextArea";
import DetailLine from "@/app/components/ui/DetailLine";
const AboutMeTest: React.FC = () => {
  return (
    <div className="aboutMe flex gap-2 w-full h-full">
      <Section className="w-1/4 h-full OutLine p-4 flex flex-col gap-7">
        <TextArea h1Text="윤준현 :)" textAreaClassName="flex flex-col gap-2">
          <p>010 - 4412 - 3007</p>
          <p>현 재 지 역 : 대전</p>
          <p>yoonjieut@Gmail</p>
          <p>GitHub: YoonJieut</p>
        </TextArea>
        <TextArea h3Text="기술 스택" textAreaClassName="flex flex-col gap-1">
          <p>FrontEnd : React, TypeScript, JavaScrpt, HTML, CSS</p>
          <p>BackEnd : Node.js, Express</p>
          <p>DataBase : MySQL, MongoDB</p>
          <p>ETC : Git</p>
        </TextArea>
        <TextArea h3Text="인적 사항" textAreaClassName="flex flex-col gap-4">
          <span>
            <p>
              우송정보대학 (2,3년) 졸업 <br />
              언어치료과 / 사회복지학과
            </p>
          </span>
          <span>
            <p>
              웹 디자인 기능사 (2023.12) - 한국산업인력공단 <br />
              사회복지사 2급(2023.04) - 한국사회복지사협회
              <br />
              1종보통운전면허 (2015.03) - 경찰청(운전면허시험관리단)
            </p>
          </span>
          <span className="flex flex-col">
            <H5 text="수료" />
            <DetailLine className="w-1/12" />
          </span>
        </TextArea>
      </Section>
      <Section className="w-1/4 h-full OutLine"> </Section>
      <Section className="w-1/4 h-full OutLine"> </Section>
      <Section className="w-1/4 h-full OutLine"> </Section>
    </div>
  );
};

export default AboutMeTest;

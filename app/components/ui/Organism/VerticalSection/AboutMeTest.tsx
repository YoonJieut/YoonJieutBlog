import Section from "../../Atom/Basic/Section";
import TextArea from "../../Molecules/Text/TextArea";

const AboutMeTest: React.FC = () => {
  return (
    <div className="aboutMe flex gap-2 w-full h-full">
      <Section className="w-1/4 h-full OutLine p-4 flex flex-col gap-10">
        <TextArea h1Text="윤준현 :)" textAreaClassName="flex flex-col gap-2">
          <p>010 - 4412 - 3007</p>
          <p>현 재 지 역 : 대전</p>
          <p>yoonjieut@Gmail</p>
          <p>GitHub: YoonJieut</p>
          <p>1996.06.11</p>
        </TextArea>
        <TextArea h3Text="기술" textAreaClassName="flex flex-col gap-1">
          <p>FrontEnd : React, TypeScript, JavaScrpt, HTML, CSS</p>
          <p>BackEnd : Node.js, Express</p>
          <p>DataBase : MySQL, MariaDB, MongoDB</p>
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
          <span className="flex flex-col pt-4">
            <TextArea h5Text="교육" textAreaClassName="flex flex-col gap-2">
              <p>
                지역인재양성을 위한 IaaS기반 웹 서비스
                <br />
                (Reat,Node,Next,MLOps)개발자 과정 <br />
                2023.08 ~ 2024.03
              </p>
              <p>
                웹 앱 및 프론트엔드개발자(react) <br />
                2022.10 ~ 2023.03
              </p>
            </TextArea>
          </span>
        </TextArea>
      </Section>
      <Section className="w-1/4 h-full OutLine" style={{ filter: "blur(4px)" }}>
        {" "}
      </Section>
      <Section className="w-1/4 h-full OutLine" style={{ filter: "blur(8px)" }}>
        {" "}
      </Section>
      <Section
        className="w-1/4 h-full OutLine"
        style={{ filter: "blur(12px)" }}
      >
        {" "}
      </Section>
    </div>
  );
};

export default AboutMeTest;

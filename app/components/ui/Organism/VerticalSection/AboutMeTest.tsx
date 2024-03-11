import Section from "../../Atom/Basic/Section";
import AboutMePf from "./AboutMePf";

const AboutMeTest: React.FC = () => {
  return (
    <div className="aboutMe flex gap-2 w-full h-full">
      <Section className="w-1/4 h-full OutLine p-4 flex flex-col gap-10 bg-sub-1 font-basic">
        <div className="w-full relative flex flex-row items-start justify-between text-left text-[0.75rem] text-darkslategray font-noto-sans-kr">
          <div className="w-[10.188rem] relative h-[8.063rem]">
            <div className="absolute top-[2.25rem] left-[0rem] w-[10.188rem] h-[5.813rem]">
              <div className="absolute h-[85.22%] w-full top-[0%] left-[0%] leading-[184%] inline-block">
                <p className="m-0">{`010 - 4412 - 3007 `}</p>
                <p className="m-0 whitespace-pre-wrap">
                  현 재 지 역 : 대전yoonjieut@Gmail
                </p>
                <p className="m-0">
                  <a
                    className="text-[inherit] whitespace-pre-wrap"
                    href="https://github.com/YoonJieut"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      GitHub : YoonJieut
                    </span>
                  </a>
                  {` `}
                </p>
                <p className="m-0">1996 . 06 . 11</p>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[4.188rem] h-[1.688rem] text-[1rem]">
              <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray" />
              <b className="absolute top-[0%] left-[0%] leading-[101%]">
                윤준현
              </b>
            </div>
          </div>
          <img
            className="w-[7.313rem] relative h-[9.688rem] object-cover"
            alt="윤준현의 프로필사진입니다"
            src="/public/images/kakao-talk-202402182120487351.png"
          />
        </div>
        {/* 기술 */}
        <div className="relative w-full flex flex-col items-start justify-start gap-[0.625rem_0rem] text-left text-[1rem] text-darkslategray font-noto-sans-kr">
          <div className="w-[4.188rem] relative h-[1.688rem]">
            <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray" />
            <b className="absolute top-[0%] left-[0%] leading-[101%]">기술</b>
          </div>
          <div className="w-[18.375rem] relative h-[5.5rem] text-[0.75rem]">
            <div className="absolute h-[85.22%] w-full top-[0%] left-[0%] leading-[94%] inline-block">
              <p className="m-0">
                FrontEnd : React, TypeScript, JavaScrpt, HTML, CSS
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">BackEnd : Node.js, Express</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">DataBase : MySQL, MariaDB, MongoDB</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">ETC : Git</p>
            </div>
          </div>
        </div>
        {/* 교육 */}
        <div className="relative w-full flex flex-col items-start justify-start gap-[0.625rem_0rem] text-left text-[1rem] text-darkslategray font-noto-sans-kr">
          <div className="w-[4.188rem] relative h-[1.688rem]">
            <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray" />
            <b className="absolute top-[0%] left-[0%] leading-[101%]">교육</b>
          </div>
          <div className="w-[18.375rem] relative text-[0.75rem] leading-[184%] inline-block h-[6.391rem] shrink-0">
            <p className="m-0">지역인재양성을 위한 IaaS기반 웹 서비스</p>
            <p className="m-0">(Reat,Node,Next,MLOps)개발자 과정</p>
            <p className="m-0">2023.08 ~ 2024.03</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">웹 앱 및 프론트엔드개발자(react)</p>
            <p className="m-0">2022.10 ~ 2023.03</p>
          </div>
        </div>

        <div className="relative w-full flex flex-col items-start justify-start gap-[0.625rem_0rem] text-left text-[0.75rem] text-darkslategray font-noto-sans-kr">
          <div className="w-[4.188rem] relative h-[1.688rem] text-[1rem]">
            <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray" />
            <b className="absolute top-[0%] left-[0%] leading-[101%]">
              인적사항
            </b>
          </div>
          <div className="w-[18.375rem] relative h-[3.063rem]">
            <div className="absolute h-[85.22%] w-full top-[0%] left-[0%] leading-[184%] inline-block">
              <p className="m-0">우송정보대학 (2,3년) 졸업</p>
              <p className="m-0">언어치료과 / 사회복지학과</p>
            </div>
          </div>
          <div className="w-[18.375rem] relative h-[4.063rem]">
            <div className="absolute h-[85.22%] w-full top-[0%] left-[0%] leading-[184%] inline-block">
              <p className="m-0">
                웹 디자인 기능사 (2023.12) - 한국산업인력공단
              </p>
              <p className="m-0">
                사회복지사 2급(2023.04) - 한국사회복지사협회
              </p>
              <p className="m-0">
                1종보통운전면허 (2015.03) - 경찰청(운전면허시험관리단)
              </p>
            </div>
          </div>
        </div>
      </Section>
      <AboutMePf />
      <Section
        className="w-1/4 h-full OutLine"
        style={{ backdropFilter: "blur(12px)" }}
      ></Section>
      <Section
        className="w-1/4 h-full OutLine"
        style={{ backdropFilter: "blur(20x)" }}
      ></Section>
    </div>
  );
};

export default AboutMeTest;

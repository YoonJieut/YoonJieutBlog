import Image from "next/image";
import Section from "@/app/components/ui/Atom/Basic/Section";
import AboutMePf from "@/app/components/ui/Organism/VerticalSection/AboutMePf";
import AboutMeBackText from "@/app/components/ui/design/AboutMeBackText";
import AboutMeSection from "@/app/components/ui/Organism/VerticalSection/AboutMeSection";
import { unstable_noStore as noStore } from "next/cache";
import aboutmeMessage from "@/app/_constants/aboutme/aboutmeMessage.json";

const AboutmePage: React.FC = () => {
  noStore();

  return (
    <div className="aboutMe flex gap-2 w-full h-full relative">
      <Section className="w-1/4 h-full p-4 flex flex-col gap-10 bg-sub-1 font-basic overflow-hidden">
        <div className="w-full relative flex flex-row items-start justify-between text-left text-[0.75rem] text-darkslategray font-noto-sans-kr">
          <div className="w-[10.188rem] relative h-[8.063rem]">
            <div className="absolute top-[2.25rem] left-[0rem] w-[10.188rem] h-[5.813rem]">
              <div className="absolute h-[85.22%] w-full top-[0%] left-[0%] leading-[184%] inline-block">
                <p className="m-0">{`010 - 4412 - 3007 `}</p>
                <p className="m-0">현 재 지 역 :</p>
                <p className="m-0">이메일 자리</p>
                <p>{process.env.USER_PHONE}</p>
                <p className="m-0">
                  {/* . noopener 속성을 사용하면 새 창에서 열린 문서가 원래 문서에 대한 참조를 가지지 않게 함 */}
                  {/* HTTP 리퍼러 헤더는 사용자가 어떤 웹 페이지에서 링크를 클릭했는지를 나타내는 정보를 차단하는 noreferrer를 사용 */}
                  <a
                    rel="noreferrer noopener"
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
          <Image
            src="/images/kakao-talk-202402182120487351.png"
            alt="윤준현의 프로필사진입니다"
            width={120}
            height={155}
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
              <p className="m-0 ">
                FrontEnd : React, TypeScript, JavaScrpt, HTML, CSS
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">BackEnd : Node.js, Express</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">DataBase : MySQL, MariaDB, MongoDB</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">ETC : Git, Figma</p>
            </div>
          </div>
        </div>
        {/* 교육 */}
        <div className="relative w-full flex flex-col items-start justify-start gap-[0.625rem_0rem] text-left text-[1rem] text-darkslategray font-noto-sans-kr">
          <div className="w-[4.188rem] relative h-[1.688rem]">
            <div className="absolute h-[3.7%] w-full top-[96.3%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray" />
            <b className="absolute top-[0%] left-[0%] leading-[101%]">교육</b>
          </div>
          <div className="w-[18.375rem] relative text-[0.75rem] leading-[184%] inline-block shrink-0">
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
      {/* 2번째 세션 */}
      <AboutMePf />
      {/* 3번째 세션 */}
      <AboutMeSection rgbInt={57} blurPx={11} />
      {/* 4번째 세션 */}
      <AboutMeSection rgbInt={41} blurPx={12} />
      {/* 백그라운드 텍스트 컴포넌트 */}
      <AboutMeBackText className="absolute bottom-[-9%] right-[1%] -z-10" />
    </div>
  );
};

export default AboutmePage;

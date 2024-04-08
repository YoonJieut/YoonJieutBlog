import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/Atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";

// todo arrowbtn에 들어갈 기능 추가
//  pfRightSection에 내용 추가
export default function YoonJieutPage() {
  return (
    <div className="w-full h-11/12 flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        <ArrowBtns />
        <Div className="flex flex-col gap-2">
          <H1 text="YOONJIEUT" className="koulen font-normal text-8xl" />
          <Div className="StackFlexBox flex space-x-2 ">
            <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
            <StackOuter divClassName="rounded-full">NextJS</StackOuter>
            <StackOuter divClassName="rounded-full">Express</StackOuter>
          </Div>
        </Div>
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        {/* 메인 이미지 모습 */}
        <div className="EntryPart w-full">
          <ImgCard
            imgUrl="/images/erp_mainpage.png"
            imgAlt="메인 이미지 모습"
            imgTitle="ERP의 메인 페이지"
            imgWidth={950}
            imgHeight={440}
            className="mainPage-ImgCard"
          />
        </div>
        {/* 사용된 스택과 링크 */}
        <div className="w-full flex justify-between">
          <TextAlign title="사용된 스택과 링크" type="left">
            <p>{`스택 : TPYESCRIPT, NEXT.JS, EXPRESS, MySQL `}</p>
            <p className="m-0 whitespace-pre-wrap">{`의의 : 개인 블로그의 초석을 통한 성장, CRUD 학습, 디자인 공부`}</p>
            <p>툴 : Notion, Github, Figma</p>
            <p>&nbsp;</p>
            <p>
              {`개인 노션 링크 : `}
              <a
                className="whitespace-pre-wrap"
                href="https://resilient-aster-1dc.notion.site/ERP-63d8c0f6651e4808a677791431d18c61?pvs=4"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  윤준현 - 포트폴리오 사이트
                </span>
              </a>
            </p>
            <p>
              {`팀 노션 링크 : `}
              <a
                className="whitespace-pre-wrap"
                href="/FORM-8bb1a4092ee34bab83f8dbd0077fa943?pvs=24"
                target="_blank"
              >
                <span className="[text-decoration:underline]">개인 피그마</span>
              </a>
            </p>
            <p>
              {`피그마 : `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/5KDz54ixEJir3fd9V6fJ1L/ERP-DB?type=whiteboard&node-id=0-1`}
                target="_blank"
              >
                <span className="[text-decoration:underline]">ERP DB</span>
              </a>
              {` , `}
              <a
                className="whitespace-pre-wrap"
                href={`https://www.figma.com/file/2lrzpae0BKnkLMTZgJSjgY/Wireframe?type=design&node-id=37-41&mode=design`}
                target="_blank"
              >
                <span className="[text-decoration:underline]">Wireframe</span>
              </a>
            </p>
          </TextAlign>
        </div>
        {/* 중앙 정렬 */}
        <div className="w-full flexCenter">
          <TextAlign title="" type="center">
            <p>
              <b>개인적인 도전으로 독립심과 주관</b>을 갖기 위해{" "}
              <b>“나만의 디자인을 표현”</b>한 프로젝트입니다.
              <br />
              <b>기능</b>으로는 <b>간단한 CRUD 작업</b>과 <b>피그마 활용</b>를
              중점으로 작업하였습니다.
            </p>
          </TextAlign>
        </div>
        {/* 오른 정렬 - 주관갖기 어려운 신입 */}
        <div className="w-full flex justify-between">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 혼란의 과정 */}
        <div className="w-full flex justify-between">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 중앙 정렬 - 윤준현 연구 */}
        <div className="w-full flexCenter">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 오른 정렬 - 근거는 과거의 자신 */}
        <div className="w-full flex justify-between">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 확신은 디자인 연구 */}
        <div className="w-full flex justify-between">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 이미지 정렬 - 과거 흔적 */}
        <div className="w-full flex justify-between">
          {/* 이미지 노력 */}
          {/* 이미지 수기 */}
        </div>
        {/* 나만의 결론 - 전체 이미지 */}
        <div className="w-full flex justify-between"></div>
        {/* 오른 정렬 - 아쉬운 점 */}
        <div className="w-full flex justify-end">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
        {/* 왼쪽 정렬 - 의의와 결론 */}
        <div className="w-full flex justify-between">
          <TextAlign title="주관 갖기 어려운 신입" type="right">
            내용
          </TextAlign>
        </div>
      </Section>
    </div>
  );
}

import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/Atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";
import ImgCard from "@/app/components/ui/Molecules/ImgCard/ImgCard";

// todo arrowbtn에 들어갈 기능 추가
//  pfRightSection에 내용 추가
export default function ErpPage() {
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
            <p>{`스택 : TPYESCRIPT, NEXT.JS, EXPRESS, MARIADB `}</p>
            <p className="m-0 whitespace-pre-wrap">{`의의 : 협업 , Next.JS , DB 설계와 기획 팀 협업 `}</p>
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
                  윤준현 - 스타크래프트 ERP
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
                <span className="[text-decoration:underline]">FORM미쳤다</span>
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
      </Section>
    </div>
  );
}

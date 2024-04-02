import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";
import TextAlign from "@/app/components/ui/Molecules/Text/TextAlign";

// todo arrowbtn에 들어갈 기능 추가
//  pfRightSection에 내용 추가
export default function ChatNovelPage() {
  return (
    <div className="w-full  h-full flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        <ArrowBtns />
        <Div className="flex flex-col ">
          <H1 text="CHAT NOVEL" />
          <Div className="flex space-x-2">
            <StackOuter>TypeScript</StackOuter>
            <StackOuter>Express</StackOuter>
            <StackOuter>STUDY</StackOuter>
            <StackOuter>JSON</StackOuter>
            <StackOuter>CLOSURE</StackOuter>
          </Div>
        </Div>
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing">
        <div className="w-full flex justify-between">
          <TextAlign title="사용된 스택과 링크" type="left">
            스택 : JavaScript, EXPRESS, HTML, CSS 의의 : 협업 , Next.JS , DB
            <br />
            설계와 기획 팀 협업 툴 : Notion, Github <br />
            <br />
            개인 노션 링크 : 윤준현 - Metro2033-ownPath
          </TextAlign>
          {/* 이미지 자리 */}
        </div>
        <TextAlign title="" type="center">
          <p className="m-0">
            <span>{`작은 프로젝트를 통해서 `}</span>
            <b>DOM API를 활용한 스타일링과 태그 생성</b>
          </p>
          <p className="m-0">
            <span>{`그리고 추후에는 `}</span>
            <b>Closure 패턴</b>
            <span>{`과 `}</span>
            <b>직접 만든 함수</b>
            <span>를 활용해보는 연습을 할 수 있었습니다.</span>
          </p>
        </TextAlign>
      </Section>
    </div>
  );
}

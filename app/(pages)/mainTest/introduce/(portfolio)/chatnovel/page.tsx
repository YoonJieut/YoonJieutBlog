import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/Atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";
import ChatnovelContent from "@/app/components/ui/Page/portfolio/chatnovel/ChatNovelContent";

// todo arrowbtn에 들어갈 기능 추가
//  pfRightSection에 내용 추가
export default function ChatNovelPage() {
  return (
    <div className="w-full h-11/12 flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        <ArrowBtns />
        <Div className="flex flex-col gap-2">
          <H1 text="CHAT NOVEL" className="koulen font-normal text-8xl" />
          <Div className="StackFlexBox flex space-x-2 ">
            <StackOuter divClassName="rounded-full">TypeScript</StackOuter>
            <StackOuter divClassName="rounded-full">Express</StackOuter>
            <StackOuter divClassName="rounded-full">STUDY</StackOuter>
            <StackOuter divClassName="rounded-full">JSON</StackOuter>
            <StackOuter divClassName="rounded-full">CLOSURE</StackOuter>
          </Div>
        </Div>
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll">
        <ChatnovelContent />
      </Section>
    </div>
  );
}

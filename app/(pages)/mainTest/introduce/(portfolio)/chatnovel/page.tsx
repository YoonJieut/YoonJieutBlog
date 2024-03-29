import H1 from "@/app/components/ui/Atom/Basic/H1";
import Section from "@/app/components/ui/Atom/Basic/Section";
import ArrowBtns from "@/app/components/ui/Molecules/Buttons/ArrowBtns";
import Div from "@/app/components/ui/atom/Basic/Div";
import StackOuter from "@/app/components/ui/design/StackOuter";

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
      <Section className="portfolioRightSection w-1/2 Testing"></Section>
    </div>
  );
}

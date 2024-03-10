import { ReactNode } from "react";
import ArrowBtns from "../../Molecules/Buttons/ArrowBtns";
import Section from "@/app/components/ui/Atom/Basic/Section";
import H1 from "../../Atom/Basic/H1";

/**
 * 포트폴리오 아이템 레이아웃 컴포넌트
 * @param {string} title - 제목
 * @param {ReactNode} children - 자식 컴포넌트
 * @returns {ReactNode} - 레이아웃 컴포넌트
 */
const PfItemsLayout = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex w-screen h-screen overflow-x-hidden p-4">
      <div className="menuPart w-1/2 h-full OutLine flex flex-col gap-4">
        <ArrowBtns />
        <H1 className="koulen" text={title} />
      </div>
      <Section className="contentPart w-1/2 flex flex-col gap-[200px] pt-[50px] pb-[100px] overflow-x-hidden">
        {children}
      </Section>
    </div>
  );
};

export default PfItemsLayout;

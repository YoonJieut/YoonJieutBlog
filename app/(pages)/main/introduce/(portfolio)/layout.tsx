import Section from "@/app/components/ui/atom/Basic/Section";
// import MenuComp from "./@menuComp/page";

export default function PortfolioLayout({
  menuComp,
  children,
}: {
  menuComp: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-11/12 flex">
      <Section className="portfolioLeftSection w-1/2 h-full">
        {menuComp}
      </Section>

      <Section className="portfolioRightSection w-1/2  flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        {children}
      </Section>
    </div>
  );
}

import MenuComp from "./@menuComp/page";
import Section from "@/app/components/ui/Atom/Basic/Section";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-11/12 flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        <MenuComp />
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing flex flex-col gap-[300px] overflow-x-hidden overflow-y-scroll text-[0.875rem] leading-[120%]">
        {children}
      </Section>
    </div>
  );
}

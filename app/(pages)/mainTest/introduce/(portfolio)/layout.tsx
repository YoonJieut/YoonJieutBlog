import Section from "@/app/components/ui/Atom/Basic/Section";
export default function PortFolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full  h-full flex Tesing">
      <Section className="portfolioLeftSection w-1/2 h-full">
        포트폴리오 레이아웃 왼쪽
      </Section>
      <Section className="portfolioRightSection w-1/2 Testing">
        {children}
      </Section>
    </div>
  );
}

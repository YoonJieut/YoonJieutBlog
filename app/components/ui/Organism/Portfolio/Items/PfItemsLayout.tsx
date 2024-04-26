import portfolioMetaData from "@/app/_constants/portfolio/portfolioMessage";
import PfItemsMenu from "@/app/components/ui/Molecules/Menu/PfLayout/PfItemsMenu";
import StackOuter from "@/app/components/ui/design/StackOuter";
import Link from "next/link";

interface PortfolioItem {
  prevIndex: number;
  nextIndex: number;
  currentIndex: number;
}

export default function PfItemsLayout({
  prevIndex,
  nextIndex,
  currentIndex,
}: PortfolioItem) {
  return (
    <>
      {/* arrowBtn 파트 */}
      <div className="w-60 flex justify-between items-center tracking-[-0.04em] leading-[101%] text-[9.982rem] koulen font-sub-1">
        <Link href={portfolioMetaData[prevIndex].path}>{"<"}</Link>
        <Link href={portfolioMetaData[nextIndex].path}>{">"}</Link>
      </div>
      {/* 메뉴 설명 파트 */}
      <PfItemsMenu title={portfolioMetaData[currentIndex].name}>
        {portfolioMetaData[currentIndex].stack.map((item, index) => (
          <StackOuter key={index} divClassName="rounded-full ">
            {item}
          </StackOuter>
        ))}
      </PfItemsMenu>
    </>
  );
}

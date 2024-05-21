import portfolioMetaData from "@/app/_constants/portfolio/portfolioMessage";
import Li from "@/app/components/ui/atom/Basic/Li";
import Ul from "@/app/components/ui/atom/Basic/Ul";
// Introduce 페이지의 메뉴 리스트 컴포넌트입니다.

export default function IntroMenuList({
  items,
  onItemClick,
}: {
  items: typeof portfolioMetaData;
  onItemClick: (item: (typeof portfolioMetaData)[number]) => void;
}) {
  return (
    <Ul className="flex items-start justify-start gap-12 koulen text-4xl ">
      {portfolioMetaData.map((item, index) => (
        <Li
          key={index}
          className="Li typo cursor-pointer"
          onClick={() => onItemClick(item)}
        >
          {item.name}
        </Li>
      ))}
    </Ul>
  );
}

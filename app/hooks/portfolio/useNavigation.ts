import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import { useRouter } from "next/navigation";

function useNavigation(slut: string | undefined) {
  const router = useRouter();
  console.log("router - ", router);
  if (typeof slut === "string") {
    const currentPageIndex = portfolioMetaData.findIndex(
      (item) => item.name.toLowerCase() === slut
    );
    console.log(currentPageIndex);

    const prevPageIndex = currentPageIndex > 0 ? currentPageIndex - 1 : null;
    const nextPageIndex =
      currentPageIndex < portfolioMetaData.length - 1
        ? currentPageIndex + 1
        : null;

    const handlePrevClick = () => {
      if (prevPageIndex !== null) {
        router.push(portfolioMetaData[prevPageIndex].path);
      }
    };

    const handleNextClick = () => {
      if (nextPageIndex !== null) {
        router.push(portfolioMetaData[nextPageIndex].path);
      }
    };

    return { handlePrevClick, handleNextClick };
  } else {
    console.error("slut이 undefined 입니다.", slut);
  }
}

export default useNavigation;

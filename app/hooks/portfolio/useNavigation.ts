import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";
import { useRouter } from "next/navigation";

function useNavigation(slut: string | undefined) {
  const router = useRouter();
  console.log(slut);
  // console.log("router - ", router);
  if (typeof slut === "string") {
    const currentPageIndex = portfolioMetaData.findIndex(
      (item) => item.name.toLowerCase() === slut.toLowerCase()
    );
    console.log("현재 주소의 index는? - ", currentPageIndex);
    if (currentPageIndex === -1) {
      console.error("오류 발생 ! : 위 파라미터는 없는 url입니다.");
    }
    const prevPageIndex =
      currentPageIndex > 0
        ? currentPageIndex - 1
        : portfolioMetaData.length - 1;
    const nextPageIndex =
      currentPageIndex < portfolioMetaData.length - 1
        ? currentPageIndex + 1
        : 0;

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

import { useRouter } from "next/router";
import portfolioMetaData from "@/app/_constants/portfolio/portfolioMetaData";

function useNavigation() {
  console.log("useNavigation 실행");
  const router = useRouter();
  console.log("router", router.pathname);

  const currentPageIndex = portfolioMetaData.findIndex(
    (page) => page.path === router.pathname
  );
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
}

export default useNavigation;

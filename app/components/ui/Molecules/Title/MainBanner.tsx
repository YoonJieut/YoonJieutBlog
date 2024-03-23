// MainBanner component

import Link from "next/link";

// 애니메이션 슈도코드
// 1. mainBannerRed 클래스의 기본 값은 right-3, bottom-7이다.
// 2. mainBannerGhost 클래스의 기본 값은 right-5, bottom-5이다.
// 3. mainbannerouter에 마우스가 호버 되면 애니메이션이 실행된다.
// 4. mainBannerRed, mainBannerGhost의 클래스가 right-0, bottom-0 바뀐다.

const MainBanner = () => {
  return (
    <div className="mainBannerOuter absolute right-0 bottom-0">
      <a href="/">
        <p className="mainBanner text-[16rem] koulen leading-[0.8] tracking-tight absolute right-5 bottoom-5 z-50 font-sub-1 transition-all duration-300 hover:right-0 hover:bottom-0">
          YoonJieut
        </p>
      </a>
      <p className="mainBannerRed text-[16rem] koulen leading-[0.8] tracking-tight absolute right-3 bottom-7 z-30 font-point opacity-10">
        YoonJieut
      </p>
      <p className="mainBannerGhost text-[16rem] koulen leading-[0.8] tracking-tight absolute right-5 bottom-5 z-40 font-sub-1 opacity-5">
        YoonJieut
      </p>
    </div>
  );
};

export default MainBanner;

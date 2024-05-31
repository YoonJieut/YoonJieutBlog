"use client";
import Link from "next/link";
import Image from "next/image";
import UnderBarAni from "@/app/components/animation/UnderBarAni";

const MainFooter: React.FC = () => {
  return (
    <footer className="w-full h-1/12 OutLine flex bg-sub-1 text-[12px] font-basic leading-4">
      <div className="h-full w-2/12 flex flex-col font-main-1">
        <p>Frontend</p>
        <p>Developer</p>
      </div>
      <div className="h-full w-2/12 flex flex-col"></div>
      <div className="h-full w-4/12 flex flex-col ">
        {/* todo : 스크롤 메뉴 속성을 추가해야함 */}
        <Link href="/main" className="block w-fit hover:underline">
          home
        </Link>
        <Link href="/main/introduce" className="block w-fit hover:underline">
          introduce
        </Link>
        <Link href="/main/portfolio" className="block w-fit hover:underline">
          portFolio
        </Link>
        <Link href="/main/blog" className="block w-fit hover:underline">
          posts
        </Link>
      </div>
      <div className="h-full w-1/12 flex flex-col">
        <h5>EMAIL</h5>
        <h5>GITHUB</h5>
        <h5>INFO</h5>
      </div>
      <div className="h-full w-3/12 flex flex-col">
        <Link href="/main/aboutme">
          <Image
            src="/images/contactMe.png"
            alt="contact me, 윤준현 프론트엔드 개발자에 대한 정보가 담겨 있습니다. 클릭하면 aboutme 페이지로 넘어갑니다."
            width={160}
            height={40}
          />
        </Link>
      </div>
    </footer>
  );
};

export default MainFooter;
